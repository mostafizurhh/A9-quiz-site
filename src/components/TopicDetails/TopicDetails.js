import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const TopicDetails = () => {
    const topicQuestions = useLoaderData();
    console.log(topicQuestions.data.questions)
    return (
        <div>
            <h4>Try your {topicQuestions.data.name} knowledge.</h4>
            {
                topicQuestions.data.questions.map(questions => <Questions
                    key={questions.id}
                    questions={questions}
                ></Questions>)
            }
        </div>
    );
};

export default TopicDetails;