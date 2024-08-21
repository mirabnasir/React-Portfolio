import React from "react";
import './About.css';


import { FaHtml5, FaCss3Alt, FaJsSquare, FaMobileAlt, FaServer, FaRocket, FaGithub, FaTasks, FaCloud, FaCodeBranch } from 'react-icons/fa';
import { SiReact, SiRedux } from 'react-icons/si';
function About(){

return(
 <div className="about">
    <h1>
        Designing With Passion While Exploring The World
    </h1>
    <div className="list">
        <ol>
                <li>Development of through srs document for a semester project guaranteeing precise and defined software requirements thereby enhancing the efficiency of the development process</li>
                <li>Developed a java based library management system incorporating advanced oop principles for streamlined operations</li>
                <li>Completed C++ projects and implemented various data structures and algorithms for practical applications.Developed web projects using HTML</li>
                <li>I've crafted  layouts and stylish designs, showcasing my proficiency in structuring content and applying CSS properties effectively. These projects have enhanced my skills in web development</li>
        </ol>
        <div className="about-buttons">
        <a href="https://mirabnasir.github.io/cv/" target="-blank" rel="noopener noreferrer">
        <button >View My CV</button></a>
        </div>
    </div>
    <div className="service-container">
            <div className="service">
        <img></img>
        <h2>Web Development & Front-End Development</h2>
        <p>Crafting visually stunning and responsive web pages that engage users across all devices. </p>
        <ul>
  <li><FaHtml5 color="#E34F26" /> HTML5</li>
  <li><FaCss3Alt color="#1572B6" /> CSS3</li>
  <li><FaJsSquare color="#F7DF1E" /> JavaScript</li>
  <li><FaMobileAlt color="#28A745" /> Responsive Design</li>
</ul>
 
            </div>
            <div className="service">
        <img></img>
        <h2>JavaScript Frameworks & Libraries</h2>
        <p> Building dynamic and scalable applications using modern JavaScript frameworks and libraries.</p>
        <ul>
  <li><SiReact color="#61DAFB" /> React</li>
  <li><SiRedux color="#764ABC" /> Redux</li>
  <li><FaServer color="#6C757D" /> APIs Integration</li>
  <li><FaRocket color="#FF4500" /> Performance Optimization</li>
</ul>
            </div>
            <div className="service">
        <img></img>
        <h2>Version Control & Deployment</h2>
        <p> Ensuring smooth development processes and reliable deployments with industry-standard tools.</p>
        <ul>
  <li><FaGithub color="#181717" /> Git & GitHub</li>
  <li><FaTasks color="#17A2B8" /> Continuous Integration</li>
  <li><FaCloud color="#0D6EFD" /> Web Hosting</li>
  <li><FaCodeBranch color="#6F42C1" /> Code Reviews</li>
</ul>
            </div>
        </div>
</div>);

}
export default About