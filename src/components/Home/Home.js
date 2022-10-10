import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllTopics from '../AllTopics/AllTopics';
import './Home.css'

const Home = () => {
    const subjects = useLoaderData()
    return (
        <div>
            {
                subjects.map(topic => <AllTopics
                    key={topic.id}
                    topic={topic}
                ></AllTopics>)
            }
        </div>
    );
};

export default Home;