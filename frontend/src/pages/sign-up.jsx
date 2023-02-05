import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

import { useSelector } from 'react-redux';

import { userService } from '../services/user.service.js'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js';

export function SignUp() {
    // const boards = useSelector((storeState) => storeState.boardModule.boards)
    const [credentials, setCredentials] = useState({ email: '', username: '', password: '', fullname: '', imgUrl: '' })
    const navigate = useNavigate()

    function clearState() {
        setCredentials({ email: '', username: '', password: '', fullname: '', imgUrl: '' })
    }

    function handleChange(ev) {
        const field = ev.target.name
        const value = ev.target.value
        setCredentials({ ...credentials, [field]: value })
    }

    async function onSignup(ev = null) {
        if (ev) ev.preventDefault()
        if (!credentials.email || !credentials.password || !credentials.fullname) return
        try {
            const user = await userService.signup(credentials)
            showSuccessMsg(`Welcome ${user.fullname}`)
            clearState()
        }
        catch (err) {
            console.log('error: ', err)
        }
    }

    return (
        <section className='signup'>
            <div className="email-password-container">
                <h1 className="signup-header">
                    <b>Sign</b>
                    {" Up"}
                </h1>
                <form className="email-password-input-and-button-container"
                    onSubmit={onSignup}>
                    <div className="form-input-container">
                        <span className="email-password-label">Email</span>
                        <div className="email-input-container">
                            <input
                                onChange={handleChange}
                                id="email"
                                placeholder="Example@company.com"
                                type="email"
                                name="email"
                                className="email-input"
                                aria-label="Enter your work email address" required />
                        </div>
                    </div>
                    <div>
                        <legend>How many years of experience do you
                            have with Facebook Marketing?</legend>

                        <div>
                            <input type="radio" id="no-experience" name="exp" value="no-experience" />
                            <label htmlFor="no-experience">No Experience</label>
                        </div>

                        <div>
                            <input type="radio" id="0-1-years" name="exp" value="0-1-years" />
                            <label htmlFor="0-1-years">0-1 Years</label>
                        </div>

                        <div>
                            <input type="radio" id="1-2-years" name="exp" value="1-2-years" />
                            <label htmlFor="1-2-years">1-2 Years</label>
                        </div>
                        <div>
                            <input type="radio" id="2-or-more" name="exp" value="2-or-more" />
                            <label htmlFor="2-or-more">2 Or More Years</label>
                        </div>
                    </div>
                    <div className="range-input-container">
                        <label className="quest-label-label">What was the
                            biggest campaign budget you have managed in a single month?</label>
                        <input
                            onChange={handleChange}
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
