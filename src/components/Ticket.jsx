import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
const Ticket = (props) => {


    return (
        <div>
            <Link className="TicketLink" to={{pathname:"/document", propsSearch: props.post.id}}>
                <div className='ticket'>
                    <div className='ticketName'>{props.post.name}</div>
                    <div className='ticketStatus done'>{props.post.status}</div>
                </div>
            </Link>
            <hr className='underline' />
        </div>
    )
}

export default Ticket