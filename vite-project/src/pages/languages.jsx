import React, { useState } from 'react';

const Languages = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const languages = [
        { name: 'Python', category: 'high-level', color: 'rgb(0, 255, 187)', body: 'Very popular high level language with close-to-english syntax. Used heavily within Data Science/Analysis, Machine Learning, and Backend Development. Vast collection of frameworks and libraries to choose from.' },
        { name: 'Java', category: 'high-level', color: 'rgb(251, 173, 5)' },
        { name: 'HTML', category: 'scripting-styling', color: 'rgb(251, 124, 5)' },
        { name: 'CSS', category: 'scripting-styling', color: 'rgb(5, 124, 251)' },
        { name: 'Javascript', category: 'high-level', color: 'rgb(43, 227, 27)' },
        { name: 'C', category: 'high-level', color: 'rgb(47, 34, 189)' },
        { name: 'C#', category: 'high-level', color: 'rgb(150, 27, 227)' },
        { name: 'Assembly', category: 'low-level', color: 'rgb(227, 34, 27)' },
        { name: 'JSX', category: 'special', color: 'rgb(34, 20, 232)' },
    ];

    const filteredLanguages = selectedCategory === 'all' 
        ? languages 
        : languages.filter(lang => lang.category === selectedCategory);

    return (
        <>
            <div>
                <h1>Languages</h1>
                <button>switch mode</button>
            </div>

            <div className="category">
                <h2>Category:</h2>
                <button onClick={() => setSelectedCategory('all')}>All</button>
                <button onClick={() => setSelectedCategory('high-level')}>High-Level Language</button>
                <button onClick={() => setSelectedCategory('low-level')}>Low-Level Language</button>
                <button onClick={() => setSelectedCategory('scripting-styling')}>Scripting/Styling Language</button>
                <button onClick={() => setSelectedCategory('special')}>Special Language</button>
            </div>

            {filteredLanguages.map((lang, index) => (
                <div key={index} className="language" style={{ "--boxColor": lang.color }}>
                    <h2>{lang.name}</h2>
                    <h4>{lang.body}</h4>
                    <button>learn more</button>
                </div>
            ))}
        </>
    );
}

export default Languages;