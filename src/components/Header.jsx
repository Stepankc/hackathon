import React from 'react'
import { Routes, Route, Link } from "react-router-dom"
import Loginpage from './loginpage'
import WorkSpace from './WorkSpace'

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

export const GetStart = () => {
    return <div>
        <embed src="https://africau.edu/images/default/sample.pdf" width="1000px" height="900px" />
    </div>
}

export default header