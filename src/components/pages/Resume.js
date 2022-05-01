import React from 'react';
import resumePdf from '../assets/Jackson Norris Resume 3-15-22.pdf';

export default function Resume() {
  return (
    <div>
      <h1>My Resume</h1>
      <p>
        <a href={resumePdf} >Download my resume</a>
      </p>
      <h3>Skills</h3>
      <ul>
        <li>JavaScript</li>
        <li>Java</li>
        <li>SQL and NoSQL</li>
        <li>Python</li>
        <li>C</li>
        <li>MongoDb and Mongoose</li>
        <li>Node</li>
        <li>React</li>
      </ul>
    </div>
  );
}
