const Languages = () => {
    return(<>
    <div>
    <h1>Languages</h1>
    <button>switch mode</button>
    </div>
    
    <div className="language" style={{ "--boxColor": "rgb(0, 255, 187)" }}>
        <h2>Python</h2>
        <h4>description</h4>
        <button>learn more</button>
    </div>
    <div className="language" style={{ "--boxColor": "rgb(251, 197, 5)" }}>
        <h2>Java</h2>
        <h4>description</h4>
        <button>learn more</button>
    </div>
    <div className="language" style={{ "--boxColor": "rgb(43, 227, 27)" }}>
        <h2>Javascript</h2>
        <h4>description</h4>
        <button>learn more</button>
    </div>
    </>);
}

export default Languages;