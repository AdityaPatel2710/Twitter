import { useState } from "react";

import "./AddTweet.css";

function AddTweet({ onAddTweet }) {
    const [text, setText] = useState("");

    return (
        <div className="add-tweet-container">
            <input 
                value = {text} 
                placeholder = "What's happening?"
                onChange = {(Event) => setText(Event.target.value)} 
            />
            <button 
                disabled = {(text == "")}
                onClick = {() => {
                    setText("");
                    onAddTweet(text);
                }}
            > 
                Tweet!! 
            </button>
        </div>
    )
}


export default AddTweet;
