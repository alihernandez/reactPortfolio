import React from 'react';
import './Contact.css';
import imgBack from '../images/im4.jpg';

const Contact = () => {
    return (
        <div className="main-container">
            
            <div className="central-form">
                <h2 className="title">Contact form</h2>

                <div className="back-form">
                    <div className="img-back">
                        <h4>Send your message</h4>
                        <img src={imgBack} alt="" />
                    </div>

                    <form>
                        <p>message from server</p>

                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder="your name here..." />

                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="your email here..." />

                        <label htmlFor="message">Message</label>
                        <textarea type="text" placeholder="your message here..." name="message"/>

                        <div className="send-btn">
                            <button type="submit">Send</button>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    )
}

export default Contact;