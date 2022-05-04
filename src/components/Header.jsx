import React from 'react'
import { Routes, Route, Link } from "react-router-dom"
import Loginpage from './loginpage'

const header = () => {
    return (
        <div>
            <nav>
                <ul className='header'>
                    <li>
                        <Link to="getStart">Начало работы</Link>
                    </li>
                    <li>
                        <Link to="statistics">Статистика</Link>
                    </li>
                    <li>
                        <Link to="workSpace">Рабочее пространство</Link>
                    </li>
                </ul>
            </nav>
            <div className="main">
                <Routes>
                    <Route path="login" element={<Loginpage />}></Route>
                    <Route path="getStart" element={<GetStart />}></Route>
                    <Route path="statistics" element={<Statistics />}></Route>
                    <Route path="workSpace" element={<WorkSpace />}></Route>
                </Routes>
            </div>
        </div>
        
    )
    
}

    export const GetStart = () => {
    return <div>222</div>
  }
  export const Statistics = () => {
    return <div>123</div>
  }
  export const WorkSpace = () => {
    return <div>qweqwe</div>
  }

export default header