import { Link } from "react-router-dom";
import React, { useState } from 'react';

const Resources = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const resources = [
        { 
            name: 'LeetCode', 
            category: 'website', 
            color: 'rgb(250, 160, 0)', 
            body: 'Platform for coding interview preparation with algorithm challenges and company-specific questions. Features competitions and discussion forums for peer learning.',
            path: 'leetcode'
        },
        { 
            name: 'SoloLearn', 
            category: 'app', 
            color: 'rgb(0, 200, 150)', 
            body: 'Mobile-first learning platform offering interactive coding courses in multiple languages. Includes a social coding community and code playground.',
            path: 'sololearn'
        },
        { 
            name: 'Mimo', 
            category: 'app', 
            color: 'rgb(100, 80, 255)', 
            body: 'Gamified coding app offering bite-sized lessons in web development, Python, and SQL. Tracks progress with streaks and skill metrics.',
            path: 'mimo'
        },
        { 
            name: 'YouTube', 
            category: 'website', 
            color: 'rgb(255, 0, 0)', 
            body: 'Video platform hosting countless free programming tutorials, courses, and tech talks. Essential for visual learners and staying updated with tech trends.',
            path: 'youtube'
        },
        { 
            name: 'LearnCode.academy', 
            category: 'website', 
            color: 'rgb(0, 150, 200)', 
            body: 'Specialized web development tutorial channel featuring modern JavaScript frameworks, DevOps, and design patterns. Known for clear project-based tutorials.',
            path: 'learncodeacademy'
        }
    ];

    const filteredResources = selectedCategory === 'all' 
        ? resources 
        : resources.filter(resource => resource.category === selectedCategory);

    return (
        <>
            <div>
                <h1>Resources</h1>
                <Link to="/tools" className="L">
                    <button className="divbut2">Back</button>
                </Link>
            </div>

            <div className="category">
                <h2>Category:</h2>
                <button onClick={() => setSelectedCategory('all')}>All</button>
                <button onClick={() => setSelectedCategory('website')}>Website</button>
                <button onClick={() => setSelectedCategory('app')}>App</button>
            </div>

            {filteredResources.map((resource, index) => (
                <Link to={resource.path} key={index} className="linkdiv">
                    <div className="language" style={{ "--boxColor": resource.color }}>
                        <h2>{resource.name}</h2>
                        <h4>{resource.body}</h4>
                    </div>
                </Link>
            ))}
        </>
    );
}

export default Resources;