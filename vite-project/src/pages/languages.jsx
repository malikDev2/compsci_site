const Languages = () => {
    return(<>
    <h1>Languages</h1>
    <div className="language" style={{ "--boxColor": "rgb(0, 255, 225)" }}>
        <h2>Python</h2>
        <h4>description</h4>
        <button>learn more</button>
    </div>
    <div className="language" style={{ "--boxColor": "rgb(26, 226, 59)" }}>
        <h2>Java</h2>
        <h4>description</h4>
        <button>learn more</button>
    </div>
    </>);
}

export default Languages;