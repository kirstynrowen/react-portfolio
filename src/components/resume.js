import React from "react";

function Resume() {
  const url = "https://docs.google.com/document/d/1F7DdyvML-FGgPSu2GDfS_1FkGOQC_PWYqmdK4aXwme0/edit?usp=sharing";

  const codingTopics = [
    'HTML',
    'CSS',
    'JavaScript',
    'Web APIs',
    'Third-Party APIs',
    'Server-Side APIs',
    'Node.js',
    'Express.js',
    'Object-Oriented Programming',
    'SQL',
    'Object Relational Mapping (ORM)',
    'MVC (Model-View-Controller)',
    'MongoDB',
    'Progressive Web Apps (PWAs)',
    'React',
  ];

  return (
    <div className="resume-container">
      <h3 className="resume-subtitle">Skills Learned in University of Denver Coding Bootcamp:</h3>
      <ul className="resume-topics-list">
        {codingTopics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>
      <h3 className="resume-subtitle">View my full resume below:</h3>
      <iframe src={url} title="Resume" width="100%" height="600"></iframe>
    </div>
  );
}

export default Resume;