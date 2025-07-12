import YT from '../yt';
import { Link } from "react-router-dom";
import tkin from "../../assets/tkin.png";

const Tkinter = () => {
    return (
        <>
            <div className="tooldiv">
                <h2>Description</h2>
                <p>Tkinter is a Python GUI used to create basic applications. Tkinter's blocky architecture makes it a great tool for programming beginners.</p>
                
                <a href="https://docs.python.org/3/library/tkinter.html" target="_blank" style={{ color: 'black', textDecoration: 'none' }}>
                    <h2>Visit site ↓</h2>
                    <img src={tkin} alt="Tkinter Logo" style={{ width: '150px' }} />
                </a>

                <h2>Code Snippet</h2>
                <pre style={{ backgroundColor: '#f4f4f401', padding: '1em', borderRadius: '8px', overflowX: 'auto' }}>
<code>{`# Simple Tkinter GUI with a button and label
import tkinter as tk

def say_hello():
    label.config(text="Hello, Tkinter!")

# Create the main window
root = tk.Tk()
root.title("My First GUI")
root.geometry("300x150")

# Create a label and button
label = tk.Label(root, text="Click the button below!")
label.pack(pady=10)

button = tk.Button(root, text="Click Me", command=say_hello)
button.pack()

# Run the application
root.mainloop()`}</code>
                </pre>

                <h2>Videos</h2>
                <div className="video-row">
                    <div className="video-wrapper">
                        <YT videoId="ibf5cx221hk" />
                    </div>
                </div>

                <Link to="/tools/frameworks" className="L">
                    <button className="divbut3">Back</button>
                </Link>
            </div>
        </>
    )
}

export default Tkinter;
