import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TopicQuestion = () => {
    const questions = useLoaderData();
    console.log(questions)
    return (
        <div>
            <h2>hi</h2>
        </div>
    );
};

export default TopicQuestion;