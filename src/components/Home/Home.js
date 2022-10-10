import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllTopics from '../AllTopics/AllTopics';
import './Home.css'

const Home = () => {
    const topics = useLoaderData();
    // console.log(topics.data)
    return (
        <div className='home-container'>
            {
                topics.data.map(topic => <AllTopics
                    key={topic.id}
                    topic={topic}></AllTopics>)
            }
        </div>
    );
};

export default Home;