import React from 'react'
import { Routes, Route, Link } from "react-router-dom"

const header = () => {
    return (
        <div>
            <nav>
                <ul>
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
                {/* Define all the routes */}
                <Routes>
                    <Route path="getStart" element={<GetStart />}></Route>
                    <Route path="statistics" element={<Statistics />}></Route>
                    <Route path="workSpace" element={<workSpace />}></Route>
                </Routes>
            </div>
        </div>
        
    )
    
}

export const GetStart = () => {
    return <div>You are in Home page</div>
  }
  export const Statistics = () => {
    return <div>This is the page where you put details about yourself</div>
  }
  export const workSpace = () => {
    return <div>This is a 404 page</div>
  }

export default header