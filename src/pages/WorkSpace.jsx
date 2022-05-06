import React, { useState, useEffect } from 'react'
import Ticket from '../components/Ticket'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import Header from '../components/Header.jsx';


const WorkSpace = () => {

    const [postsPerPage] = useState(10);
    const [offset, setOffset] = useState(1);
    const [posts, setAllPosts] = useState([]);
    const [pageCount, setPageCount] = useState(0)
    
    const getPostData = (data) => {
      return (
        data.map(post => <Ticket post={post} />)
      )
    
    }

    const getAllPosts = async () => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
        const data = res.data;
        const slice = data.slice(offset - 1 , offset - 1 + postsPerPage)
        const postData = getPostData(slice)
      
        setAllPosts(postData)
        setPageCount(Math.ceil(data.length / postsPerPage))
      }

    const handlePageClick = (event) => {
        const selectedPage = event.selected;
        setOffset(selectedPage * postsPerPage + 1)
      };
    useEffect(() => {
        getAllPosts()
      }, [offset])
    return (
        <div>
            <Header />
            <div className='title'>
                <div className='titleComponent'>Имя заявки</div>
                <div className='titleComponent'>Статус</div>
            </div>
            {posts}
                  <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
        </div>
    )
}

export default WorkSpace