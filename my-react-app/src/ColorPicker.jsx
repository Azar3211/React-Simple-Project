import React, { useState } from 'react';

function ColorPicker() {
    const [color, setColor] = useState("#F00000");

    function handleColorChange(event) {
        setColor(event.target.value);
    }

    return (<div className='color-picker-container'>
        <h1>Color Picker</h1>
        <div className='color-display'
            style={{ backgroundColor: color }}>
            <p>Selected Colour: {color}</p>
        </div>
        <lavel>Select a Colour</lavel>
        <input type='color' value={color} onChange={handleColorChange} />
    </div>)
}

export default ColorPicker;