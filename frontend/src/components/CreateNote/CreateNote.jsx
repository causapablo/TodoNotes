import React from 'react';
import { postNote } from '../../redux/actions/actionsCreators';
import swal from 'sweetalert'
import { useDispatch, useSelector} from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const CreateNote = () => {
    const dispatch = useDispatch();
    const {user} = useSelector(state=>state.auth.user);
    
    const [input, setInput] = useState({
        id : user.id,
        title : '',
        content : '',
        categories : []
    });
    const handleChange = (e) => {
        e.preventDefault()

        setInput({ ...input, [e.target.name]: e.target.value })
    };
    const handlerSubmit = (e)=>{
        
        e.preventDefault();
        try {
            if(!input.title || !input.content){
                return swal("Title and content are required.");
            }else{
                
                dispatch(postNote(input));
            }
            
        } catch (error) {
            console.log(error);
        }
        
    }
    return (
        <div className="container mx-auto">
            <h1 className="mb-6 text-center text-4xl">
                Create a new Note
            </h1>
            <div className="text-center">
                <form onSubmit={(e) => handlerSubmit(e)}>

                    <div>
                        <input className="shadow appearance-none border rounded text-2xl py-2 my-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="title" placeholder="title" onChange={(e) => { handleChange(e) }} />
                    </div>
                    <div>
                        <textarea className="focus:shadow-outline resize-none appearance-none rounded border py-2 px-3 text-2xl leading-tight text-gray-700 shadow focus:outline-none" name='content' cols="23" rows="5" onChange={(e) => { handleChange(e) }}></textarea>
                    </div>
                    <button className="text-2xl border-blue-900 border-4 mt-6 px-8 py-2 rounded-lg" type='submit'>Add Note</button>
                    <Link to={'/'}><button className="text-2xl border-blue-900 border-4 mt-6 px-8 py-2 rounded-lg" type='button' >Cancelar</button></Link>
                </form>
                
            </div>
        </div>
    );
};

export default CreateNote;