import { Link } from "react-router-dom";
import React, { useState } from 'react';

const Languages = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const languages = [
        { 
            name: 'Python', 
            category: 'high-level', 
            color: 'rgb(0, 255, 187)', 
            body: 'A dynamically-typed, interpreted language known for its readability. Widely adopted in data science, machine learning, and backend development due to its extensive libraries. One of the most popular languages by usage and community growth.',
            path: 'python'
        },
        { 
            name: 'Java', 
            category: 'high-level', 
            color: 'rgb(251, 173, 5)', 
            body: 'An object-oriented, JVM-based language designed for portability ("write once, run anywhere"). Commonly used in enterprise systems, Android development, and large-scale backend services. Maintains high popularity in legacy and modern systems.',
            path: 'java'
        },
        { 
            name: 'HTML', 
            category: 'scripting-styling', 
            color: 'rgb(251, 124, 5)', 
            body: 'The standard markup language for creating web pages. Used on virtually all websites to define structure and content, working alongside CSS and JavaScript.',
            path: 'html'
        },
        { 
            name: 'CSS', 
            category: 'scripting-styling', 
            color: 'rgb(5, 124, 251)', 
            body: 'A stylesheet language controlling the presentation of HTML documents. Essential for responsive design, animations, and consistent styling across web applications.',
            path: 'css'
        },
        { 
            name: 'JavaScript', 
            category: 'high-level', 
            color: 'rgb(43, 227, 27)', 
            body: 'A dynamically-typed scripting language primarily used for web interactivity. Used commonly for backend and full-stack development through its vast variety of environments and frameworks.',
            path: 'javascript'
        },
        { 
            name: 'C', 
            category: 'high-level', 
            color: 'rgb(47, 34, 189)', 
            body: 'A procedural, systems programming language offering low-level memory access. Foundational for operating systems, embedded programming, and performance-critical applications.',
            path: 'c'
        },
        { 
            name: 'SQL', 
            category: 'db', 
            color: 'rgb(150, 27, 227)', 
            body: 'Domain-specific language used for managing and querying data in relational databases, allowing users to retrieve, insert, update, and delete data with powerful precision.',
            path: 'sql'
        },
        { 
            name: 'Assembly', 
            category: 'low-level', 
            color: 'rgb(227, 34, 27)', 
            body: 'A low-level programming language with direct hardware control. Used in firmware development, reverse engineering, and scenarios requiring fine-tuned performance optimization.',
            path: 'assembly'
        },
        { 
            name: 'JSX/TSX', 
            category: 'special', 
            color: 'rgb(34, 20, 232)', 
            body: 'JSX (JavaScript XML) and TSX (TypeScript XML) are syntactic extensions that allow developers to write HTML-like code within JavaScript or TypeScript, commonly used in React to describe UI components declaratively.',
            path: 'jsx'
        },
    ];

    const filteredLanguages = selectedCategory === 'all' 
        ? languages 
        : languages.filter(lang => lang.category === selectedCategory);

    return (
        <>
            <div>
                <h1>Languages</h1>
                <Link to="/" className="L">
                    <button className="divbut2">Back</button>
                </Link>
            </div>

            <div className="category">
                <h2>Category:</h2>
                <button onClick={() => setSelectedCategory('all')}>All</button>
                <button onClick={() => setSelectedCategory('high-level')}>High-Level Language</button>
                <button onClick={() => setSelectedCategory('low-level')}>Low-Level Language</button>
                <button onClick={() => setSelectedCategory('scripting-styling')}>Scripting/Styling Language</button>
                <button onClick={() => setSelectedCategory('db')}>Database</button>
                <button onClick={() => setSelectedCategory('special')}>Special Language</button>
            </div>

            {filteredLanguages.map((lang, index) => (
                <Link to={lang.path} key={index} className="linkdiv">
                    <div className="language" style={{ "--boxColor": lang.color }}>
                        <h2>{lang.name}</h2>
                        <h4>{lang.body}</h4>
                    </div>
                </Link>
            ))}
        </>
    );
}

export default Languages;