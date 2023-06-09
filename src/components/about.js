import React from "react";
import photo from "../images/photo.JPG";

function About() {
    return(
        <div className="aboutDiv">
            <img alt="me" src={photo} className="me"/>
            <p className="bioText">
                Hi! I'm Kirstyn, an aspiring web developer based in Phoenix, Arizona. 🌵☀️
                <br /><br />
                Since 2016, I have worked in Democratic politics, running digital fundraising, advertising, and communications programs for state and federal candidates, PACs, and non-profits. 
                <br /><br />
                I'm new to the world of programming and eager to jump right in and continue expanding my skillset!
                <br /><br />
                When I'm not coding or raising money for Democrats, you can most likely find me knitting and crocheting, hiking, painting, or wrangling my 3 adorable pets.
                <br /><br />
                Please navigate to the Portfolio and Resume tabs above to check out some of my work!
                <br /><br />
                Additional contact links to my GitHub and LinkedIn profiles can be found in the footer. Thanks for saying hi!
            </p>
        </div>
    );
};

export default About;