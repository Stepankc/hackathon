import React from 'react'
import { Link } from "react-router-dom"

const header = () => {
    return (
        <div>
            <div className='header'>
                <nav className='navigation'>
                    <Link className='active' to="getStart">Начало работы</Link>
                    <Link className='active' to="workSpace">Рабочее пространство</Link>
                </nav>
            </div>
        </div>
    )

}

export default header