import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Frameworks = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedLanguage, setSelectedLanguage] = useState('all');

    const frameworks = [
        { 
            name: 'React', 
            category: 'frontend', 
            language: 'JavaScript',
            color: 'rgb(5, 109, 255)', 
            body: 'A declarative JavaScript library for building component-based UIs, developed by Meta. Dominates modern frontend development due to its virtual DOM and ecosystem (e.g., React Hooks, Redux).',
            path: 'react'
        },
        { 
            name: 'Node.js', 
            category: 'backend', 
            language: 'JavaScript',
            color: 'rgb(67, 160, 71)', 
            body: 'A JavaScript runtime built on Chrome’s V8 engine, enabling server-side execution. Widely adopted for scalable network applications and as the foundation for tools like Express.js.' ,
            path: 'node'
        },
        { 
            name: 'Express.js', 
            category: 'backend', 
            language: 'JavaScript',
            color: 'rgba(145, 141, 141, 0.4)', 
            body: 'A minimal, unopinionated Node.js framework for building APIs and web servers. The de facto standard for backend JavaScript due to its middleware architecture and simplicity.',
            path: 'express'
        },
        { 
            name: 'Jupyter Notebook', 
            category: 'data', 
            language: 'Python',
            color: 'rgba(255, 94, 0, 0.89)', 
            body: 'Python environment for data analysis. Utilizes libaries such as pandas, matplotlib, and seaborn.',
            path: 'jupyter'
        },
        { 
            name: 'Tkinter', 
            category: 'GUI', 
            language: 'Python',
            color: 'rgb(74, 137, 255)', 
            body: 'Python’s standard GUI toolkit, providing bindings to the Tk widget library. Primarily used for simple desktop applications due to its simplicity and bundled availability with Python.',
            path: 'tkinter' 
        },
    ];

    const framfilter = frameworks.filter(frame => {
        const categoryMatch = selectedCategory === 'all' || frame.category === selectedCategory;
        const languageMatch = selectedLanguage === 'all' || frame.language === selectedLanguage;
        return categoryMatch && languageMatch;
    });

    return (
        <>
            <h1>Frameworks</h1>
            <Link to="/tools" className="L">
                <button className="divbut2">Back</button>
            </Link>
            <div className="category">
                <h2>Category:</h2>
                <button onClick={() => setSelectedCategory('all')}>All</button>
                <button onClick={() => setSelectedCategory('frontend')}>Frontend</button>
                <button onClick={() => setSelectedCategory('backend')}>Backend</button>
                <button onClick={() => setSelectedCategory('data')}>Data</button>
                <button onClick={() => setSelectedCategory('fullstack')}>Full Stack</button>
                <button onClick={() => setSelectedCategory('GUI')}>GUI</button>
            </div>

            <div className="category">
                <h2>Language:</h2>
                <button onClick={() => setSelectedLanguage('all')}>All</button>
                <button onClick={() => setSelectedLanguage('JavaScript')}>JavaScript</button>
                <button onClick={() => setSelectedLanguage('Python')}>Python</button>
                <button onClick={() => setSelectedLanguage('Java')}>Java</button>
            </div>

            {framfilter.map((frame, index) => (
                <Link to={frame.path} key={index} className="linkdiv">
                <div className="language" style={{ "--boxColor": frame.color }}>
                    <h2>{frame.name}</h2>
                    <h4>{frame.body}</h4>
                </div>
                </Link>
            ))}
            <Link to="/tools">
                <button>Back</button>
            </Link>
        </>
    );
}

export default Frameworks;
