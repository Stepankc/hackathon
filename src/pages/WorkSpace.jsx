import React, { useState, useEffect } from 'react'
import Ticket from '../components/Ticket'
import axios from 'axios'
import { Pagination } from '@mui/material'
import Header from '../components/Header';


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
            <Header />
            <div className='title'>
                <div className='titleComponent'>Имя заявки</div>
                <div className='titleComponent'>Статус</div>
            </div>
            {post.map(
                com => <Ticket post={com} />
            )}
            <div className="paginatonStyle">
                <Pagination
                    count={post.length / 10}
                // page={page}
                // onPageChange={handleChangePage}
                // rowsPerPage={rowsPerPage}
                // onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </div>
        </div>
    )
}

export default WorkSpace