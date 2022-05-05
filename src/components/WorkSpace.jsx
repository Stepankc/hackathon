import React from 'react'
import Ticket from './Ticket'

const WorkSpace = () => {
    return (
        <div>
            <div className='title'>
                <div className='titleComponent'>Имя заявки</div>
                <div className='titleComponent'>Статус</div>
            </div>
            <Ticket />
            {/* <embed src="https://africau.edu/images/default/sample.pdf" width="800px" height="1000px" /> */}
        </div>
    )
}

export default WorkSpace