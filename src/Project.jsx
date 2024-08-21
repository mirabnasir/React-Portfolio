import React from "react";
import './Project.css';
import picture1 from './assets/Picture1.png';
import picture2 from './assets/Picture2.png';
import picture3 from './assets/Picture3.png';
import game1 from './assets/tictac.png';
import game2 from './assets/rockpaper.png';
import game3 from './assets/flexbox.png';

function Project(){
    return(

<div className="project">
            <h1>Here are my Projects</h1>
            <p>I specialize in creating responsive and user-friendly websites using Bootstrap. My design approach emphasizes efficiency and aesthetics, ensuring each site is not only visually engaging but also highly functional across all devices. By leveraging Bootstrap's powerful framework, I deliver projects quickly without compromising on quality. My work reflects a strong understanding of modern web design principles, with a focus on clean, maintainable code and seamless user experiences.</p>
            <div className="projects-container">
              <div className="project1">
                <img  src={picture1}></img>
             </div>
            
             <div className="project1">
                <img  src={picture2}></img>
             </div>
             <div className="project1">
                <img  src={picture3}></img>
             </div>
            </div>
            <h1> I have made some projects and games using HTML, CSS and JavaScript.</h1>
    <div class="service-containers">
       <div class="service-box">
         <div class="service-img">
            <img src={game1}></img>
         </div>
         <div class="service-title">
          <h2> Tic-Tac-Toe</h2>
         </div>
         <div class="service-desc">
           <p>A classic two-player game where players take turns marking "X" or "O" in a 3x3 grid. The goal is to be the first to align three marks in a row, column, or diagonal. Built using HTML, CSS, and JavaScript for a fun, interactive experience. </p>
         </div>
         <div class="call-to-action">
            <a href="https://mirabnasir.github.io/tic-tac-toe-game/" target="-blank" rel="noopener noreferrer"> Play Game</a>
          </div>
       </div>
       <div class="service-box">
         <div class="service-img">
            <img src={game2}></img>
         </div>
         <div class="service-title">
          <h2> Rock-Paper-Scissors</h2>
         </div>
         <div class="service-desc">
           <p>A simple, yet exciting hand game where rock beats scissors, scissors cuts paper, and paper covers rock. Play against the computer and see if you can win! Developed with HTML, CSS, and JavaScript to bring this classic game to life. </p>
         </div>
         <div class="call-to-action">
            <a href="https://mirabnasir.github.io/rock-paper-scissors-game/" target="-blank" rel="noopener noreferrer"> Play Game</a>
          </div>
       </div>
       <div class="service-box">
         <div class="service-img">
            <img src={game3}></img>
         </div>
         <div class="service-title">
          <h2> Flex-Box Layout</h2>
         </div>
         <div class="service-desc">
           <p>Explore the power of CSS Flexbox in creating responsive and flexible web layouts. This demo showcases various layout designs that adjust seamlessly across different screen sizes and devices. </p>
         </div>
         <div class="call-to-action">
            <a href="https://github.com/mirabnasir/flex-box-layout" target="-blank" rel="noopener noreferrer"> View Project</a>
          </div>
       </div>
    </div>
</div>
    );
}
export default Project