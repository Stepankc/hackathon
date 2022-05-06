import React from 'react'
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div>
            <div className='header'>
                <nav className='navigation'>
                    <Link className='activeHeader' to="getStart">Начало работы</Link>
                    <Link className='activeHeader' to="workSpace">Рабочее пространство</Link>
                </nav>
            </div>
        </div>
    )

}

export default Header