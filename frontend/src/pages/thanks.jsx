import { Link } from "react-router-dom";

export function Thanks() {

    return <section className='thanks'>
        <Link to={'/'} >Go Back</Link>
        <h1>Thank You For Your Registration!</h1>
    </section>
}