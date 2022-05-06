import React from 'react'
import DocComponent from './DocComponent'

const doc = (props) => {
    return (
        <div>
            <div className='refactorDoc'>
                <div className="info">
                    <div className="initialValue">
                        <div className="TopBlock">
                        </div>
                        <div className="BottomBlock">
                            <DocComponent/>
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
                    <embed src={props.el.pdfUrl} />
                </div>
            </div>
        </div>
    )
}

export default doc