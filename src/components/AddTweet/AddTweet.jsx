import { useState } from "react";

function AddTweet({ onAddTweet }) {
    const [text, setText] = useState("");

    return (
        <div>
            <input 
                value = {text} 
                placeholder = "Write new tweet..."
                onChange = {(Event) => setText(Event.target.value)} 
            />
            <button 
                disabled = {(text == "")}
                onClick = {() => {
                    setText("");
                    onAddTweet(text);
                }}
            > 
                Post!! 
            </button>
        </div>
    )
}


export default AddTweet;
