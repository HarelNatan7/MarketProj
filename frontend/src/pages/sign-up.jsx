import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

import { useSelector } from 'react-redux';

import { userService } from '../services/user.service.js'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js';

export function SignUp() {

    return (
        <section className='signup'>
            <div className="email-password-container">
                <h1 className="signup-header">
                    <b>Sign</b>
                    {" Up"}
                </h1>
                <form className="email-password-input-and-button-container"
                >
                    {/* onSubmit={onSignup} */}
                    <div className="input-container">
                        <span>Name</span>
                        <input type="text" name="name" id="name" placeholder="Enter your name" />
                    </div>
                    <div className="input-container">
                        <span>Last Name</span>
                        <input type="text" name="lastName" id="lastName" placeholder="Enter your last name" />
                    </div>
                    <div className="input-container">
                        <span className="email-password-label">Email</span>
                        <div className="email-input-container">
                            <input
                                // onChange={handleChange}
                                id="email"
                                placeholder="Example@company.com"
                                type="email"
                                name="email"
                                className="email-input"
                                aria-label="Enter your work email address" required />
                        </div>
                    </div>
                    <div className="input-container">
                        <span>Website Address</span>
                        <input type="text" name="website" id="website" placeholder="Website Address" />
                    </div>
                    <div className="input-container">
                        <span>LinkedIn Address
                        </span>
                        <input type="text" name="linkdin" id="linkdin" placeholder="Linkdin profile" />
                    </div>
                    <div className="radio-input-container">
                        <legend>How many years of experience do you
                            have with Facebook Marketing?</legend>

                        <div className="radio-wrapper">
                            <div className="radio-container">

                                <input type="radio" id="no-experience" name="exp" value="no-experience" />
                                <span htmlFor="no-experience">No Experience</span>
                            </div>

                            <div className="radio-container">
                                <input type="radio" id="0-1-years" name="exp" value="0-1-years" />
                                <span htmlFor="0-1-years">0-1 Years</span>
                            </div >

                            <div className="radio-container">
                                <input type="radio" id="1-2-years" name="exp" value="1-2-years" />
                                <span htmlFor="1-2-years">1-2 Years</span>
                            </div>
                            <div className="radio-container">
                                <input type="radio" id="2-or-more" name="exp" value="2-or-more" />
                                <span htmlFor="2-or-more">2 Or More Years</span>
                            </div>
                        </div>
                    </div>

                    <div className="range-input-container">
                        <span className="quest-label-label">What was the
                            biggest campaign budget you have managed in a single month?</span>
                        <input
                            id="range"
                            type="range"
                            name="range"
                            min="1000" max="500000"
                            className="range-input" />
                    </div>

                    <div className="btn-container">
                        <button type="submit" className="next-btn">
                            <div className="next-wrapper">Submit</div>
                        </button>
                    </div>
                </form>

            </div>

        </section>
    )
}
