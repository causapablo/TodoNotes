import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deleteNote } from '../../redux/actions/actionsCreators';
const Note = ({ title, updatedAt, noteId}) => {
    const dispatch = useDispatch();
    const onClickDelete = ()=>{
        dispatch(deleteNote(noteId));
    }
    return (
        <div className='container mx-auto px-5 py-5 rounded-lg border-blue-900 border-4 my-2 w-96'>
            <h2>Title : {title}</h2>
            <label>Last edited: {moment(updatedAt).format('L')}</label>
            <div className='mt-3'>
                <button className='mx-2  border-green-600 border-4 rounded-lg px-3'>Edit</button>
                <button className='mx-2 border-yellow-600 border-4 rounded-lg px-3'>Archive</button>
                <button className='mx-2 border-red-700 border-4 rounded-lg px-3' onClick={onClickDelete}>Delete</button>
            </div>
        </div>
    );
};

export default Note;