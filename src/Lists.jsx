import React from "react";

const Lists = (props) => {

    
    return (
        <>
            <div className="todo_style">
                 <i 
                 className="fa-solid fa-circle-xmark" 
                 aria-hidden = "true" 
                 onClick = {() => {
                 props.onSelect(props.id);
                 }}
                 />
                <li>{props.text}</li>
            </div>
        </>
    );
};
export default Lists;