import React, { useState } from 'react';
import Lists from './Lists';
const App = () => {
    const[inputList,setinputList] = useState("");
    const[Items , setItems] = useState([]);
    const itemEvent = (event) =>{
        setinputList(event.target.value);

    };
    const list = () => {

        if (inputList.trim() === "") {
            alert("Please enter an item.");
            return;
        }

        setItems((oldItems) => {
            if (oldItems.length < 10) {
                return [...oldItems, inputList];
            } else {
                alert("You can only add up to 10 items.");
                return oldItems;
            }
        });
        setinputList("");
    };
    const deleteItems = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((arr,index) => {
                return index !==id;
            })
         })
    }
    return (
        <>
            <div className='main_div'>
                <div className='center_div'>
                    <br />
                    <h1> ToDo List</h1>
                    <br />
                    <input type='text' placeholder='Add Task' 
                    value = {inputList}
                    onChange={itemEvent}/>
                    <button onClick={list}> + </button>


                    <ol>
                        {/* <li>{inputList}</li> */}
                       {
                        Items.map((itemval, index) => {  
                           return  <Lists 
                           key={index} 
                           id={index} 
                           text = {itemval} 
                           onSelect = {deleteItems}
                           />;
                        })}
                    </ol>
                </div>
            </div>


        </>
    )

};

export default App;
