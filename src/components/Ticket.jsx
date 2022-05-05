import React from 'react'

const ticket = (props) => {
    return (
        <div>
            <div className='ticket'>
                <div className='ticketName'>{props.post.id}</div>
                <div className='ticketStatus done'>DONE</div>
            </div>
            <hr className='underline' />
        </div>
    )
}

export default ticket