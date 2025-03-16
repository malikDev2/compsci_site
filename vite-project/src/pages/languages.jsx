const Languages = () => {
    return(<>
    <div>
    <h1>Languages</h1>
    <button>switch mode</button>
    </div>

    <div className="category">
        <h2>Category:</h2>
        <button>High-Level Language</button>
        <button>Low-Level Language</button>
        <button>Scripting/Styling Language</button>
        <button>Special Language</button>

    </div>
    
    <div className="language" style={{ "--boxColor": "rgb(0, 255, 187)" }}>
        <h2>Python</h2>
        <h4>description</h4>
        <button>learn more</button>
    </div>
    <div className="language" style={{ "--boxColor": "rgb(251, 173, 5)" }}>
        <h2>Java</h2>
        <h4>description</h4>
        <button>learn more</button>
    </div>
    <div className="language" style={{ "--boxColor": "rgb(251, 124, 5)" }}>
        <h2>HTML</h2>
        <h4>description</h4>
        <button>learn more</button>
    </div>
    <div className="language" style={{ "--boxColor": "rgb(5, 124, 251)" }}>
        <h2>CSS</h2>
        <h4>description</h4>
        <button>learn more</button>
    </div>
    <div className="language" style={{ "--boxColor": "rgb(43, 227, 27)" }}>
        <h2>Javascript</h2>
        <h4>description</h4>
        <button>learn more</button>
    </div>
    <div className="language" style={{ "--boxColor": "rgb(47, 34, 189)" }}>
        <h2>C</h2>
        <h4>description</h4>
        <button>learn more</button>
    </div>
    <div className="language" style={{ "--boxColor": "rgb(150, 27, 227)" }}>
        <h2>C#</h2>
        <h4>description</h4>
        <button>learn more</button>
    </div>
    <div className="language" style={{ "--boxColor": "rgb(227, 34, 27)" }}>
        <h2>Assembly</h2>
        <h4>description</h4>
        <button>learn more</button>
    </div>
    <div className="language" style={{ "--boxColor": "rgb(34, 20, 232)" }}>
        <h2>JSX</h2>
        <h4>description</h4>
        <button>learn more</button>
    </div>
    </>);
}

export default Languages;