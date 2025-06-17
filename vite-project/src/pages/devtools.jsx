import { Link } from "react-router-dom";
import React, { useState } from 'react';

const Devtools = () =>{
    const [selectedCategory, setSelectedCategory] = useState('all');

    const tools = [
        {
            name: 'Visual Studio Code',
            category: 'editor',
            color: 'rgb(24, 113, 203)',
            body: 'A lightweight but powerful code editor from Microsoft.',
            path: 'vscode'
        },
        {
            name: 'Git',
            category: 'vc',
            color: 'rgb(241, 106, 101)',
            body: 'Distributed version control system for tracking code changes.',
            path: 'git'
        },
        {
            name: 'GitHub',
            category: 'vc',
            color: 'rgb(36, 41, 46)',
            body: 'Cloud platform for Git repositories and developer collaboration.',
            path: 'github'
        },
        {
            name: 'ChatGPT',
            category: 'ai',
            color: 'rgb(16, 163, 127)',
            body: 'AI chatbot that understands and generates human-like text.',
            path: 'chatgpt'
        },
        {
            name: 'DeepSeek',
            category: 'ai',
            color: 'rgb(0, 102, 204)',
            body: 'Advanced AI assistant for coding and general knowledge.',
            path: 'deepseek'
        },
        {
            name: 'Replit',
            category: 'editor',
            color: 'rgb(242, 101, 52)',
            body: 'Online IDE that lets you code directly in your browser.',
            path: 'replit'
        },
        {
            name: 'WordPress',
            category: 'editor',
            color: 'rgb(33, 117, 155)',
            body: 'Popular platform for building websites and blogs.',
            path: 'wordpress'
        }
    ];

    const toolfilter = selectedCategory === 'all' 
    ? tools 
    : tools.filter(tool => tool.category === selectedCategory);

    return(<>
    <h1>Development Tools</h1>
    <Link to="/tools" className="L">
        <button className="divbut2">Back</button>
    </Link>
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