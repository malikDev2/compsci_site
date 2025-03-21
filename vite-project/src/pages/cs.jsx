import { Link } from "react-router-dom";
import React, { useState } from 'react';

const Cs = () => {
    const [selectedType, setSelectedType] = useState('all');
    const courses = [
        {name: 'AP Computer Science A (Intro to Computer Science)', type: 'programming', color: 'rgb(77, 208, 255)', body: 'Yeah'},
        {name: 'AP Computer Science Principales', type: 'programming', color: 'rgb(55, 251, 37)', body: ''},
        {name: 'Data Structures', type: 'programming', color: 'rgb(248, 62, 29)', body: 'Data structures...'},
        {name: 'Computer Architecture', type: 'programming', color: 'rgb(23, 93, 204)', body: 'C and Assembly and Memory'},
        {name: 'Intro to Discrete Structures I', type: 'theory', color: 'rgb(255, 213, 77)', body: ''}
    ];

    const courseType = selectedType === 'all'
    ? courses
    : courses.filter(course => course.type === selectedType);
    
    return(<>
    <h1>Cs</h1>
    <div>
        <h3>Category:</h3>
        <button onClick={() => setSelectedType('all')}>All</button>
        <button onClick={() => setSelectedType('programming')}>Programming</button>
        <button onClick={() => setSelectedType('theory')}>Theory</button>
    </div>

    {courseType.map((course, index) => (
        <div key={index} className="course" style={{ backgroundColor: course.color}}>
            <h2>{course.name}</h2>
            <h4>{course.body}</h4>
            <button>learn more</button>

        </div>
    ))}
   
    <Link to="/courses">
        <button>Back</button>
    </Link>
    </>);
}

export default Cs;