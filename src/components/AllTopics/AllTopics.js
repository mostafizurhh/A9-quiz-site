import React from 'react';

const AllTopics = ({ topic }) => {
    const { id, name, logo, total } = topic
    console.log(topic)
    return (
        <div>
            <h2>Name: {name}</h2>
            <p>{logo}</p>
            <p>Total Questions: {total}</p>
        </div>
    );
};

export default AllTopics;