


import React from 'react';
import './Skill.css';

const frontendSkills = [
    
    {
        title: 'JavaScript',
        width: '95%',
        percentage: '95%'
    },
    {
        title: 'React.Js',
        width: '95%',
        percentage: '95%'
    },{
        title: 'Next.js',
        width: '90%',
        percentage: '90%'
    },
    {
        title: 'Redux',
        width: '85%',
        percentage: '85%'
    },
]
const backendSkills = [
    {
        title: 'Node.js',
        width: '90%',
        percentage: '90%'
    },
    {
        title: 'Express.js',
        width: '85%',
        percentage: '85%'
    },
    {
        title: 'Mongoose',
        width: '90%',
        percentage: '90%'
    },
    {
        title: 'Mongodb',
        width: '90%',
        percentage: '90%'
    },
]

const Skill = () => {
    return <div className="skills_wrapper d-flex gap-5">
        <div className="front_skill w-50">
            {
                frontendSkills.map((item, index) => (
                    <SkillItem title={item.title} key={index} percentage={item.percentage}></SkillItem>
                ))
            }
        </div>
        <div className="backend_skill w-50">
            {
                backendSkills.map((item, index) => (
                    <SkillItem title={item.title} key={index} percentage={item.percentage}></SkillItem>
                ))
            }
        </div>
    </div>
};

const SkillItem = ({ title, percentage }) => {
    return <div className="skill_data mb-3">
        <div className="skill_title d-flex align-items-center justify-content-between">
            <h6>{title}</h6>
            <span>{percentage}</span>
        </div>
        <div className="skill_bar">
            <span className="skill_bar-percentage" style={{ width: `${percentage}` }}>

            </span>
        </div>
    </div>
}

export default Skill;