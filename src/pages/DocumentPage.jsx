import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Doc from '../components/Doc';
import axios from 'axios';

const DocumentPage = () => {

    const [props, setProps] = useState([])

    useEffect(() => {     
        const getData = async () => {  
          await axios.get(`http://10.3.4.14:8080/documents/${1}`)  
          .then(res => {  
            setProps(res.data)
          }) 
        }  
        getData()  
      }, [])
    return (
        <div>
            <Header />
            {<Doc el = {props}/>}
        </div>
    )
};

export default DocumentPage;