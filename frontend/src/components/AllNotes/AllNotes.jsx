import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllNotes } from '../../redux/actions/actionsCreators';
import Note from '../Note/Note';
const AllNotes = () => {
    const { id } = useSelector(state => state.auth.user.user);
    const dispatch = useDispatch();
    const notes = useSelector(state => state.noteReducer.notes);
    useEffect(() => {
        dispatch(getAllNotes(id))
    }, [dispatch])
    console.log(notes);
    return (
        <div>
            {
                (notes.length === 0) ? (<p> There's no notes for this user yet</p>) :
                    (
                        notes.map((note, index) => {
                            return (
                                <>
                                    <Note key={index} title={note.title} updatedAt={note.updatedAt} noteId = {note.id} />
                                    
                                </>


                            )
                        })
                    )
            }
        </div>
    );
};

export default AllNotes;