import React from 'react';


function ContactForm() {

    return (

        <form className="contact--form" action="" method="post">
            <h3> Send a message </h3>
            <div className="row">
                <div className="column">
                    <span> 1. Full Name: * </span>
                    <input
                        type="text"
                        name="full-name"
                        id="fullName"
                        placeholder="Elon Musk"
                        required
                    />
                </div>
            </div>

            <div className="row">
                <div className="column">
                    <span> 2. Email: * </span>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="elon.musk@twitter.com"
                        required
                    />
                </div>
            </div>

            <div className="row">
                <div className="column">
                    <span> 3. Phone: </span>
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="+358 72 727 7272"
                    />
                </div>
            </div>

            <div className="row">
                <div className="column">
                    <span> 4. Your Message: * </span>
                    <textarea
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="Write your message here"
                        required
                    />
                </div>
            </div>

            <div className="form--btn">
                <button type="submit">
                    <span> Submit </span>
                </button>
                <div className="space" />
            </div>
        </form>

    );

}

export default ContactForm;
