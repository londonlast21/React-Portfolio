import React from 'react';

function Resume() {
    return (
        <section className="resume-outer">
            <h1>Resume</h1>

            <div>
                <h3>Downloadable Resume</h3>
                <a className="resume-link" href="https://docs.google.com/document/d/1uI6OIXNJbt_9TI_4Cf_6WqHJWN-TOa1ro_sn0t4DtX4/edit?usp=sharing">
                    LINK
                </a> 
                 
            

            
                
                <h3>Proficiencies</h3>
                <ul className="resume-list">
                   
                    <li className="skill">
                        HTML
                    </li>
                    <li>
                        CSS
                    </li>
                    <li>
                        JavaScript
                    </li>
                    <li>
                        jQuery
                    </li>
                    <li>
                        AJAX
                    </li>
                    <li>
                        Node.JS
                    </li>
                    <li>
                        Express.JS
                    </li>
                    <li>
                        MySQL
                    </li>
                    <li>
                        Sequelize
                    </li>
                    <li>
                        MongoDB
                    </li>
                    <li>
                        React
                    </li>
                </ul>
                <h3>Experience With:</h3>
                <ul className="resume-list">
                    
                    <li>
                        MVC
                    </li>
                    <li>
                        OOP
                    </li>
                    <li>
                        Responsive Design
                    </li>
                    <li>
                        PWA's
                    </li>
                    <li>
                        MERN Stack
                    </li>

                </ul>
            </div>
        </section>
    )
}


export default Resume;