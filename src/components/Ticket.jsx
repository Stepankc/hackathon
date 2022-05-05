import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
const ticket = (props) => {

    return (
        <div>
            <Link to="/document">
            <div className='ticket'>
                <div className='ticketName'>{props.post.id}</div>
                <div className='ticketStatus done'>DONE</div>
            </div>
            <hr className='underline' />
            </Link>
        </div>
    )
}

export default ticket