import React from "react";
import nosql from "../images/nosql.png";
import dewdrop from '../images/dewdrop.png';

function Portfolio() {
    return (
        <section className="portfolio-container">
          <h2>Portfolio</h2>
          <div className="project-container">
            <Project title= 'NoSQL Social Network' image= {nosql} deployed= 'https://github.com/kirstynrowen/nosql-social-network'/>
            <Project title= 'Dew Drop Adventure Interactive Game' image= {dewdrop} deployed= 'https://github.com/Kshakely5280/MVC_project'/>
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
      <img src={props.image} alt={props.title} className="project-img" />
      <div className="project-links">
        <a href={props.deployed} className="deployed">Deployed App</a>
      </div>
    </div>
  );
}
export default Portfolio;