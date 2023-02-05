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
        // console.log('credentials:', credentials)
        try {
            const user = await userService.signup(credentials)
            showSuccessMsg(`Welcome ${user.fullname}`)
            clearState()
            // navigate(`/board/${boards[0]._id}`)
        }
        catch (err) {
            // showErrorMsg('OOps try again', err)
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
                    <div className="input-container">
                        <label>Name</label>
                        <input type="text" name="name" id="name" placeholder="Enter your name" />
                    </div>
                    <div className="input-container">
                        <label>Last Name</label>
                        <input type="text" name="lastName" id="lastName" placeholder="Enter your last name" />
                    </div>
                    <div className="input-container">
                        <label className="email-password-label">Email</label>
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
                        <label>Website Address</label>
                        <input type="text" name="website" id="website" placeholder="Website Address" />
                    </div>
                    <div className="input-container">
                        <label>LinkedIn Address
                        </label>
                        <input type="text" name="linkdin" id="linkdin" placeholder="Linkdin profile" />
                    </div>

                    <div className="btn-container">
                        <button type="submit" className="next-btn">
                            <div className="next-wrapper">Sign up</div>
                        </button>
                    </div>
                </form>

            </div>

        </section>
    )
}
