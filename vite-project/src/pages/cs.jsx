import { Link } from "react-router-dom";
import React, { useState } from 'react';

const Cs = () => {
    const [selectedType, setSelectedType] = useState('all');
    const courses = [
        {
            name: 'AP Computer Science A (Intro to Computer Science)', 
            type: 'programming', 
            color: 'rgb(77, 208, 255)', 
            body: 'Introductory comp-sci course taught in Java. Introduces students to basic data types, arrays, loops, user input, and sorts.',
            path: 'ap-computer-science-a'
        },
        {
            name: 'AP Computer Science Principales', 
            type: 'programming', 
            color: 'rgb(55, 251, 37)', 
            body: 'Highschool course that teaches basic programming through psuedo-code and python. Also covers topics such as internet safety and cybersecurity to give students a better understanding of computing.',
            path: 'ap-computer-science-principles'
        },
        {
            name: 'Data Structures', 
            type: 'programming', 
            color: 'rgb(248, 62, 29)', 
            body: 'Introduces data structures such as linked lists, trees, and hash tables. Also expands on time complexity, sorting, and other topics.',
            path: 'data-structures'
        },
        {
            name: 'Computer Architecture', 
            type: 'programming', 
            color: 'rgb(23, 93, 204)', 
            body: 'Introduces students to C and Assembly to understand computing at a lower level. Includes topics such as hardware, memory, compilation, and more.',
            path: 'computer-architecture'
        },
        {
            name: 'Intro to Discrete Structures I', 
            type: 'theory', 
            color: 'rgb(255, 213, 77)', 
            body: 'Non-programming, logic based couse. Topics include logic operations, set notation, proofs, and state machines.',
            path: 'discrete-structures'
        }
    ];

    const courseType = selectedType === 'all'
    ? courses
    : courses.filter(course => course.type === selectedType);
    
    return(<>
    <h1>Computer Science</h1>
    <div className="category">
        <h3>Category:</h3>
        <button onClick={() => setSelectedType('all')}>All</button>
        <button onClick={() => setSelectedType('programming')}>Programming</button>
        <button onClick={() => setSelectedType('theory')}>Theory</button>
    </div>

    {courseType.map((course, index) => (
        <Link to={course.path} key={index} className="linkdiv">
            <div className="language" style={{ backgroundColor: course.color}}>
                <h2>{course.name}</h2>
                <h4>{course.body}</h4>
            </div>
        </Link>
    ))}
   
    <Link to="/courses">
        <button>Back</button>
    </Link>
    </>);
}

export default Cs;