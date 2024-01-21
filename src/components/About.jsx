import React from "react";

const About = () => {
  return (
    <div className="m-2 p-4">
      <h2>Folder Structure:</h2>
      <p>
        <ul>
          <li>src</li>
          <ul>
            <li>components</li>
            <ul>
              <li>NavB.jsx</li>
              <li>Product.jsx</li>
              <li>About.jsx</li>
              <li>Login.jsx</li>
              <li>ProductCard.jsx</li>
              <li>ProductList.jsx</li>
            </ul>
            <li>main.jsx</li>
            <li>index.css</li>
            <li>App.jsx</li>
          </ul>
          <li>index.html</li>
          <li>package.json</li>
        </ul>
      </p>

      <br></br>
      <h2>Challenges Faced:</h2>
      <p>
        Implementing the login API posed challenges in formatting the payload
        with email, password, and grant_type. Overcoming these challenges
        required thorough research and problem-solving. The experience provided
        valuable insights into API authentication and payload handling,
        enhancing overall understanding and problem-solving skills.
      </p>
      <br></br>
      <h2>Project Execution Steps:</h2>
      <p>Clone the repository using :- git clone [https://github.com/snetagupta/provision-store.git]</p>
      <p>Install dependencies :- npm install</p>
      <p>Run the project :- npm run dev</p>
    </div>
  );
};

export default About;
