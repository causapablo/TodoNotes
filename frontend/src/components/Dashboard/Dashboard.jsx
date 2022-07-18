import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../redux/actions/actionsCreators';
import AllNotes from '../AllNotes/AllNotes';
const Dashboard = () => {
    const dispatch = useDispatch();

    const onClickLogout =()=>{
        dispatch(logout());
    }
    return (
        <div className='justify-items-start my-10 mx-10'>
            <button className='text-xl flex border-red-900 border-2 mt-6 px-4 py-1 rounded-lg' onClick={onClickLogout}>Logout</button>
           <h6 className='text-7xl mr-10 flex'>My notes</h6>
           <button className='text-4xl flex border-blue-900 border-4 mt-6 px-8 py-2 rounded-lg' ><Link to={'/new'}>Create Note</Link></button>
           
           <AllNotes></AllNotes>
            
        </div>
    );
};

export default Dashboard;