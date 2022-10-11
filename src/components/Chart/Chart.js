import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';



const Chart = ({ requiredData }) => {
    const data = requiredData
    // console.log(requiredData)
    return (
        <div>
            <LineChart width={300} height={350} data={data}>
                <Line type="monotone" dataKey="total" stroke="#0000ff" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
            <p><small>Fig: <small>Total questions in each topic.</small></small></p>
        </div>
    );
};

export default Chart;