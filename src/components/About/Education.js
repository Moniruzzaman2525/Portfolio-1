


import React from 'react';
import './Education.css';

const Education = () => {
    return <table className="table">
        <thead>
            <tr>
                <th>Degree</th>
                <th>Department</th>
                <th>Institute</th>
                <th>Year</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>BBA</td>
                <td>Political Science</td>
                <td>National University</td>
                <td>2019 - Present</td>
            </tr>
            <tr>
                <td>HSC</td>
                <td>Science</td>
                <td>Sribordi Govt. College, Sherpur</td>
                <td>2016 - 2018</td>
            </tr>
            <tr>
                <td>SSC</td>
                <td>Science</td>
                <td>Fawzia Matin Public School</td>
                <td>2013 - 2015</td>
            </tr>
        </tbody>
    </table>
};

export default Education;