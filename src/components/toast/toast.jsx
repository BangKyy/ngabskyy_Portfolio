import React, {useState} from "react";
import "./toast.css";

const Toast = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <div className="toast-section" id="toast">
            <div className="toast-box">
                
            </div>
        </div>
    );
};