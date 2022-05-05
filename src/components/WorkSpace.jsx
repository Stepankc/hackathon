import React from 'react'
import Ticket from './Ticket'

const WorkSpace = () => {
  return (
    <div>
        <div className='title'>
        <div className='titleComponent'>Имя заявки</div>
        <div className='titleComponent'>Статус</div>
        </div>
        <Ticket/>
        
    </div>
  )
}

export default WorkSpace