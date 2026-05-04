import React from 'react';

const loading = () => {
    return (
        <div className='h-[60vh] flex justify-center items-center text-indigo-500'>
            <span className="loading loading-spinner loading-xl"></span>
        </div>
    );
};

export default loading;