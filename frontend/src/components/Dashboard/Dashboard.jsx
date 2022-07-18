import React from 'react';
import { Link } from 'react-router-dom';
import AllNotes from '../AllNotes/AllNotes';
const Dashboard = () => {
    return (
        <div className='justify-items-start my-10 mx-10'>
           <h6 className='text-7xl mr-10 flex'>My notes</h6>
           
           <Link to={'/new'}><button className='text-4xl flex border-blue-900 border-4 mt-6 px-8 py-2 rounded-lg' >Create Note</button></Link>
           <AllNotes></AllNotes>
            
        </div>
    );
};

export default Dashboard;