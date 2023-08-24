import React from 'react';
import { useState,useEffect } from "react";
import './styles/InputOption.css'
const InputOption=(props)=> {
    const [activeOption, setactiveOption] = useState("Menu");
    const [active, setActive] = useState(true);
    const [buttonList, setbuttonList] = useState([]);

    const [theme, setTheme] = useState({ backgroundColor: 'snow', color: '#3076f3' });
    useEffect(() => {
        if (props.theme == "white") {
            setTheme({ backgroundColor: 'snow', color: '#3076f3' });
        } else {
            setTheme({ backgroundColor: '#1f2434', color: '#3076f3' });
        }
    }, [props.theme]);

    const showOptions = () => {
        if (active) { setActive(false); setbuttonList(["Idli", "Dosa", "samosa", "friedRice"]); } else { setActive(true); setbuttonList([]); }
    }
    return (
        <>
           
        <div style={props.style }>
            <button class="optionBar" style={ theme } onClick={showOptions}>{activeOption}</button>

            {buttonList.map((buttonName, index) => (
                <button class="optionBar" style={ theme } key={index} onClick={() => { setactiveOption(buttonName); setbuttonList([]); setActive(true) }}>{buttonName}</button>
            ))
            }
            </div>
        </>
    );
}
export default InputOption;