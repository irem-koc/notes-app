import React from "react";

const Form = () => {
    return (
        <div>
            <div className="textarea-container">
                <textarea
                    style={{ resize: "none" }}
                    placeholder="Enter your note here...."
                    cols="30"
                    rows="10"
                ></textarea>
                <div className="buttons-area">
                    <div className="buttons">
                        <button className="pink"></button>
                        <button className="purple"></button>
                        <button className="yellow"></button>
                        <button className="blue"></button>
                        <button className="green"></button>
                    </div>
                    <button className="add-btn">ADD</button>
                </div>
            </div>
        </div>
    );
};

export default Form;
