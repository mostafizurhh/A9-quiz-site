import React from 'react';
import './Option.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Option = ({ option, right }) => {
    // console.log(right)

    const rightAnswer = () => {
        if (option === `${right}`) {
            toast.success('Right answer', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        else {
            toast.error('Wrong answer', {
                position: toast.POSITION.TOP_RIGHT
            })
        }
    }
    return (
        <div >
            <button onClick={rightAnswer}>{option}</button>
            <ToastContainer />
        </div>
    );
};

export default Option;