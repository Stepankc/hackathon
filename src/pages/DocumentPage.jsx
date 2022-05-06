import React from 'react';
import Header from '../components/Header';

const DocumentPage = () => {
    return (
        <div>
            <Header />
            <div className='refactorDoc'>
                <div className="info">12313</div>
                <div className='document'>
                    <embed src="https://africau.edu/images/default/sample.pdf" />
                </div>
            </div>
        </div>
    );
};

export default DocumentPage;