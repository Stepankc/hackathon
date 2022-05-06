import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
const Ticket = (props) => {


    return (
        <div>
            <Link className="TicketLink" to="/document">
                <div className='ticket'>
                    <div className='ticketName'>{props.post.id}</div>
                    <div className='ticketStatus done'>DONE</div>
                </div>
            </Link>
            <hr className='underline' />
        </div>
    )
}

export default Ticket