import React from 'react';

const Option = ({ option }) => {
    const { options } = option
    console.log(option)
    return (
        <div>
            <p>{options}</p>

        </div>
    );
};

export default Option;