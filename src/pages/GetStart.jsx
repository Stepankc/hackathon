import React from 'react'
import Header from '../components/Header.jsx'
const GetStart = () => {
    return (
        <div>
            <Header />
            <div className='instruction'>
                <h1 className='dataBase'>База данных:</h1>
                <p>В таблице document представлено 4 столбца:id, имя pdf файла, pageID и pageType.
                    PageType имеет связь 1 к 1 открывающую таблицу param, содержащую статус документа
                </p>
                <h1 className='Back-end'>Описание back-end решения:</h1>
                <p>Stack: Kotlin,Postgres</p>
                <h1 className='Back-end'>Описание front-end решения:</h1>
                <p>    Stack: Figma, React.js, axios, Sass
</p>
<p>
Инструкция пользователя:
</p>
    <ul>
        <li>На главной странице сайта перейти в раздел “Рабочее пространство”</li>
        <li>Открыть нужный Файл .csv,Далее появляется возможность проверить и изменить данные</li>
        <li>Поставить галочку в кнопке “проверить” и сохранить изменения</li>
    </ul>
            </div>
        </div>
    )
}

export default GetStart