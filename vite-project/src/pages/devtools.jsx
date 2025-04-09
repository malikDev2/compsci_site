import { Link } from "react-router-dom";
import React, { useState } from 'react';

const Devtools = () =>{
    const [selectedCategory, setSelectedCategory] = useState('all');

    const tools = [
        {
            name: 'Visual Studio Code',
            category: 'editor',
            color: 'rgb(24, 113, 203)',
            body: 'good code editor',
            path: 'vscode'
        },
        
    ];

    const toolfilter = selectedCategory === 'all' 
    ? tools 
    : tools.filter(tool => tool.category === selectedCategory);

    return(<>
    <h1>Development Tools</h1>
    <div className="category">
        <h2>Category:</h2>
        <button onClick={() => setSelectedCategory('all')}>All</button>
        <button onClick={() => setSelectedCategory('editor')}>Code Editor</button>
        <button onClick={() => setSelectedCategory('ai')}>Aritifical Intelligence</button>
        <button onClick={() => setSelectedCategory('vc')}>Version Control</button>
    </div>

    {toolfilter.map((tool, index) => (
        <Link to={tool.path} key={index} className="linkdiv">
            <div className="language" style={{"--boxColor": tool.color}}>
                <h2>{tool.name}</h2>
                <h4>{tool.body}</h4>
            </div>
        </Link>
    ))}
    <Link to="/tools">
        <button>Back</button>
    </Link>
    </>)
}

export default Devtools;