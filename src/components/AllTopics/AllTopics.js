import React from 'react';
import { Link } from 'react-router-dom';
import './Alltopics.css'

const AllTopics = ({ topic }) => {
    const { id, name, logo, total } = topic
    // console.log(topic)


    return (
        <div className='topics-container'>
            <img src={logo} alt="" />
            <div className='topic-info'>
                <h5>{name}</h5>
                <p><small>Total Questions: {total}</small></p>
                <button><Link to={`/topic/${id}`}>Strat Quiz</Link></button>
            </div>
        </div>
    );
};

export default AllTopics;