import React from 'react';


function Dropdown () {
    return (
        <select name="authors" id="authors">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
        </select>
    );
}

export default Dropdown;