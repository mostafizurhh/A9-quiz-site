import React from 'react';
import './Option.css'

const Option = ({ option }) => {
    // console.log(option)
    return (
        <div >
            <button >{option}</button>
        </div>
    );
};

export default Option;