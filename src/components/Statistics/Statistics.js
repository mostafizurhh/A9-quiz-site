import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chart from '../Chart/Chart'
import './Statistics.css'


const Statistics = () => {
    const totalData = useLoaderData()
    // console.log(totalData.data)
    return (
        <div className='statistic'>
            <h2>Statistics</h2>
            <Chart
                key={totalData.data.id}
                requiredData={totalData.data}
            ></Chart>
        </div>
    );
};

export default Statistics;