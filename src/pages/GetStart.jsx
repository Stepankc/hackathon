import React from 'react'
import Header from '../components/Header.jsx'
const GetStart = () => {
    return (
        <div>
            <Header />
            <div className='instruction'>
                <h1 className='dataBase'>База данных:</h1>
                <p>какой-то текст</p>
                <h1 className='Back-end'>Описание back-end решения:</h1>
                <p>text мб список везде по пунктам</p>
                <h1 className='Back-end'>Описание front-end решения:</h1>
                <p>text</p>
            </div>
        </div>
    )
}

export default GetStart