import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Frameworks = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const frameworks = [
        {name: 'React', category: 'frontend', color: 'rgb(5, 109, 255)', body: 'A JavaScript library for building user interfaces'},
        // Add more frameworks here
    ];

    const framfilter = selectedCategory === 'all' 
        ? frameworks
        : frameworks.filter(fram => fram.category === selectedCategory);

    return (
        <>
            <h1>Frameworks</h1>
            <div className="category">
                <h2>Category:</h2>
                <button onClick={() => setSelectedCategory('all')}>All</button>
                <button onClick={() => setSelectedCategory('frontend')}>Frontend</button>
                <button onClick={() => setSelectedCategory('backend')}>Backend</button>
                <button onClick={() => setSelectedCategory('data')}>Data</button>
                <button onClick={() => setSelectedCategory('fullstack')}>Full Stack</button>
            </div>

            {framfilter.map((frame, index) => (
                <div key={index} className="language" style={{ "--boxColor": frame.color }}>
                    <h2>{frame.name}</h2>
                    <h4>{frame.body}</h4>
                    <button>learn more</button>
                </div>
            ))}
            <Link to="/tools">
                <button>Back</button>
            </Link>
        </>
    );
}

export default Frameworks;