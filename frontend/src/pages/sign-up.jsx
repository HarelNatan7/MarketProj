import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

import { useSelector } from 'react-redux';

import { userService } from '../services/user.service.js'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js';
import { marketerService } from "../services/marketing.service.local.js";

export function SignUp() {

    const [users, setUsers] = useState([])
    const [userToAdd, setUserToAdd] = useState(marketerService.getEmptyMarketer())

    useEffect(() => {
        loadUsers()
    }, [])

    async function loadUsers() {
        const users = await marketerService.query()
        setUsers(users)
    }
    const handleChange = ({ target }) => {
        const field = target.name
        let value = target.value
        switch (target.type) {
            case 'number':
            case 'range':
                value = +value || ''
                break;
            case 'radio':
                value = target.value
                break
            default:
                break;
        }
        setUserToAdd(prevFields => ({ ...prevFields, [field]: value }))
    }

    async function onSignup(e) {
        e.preventDefault()
        try {
            const newUser = await marketerService.save(userToAdd)
            console.log('newUser:', newUser)
            showSuccessMsg(`Registered successfully userId: ${newUser._id}`)
        } catch (err) {
            showErrorMsg('Cannot Register')
            console.log(err);
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
                    onSubmit={onSignup}
                >
                    <div className="input-container">
                        <span>Name</span>
                        <input type="text" name="name" id="name" placeholder="Enter your name"
                            onChange={handleChange} />
                    </div>
                    <div className="input-container">
                        <span>Last Name</span>
                        <input type="text" name="lastName" id="lastName" placeholder="Enter your last name"
                            onChange={handleChange} />
                    </div>
                    <div className="input-container">
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
                    <div className="input-container">
                        <span>Website Address</span>
                        <input type="text" name="website" id="website" placeholder="Website Address"
                            onChange={handleChange} />
                    </div>
                    <div className="input-container">
                        <span>LinkedIn Address
                        </span>
                        <input type="text" name="linkdin" id="linkdin" placeholder="Linkdin profile"
                            onChange={handleChange} />
                    </div>
                    <div className="radio-input-container">
                        <legend>How many years of experience do you
                            have with Facebook Marketing?</legend>

                        <div className="radio-wrapper">
                            <div className="radio-container">

                                <input type="radio" id="no-experience" name="exp" value="no-experience"
                                onChange={handleChange} />
                                <span htmlFor="no-experience">No Experience</span>
                            </div>

                            <div className="radio-container">
                                <input type="radio" id="0-1-years" name="exp" value="0-1-years"
                                onChange={handleChange} />
                                <span htmlFor="0-1-years">0-1 Years</span>
                            </div >

                            <div className="radio-container">
                                <input type="radio" id="1-2-years" name="exp" value="1-2-years"
                                onChange={handleChange} />
                                <span htmlFor="1-2-years">1-2 Years</span>
                            </div>
                            <div className="radio-container">
                                <input type="radio" id="2-or-more" name="exp" value="2-or-more"
                                onChange={handleChange} />
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
                            title={userToAdd.budget}
                            onChange={handleChange}
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

            {users && <div className="users-counter">
                <h1> {users.length} marketers have joined so far! </h1>
            </div>}

        </section>
    )
}
