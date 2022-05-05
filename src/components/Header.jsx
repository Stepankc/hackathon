import React from 'react'
import { Routes, Route, Link } from "react-router-dom"
import Loginpage from './loginpage'

const header = () => {
    return (
        <div>
            <div className='header'>
                <nav className='navigation'>
                    <Link className='active' to="getStart">Начало работы</Link>
                    <Link className='active' to="statistics">Статистика</Link>
                    <Link className='active' to="workSpace">Рабочее пространство</Link>
                </nav>
            </div>
            <div className="main">
                <Routes>
                    <Route path="/" element={<Loginpage />}></Route>
                    <Route path="getStart" element={<GetStart />}></Route>
                    <Route path="statistics" element={<Statistics />}></Route>
                    <Route path="workSpace" element={<WorkSpace />}></Route>
                </Routes>
            </div>
        </div>
    )

}

export const GetStart = () => {
    return <div>
        123
    </div>
}
export const Statistics = () => {
    return <div>123</div>
}
export const WorkSpace = () => {
    return <div>qweqwe</div>
}

export default header