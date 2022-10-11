import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Option from '../Option/Option';
import './Questions.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Questions = ({ questions }) => {
    const { question, options, correctAnswer } = questions
    // console.log(questions.options)

    const rightAnswer = () => {
        toast.success(`${correctAnswer}`, {
            position: toast.POSITION.TOP_RIGHT
        })
    }
    return (
        <div className='question-container'>
            <div className='question'>
                <h6>{question}</h6>
                <button onClick={rightAnswer}><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></button>
                <ToastContainer />
            </div>
            {/* <div>
                <button><p><small>{options}</small></p></button>
            </div> */}
            {/* {
                questions.options.map(option => <Option
                    option={option}
                ></Option>)
            } */}
        </div>
    );
};

export default Questions;