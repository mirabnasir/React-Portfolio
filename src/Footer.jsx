import React from 'react';
import './Footer.css';
import { SiFacebook, SiTwitter,SiGoogle, SiInstagram} from 'react-icons/si';
function Footer(){
    return (
        <footer className="footer">
            <div className="container">
                <div className="brand">
                    <h1>Web Developer</h1>
                    <p>Minimal & Creative Portfolio/CV/Biodata Solution in One Platform.</p>
                </div>
                <div className="social-icons">
                   <SiFacebook size={24} color="#3b5998"/>
                   <SiTwitter size={24} color="#1da1f2"/>
                   <SiGoogle size={24} color="#db4437"/>
                   <SiInstagram size={24} color="#e1306c"/>
                </div>
                <div className="intro">
                    <p>I’m a web developer, focus only on my work.</p>
                </div>
                <div className="contact-info">
                    <div className="email">
                        <h3>Sent Mail</h3>
                        <p>mirabnasir443@gmail.com</p>
                        
                    </div>
                    <div className="phone">
                        <h3>Make Call</h3>
                        <p>+92 3366401518</p>
                    </div>
                    <div className="address">
                        <h3>Get in Touch</h3>
                        <p>LinkIn Mirab Nasir</p>
                    </div>

                </div>
                <p className='date'> Copyright &copy; {new Date().getFullYear()} ThemePure. All rights reserved. </p>
            </div>
        </footer>
    );
}

export default Footer