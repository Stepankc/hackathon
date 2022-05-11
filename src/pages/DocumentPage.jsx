import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import axios from 'axios';

const DocumentPage = (params) => {
  const [props, setProps] = useState([])

    const getData = async () => {  
      await axios.get(`http://10.3.5.105:8080/api/documents/${params.location.propsSearch}`)  
      .then(res => {  
        setProps(res.data)
      }) 
    }  
    useEffect(() => {     
      getData()  
    }, [])
    return (
      <div>
            <Header />
            <div>
            <div className='refactorDoc'>
                <div className="info">
                    <div className="initialValue">
                        <div className="TopBlock">
                        </div>
                        <div className="BottomBlock">
                            <div>
                                <p className="CheckTitle">Проверено: </p>
                            </div>
                            <div>
                                <input type="checkbox" id="checked" name="Checked" />
                            </div>
                        </div>
                        <button className="saveButton">Сохранить</button>
                    </div>
                </div>
                <div className='document'>
                    <embed src={props.pdfUrl} />
                </div>
            </div>
        </div>
        </div>
    )
};

export default DocumentPage;