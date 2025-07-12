import YT from '../yt';
import { Link } from "react-router-dom";
import jup from "../../assets/jup.png";

const Jupyter = () => {
    return (
        <>
            <div className="tooldiv">
                <h2>Description</h2>
                <p>Jupyter Notebook is a Python environment for working with data. Jupyter allows the use of libraries such as Pandas, Matplotlib, and Seaborn to sort, modify, and visualize sets of data.</p>
                
                <a href="https://jupyter.org/" target="_blank" style={{ color: 'black', textDecoration: 'none' }}>
                    <h2>Visit site ↓</h2>
                    <img src={jup} alt="Jupyter Logo" style={{ width: '150px' }} />
                </a>

                <h2>Code Snippet</h2>
                <pre style={{ backgroundColor: '#f4f4f401', padding: '1em', borderRadius: '8px', overflowX: 'auto' }}>
<code>{`# Basic Jupyter Notebook chart using Pandas and Matplotlib
import pandas as pd
import matplotlib.pyplot as plt

# Create a sample DataFrame
data = {
    'Year': [2020, 2021, 2022, 2023],
    'Users': [150, 200, 340, 500]
}

df = pd.DataFrame(data)

# Plotting the data
plt.figure(figsize=(8,5))
plt.plot(df['Year'], df['Users'], marker='o')
plt.title('User Growth Over Time')
plt.xlabel('Year')
plt.ylabel('Number of Users')
plt.grid(True)
plt.show()`}</code>
                </pre>

                <h2>Videos</h2>
                <div className="video-row">
                    <div className="video-wrapper">
                        <YT videoId="tse_8LLWtfY" />
                    </div>
                </div>
                <Link to="/tools/frameworks" className="L">
                    <button className="divbut3">Back</button>
                </Link>
            </div>
        </>
    )
}

export default Jupyter;
