import YT from '../yt';
import { Link } from "react-router-dom";
import sql from "../../assets/sql.png";

const SQL = () => {
  return(<>

  <h1>Language</h1>
  <div className="languagediv">
    <h2>Description</h2>
    <p>
      SQL (Structured Query Language) is a domain-specific language used for managing and manipulating relational databases.
      It provides a standardized way to perform operations such as inserting, querying, updating, and deleting data from tables.
      SQL is widely used in backend development, data analysis, business intelligence, and anywhere structured data is managed.
      Major dialects include MySQL, PostgreSQL, SQLite, SQL Server, and Oracle SQL.
    </p>

    <h3>Language page/install</h3>
    <h2>(Run with Dabase Management System such as MySQL or PostegreSQL)</h2>
    <img src={sql} alt="SQL Logo" style={{width: '200px'}}/>
           

    <h2>Syntax</h2>
    <ul>
      <li><strong>Creating Tables:</strong>
        <pre>{`CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  age INT
);`}</pre>
      </li>
      <li><strong>Inserting Data:</strong>
        <pre>{`INSERT INTO users (id, name, age) VALUES (1, 'Alice', 30);`}</pre>
      </li>
      <li><strong>Selecting Data:</strong>
        <pre>{`SELECT * FROM users;
SELECT name FROM users WHERE age > 25;`}</pre>
      </li>
      <li><strong>Updating Data:</strong>
        <pre>{`UPDATE users SET age = 31 WHERE id = 1;`}</pre>
      </li>
      <li><strong>Deleting Data:</strong>
        <pre>{`DELETE FROM users WHERE age < 20;`}</pre>
      </li>
      <li><strong>Filtering:</strong>
        <pre>{`SELECT * FROM users WHERE name LIKE 'A%';`}</pre>
      </li>
      <li><strong>Sorting:</strong>
        <pre>{`SELECT * FROM users ORDER BY age DESC;`}</pre>
      </li>
      <li><strong>Joining Tables:</strong>
        <pre>{`SELECT users.name, orders.amount
FROM users
JOIN orders ON users.id = orders.user_id;`}</pre>
      </li>
      <li><strong>Aggregations:</strong>
        <pre>{`SELECT AVG(age), COUNT(*) FROM users;`}</pre>
      </li>
      <li><strong>Grouping:</strong>
        <pre>{`SELECT age, COUNT(*) FROM users GROUP BY age;`}</pre>
      </li>
      <li><strong>Subqueries:</strong>
        <pre>{`SELECT name FROM users WHERE age = (SELECT MAX(age) FROM users);`}</pre>
      </li>
    </ul>

    <h2>Frameworks/tools</h2>
    <ul>
      <li><strong>Databases:</strong> MySQL, PostgreSQL, SQLite, SQL Server, Oracle</li>
      <li><strong>Clients/IDEs:</strong> DBeaver, pgAdmin, DataGrip, MySQL Workbench</li>
      <li><strong>ORMs:</strong> Sequelize (JS), Prisma (TS), SQLAlchemy (Python), Hibernate (Java)</li>
      <li><strong>CLI Tools:</strong> psql, mysql CLI, sqlite3</li>
    </ul>

    <h2>Videos</h2>
    <div className="video-row">
      <div className="video-wrapper">
        <YT videoId="zsjvFFKOm3c"/>
      </div>
      <div className="video-wrapper">
        <YT videoId="HXV3zeQKqGY"/>
      </div>
      
    </div>
    <Link to="/languages" className="L">
      <button className="divbut3">Back</button>
    </Link>
  </div>

  </>);
};

export default SQL;
