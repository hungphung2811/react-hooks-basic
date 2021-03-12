import React, { useState } from 'react';
import './colorBox.scss';

function getRandomColor() {
    const COLOR_LIST = ['black', 'yellow', 'green', 'red'];
    const randomIndex = Math.floor(Math.random() * COLOR_LIST.length)
    return COLOR_LIST[randomIndex];
}
function ColorBox() { 
    const [color, setColor] = useState(() => {
        return localStorage.getItem('color-box') || 'red';
    });
    function handleBoxClick() {
        const newColor = getRandomColor();
        localStorage.setItem('color-box', newColor);
        setColor(newColor);
    }
    return (
        <div>
            <div
                className="color-box"
                style={{ backgroundColor: color }}
                onClick={handleBoxClick}
            >
            </div>
        </div>
    );
}

export default ColorBox;