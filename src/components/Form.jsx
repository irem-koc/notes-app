import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, changeColor } from "../redux/note/noteSlicer";
import { BsCheckLg } from "react-icons/bs";
const Form = () => {
    const color = useSelector((state) => state.note.activeColor);
    const dispatch = useDispatch();
    const [noteValue, setNoteValue] = useState("");
    const [show, setShow] = useState(false);
    const handleAdd = (event) => {
        event.preventDefault();
        dispatch(addItem({ title: noteValue, color }));
        setNoteValue("");
    };
    const handleColor = (color) => {
        dispatch(changeColor(color));
        setShow(true)
    };
    return (
        <div>
            <div className="textarea-container">
                <textarea
                    value={noteValue}
                    onChange={(e) => setNoteValue(e.target.value)}
                    style={{ resize: "none" }}
                    placeholder="Enter your note here...."
                    cols="30"
                    rows="10"
                ></textarea>
                <div className="buttons-area">
                    <div className="buttons">
                        <button
                            onClick={() => handleColor("#F06292")}
                            className="pink"
                        >
                           { show&&<BsCheckLg className="check-icon" />}
                        </button>
                        <button
                            onClick={() => handleColor("#BA68C8")}
                            className="purple"
                        >
                           { show&&<BsCheckLg className="check-icon" />}
                        </button>

                        <button
                            onClick={() => handleColor("#FFD54F")}
                            className="yellow"
                        >
                            { show&&<BsCheckLg className="check-icon" />}
                        </button>

                        <button
                            onClick={() => handleColor("#4FC3F7")}
                            className="blue"
                        >
                            { show&&<BsCheckLg className="check-icon" />}
                        </button>

                        <button
                            onClick={() => handleColor("#AED581")}
                            className="green"
                        >
                            { show&&<BsCheckLg className="check-icon" />}
                        </button>
                    </div>
                    <button className="add-btn" onClick={handleAdd}>
                        ADD
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Form;
