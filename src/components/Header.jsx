import React from 'react'
import { Routes, Route, Link } from "react-router-dom"
import Loginpage from '../pages/LoginPage'
import WorkSpace from '../pages/WorkSpace'
import GetStart from '../pages/GetStart'

const header = () => {
    return (
        <div>
            <div className='header'>
                <nav className='navigation'>
                    <Link className='active' to="getStart">Начало работы</Link>
                    <Link className='active' to="workSpace">Рабочее пространство</Link>
                </nav>
            </div>
            <div className="main">
                <Routes>
                    <Route path="/" element={<Loginpage />}></Route>
                    <Route path="getStart" element={<GetStart />}></Route>
                    <Route path="workSpace" element={<WorkSpace />}></Route>
                </Routes>
            </div>
        </div>
    )

}

export default header