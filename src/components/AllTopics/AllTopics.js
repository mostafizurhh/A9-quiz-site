import React from 'react';
import './Alltopics.css'

const AllTopics = ({ topic }) => {
    const { name, logo, total } = topic
    // console.log(topic)

    const btnclick = () => { console.log('clicked') }
    return (
        <div className='topics-container'>
            <img src={logo} alt="" />
            <div className='topic-info'>
                <h5>{name}</h5>
                <p><small>Total Questions: {total}</small></p>
                <button onClick={btnclick}>Strat Quiz</button>
            </div>
        </div>
    );
};

export default AllTopics;