import React from 'react';
import Header from './Header.jsx';
import About from './About.jsx';
import Project from './Project.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';

function App() {
    return (
        <>
            <Header />
            <section id="about">
                <About />
            </section>
            <section id="project">
                <Project />
            </section>
            <section id="contact">
                <Contact />
            </section>
            <Footer />
        </>
    );
}

export default App;
