import React from "react";

function Portfolio() {
    return (
        <section id="portfolio">
          <h2>Portfolio</h2>
          <div className="project-container">
            <Project title= 'NoSQL Social Network' image= '../images/nosql.png' deployed= 'https://github.com/kirstynrowen/nosql-social-network'/>
            <Project title= 'Dew Drop Adventure Interactive Game' image= '../images/dewdrop.png' deployed= 'https://github.com/Kshakely5280/MVC_project'/>
          </div>
        </section>
      );
    }
    function Project(props) {
       return (
    <div className="project">
      <div className="project-overlay">
        <h3>{props.title}</h3>
      </div>
      <img src={props.image} alt={props.title} />
      <div className="project-links">
        <a href={props.deployed} className="deployed">Deployed App</a>
      </div>
    </div>
  );
}
export default Portfolio;