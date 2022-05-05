import React, { useState, useEffect } from 'react'
import Ticket from '../components/Ticket'
import axios from 'axios'


const WorkSpace = () => {

    const [post, setPosts] = useState([])
    useEffect(() => {
        axios({
            method: "GET",
            url: 'https://jsonplaceholder.typicode.com/posts'
        }).then(res => { setPosts(res.data) })
    }, []);
    console.log(post)
    return (
        <div>
            <div className='title'>
                <div className='titleComponent'>Имя заявки</div>
                <div className='titleComponent'>Статус</div>
            </div>
            {post.map(
                com => <Ticket post={com} />
            )}
        </div>
    )
}

export default WorkSpace