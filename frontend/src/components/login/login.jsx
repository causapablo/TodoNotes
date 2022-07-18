
import React, { useState } from "react";
import {  useDispatch } from "react-redux";
import { login } from "../../redux/actions/actionsCreators";


export default function Login() {
    
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        email: '',
        password: ''
    });
    const handleChange = (e) => {
        e.preventDefault()

        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const handlerSubmit = (e)=>{
        e.preventDefault();
        dispatch(login(input))
    }
    return (
        <>
            <div className="container mx-auto">
                <h1 className="text-center">
                    Create a new Note
                </h1>
                <div className="text-center">
                    <form onSubmit={(e)=>handlerSubmit(e)}>

                        <div>
                            <input className="shadow appearance-none border rounded text-2xl py-2 my-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="email" placeholder="Email" onChange={(e) => { handleChange(e) }} />
                        </div>
                        <div>
                            <input className="shadow appearance-none border rounded text-2xl py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" name="password" placeholder="Password" onChange={(e) => { handleChange(e) }} />
                        </div>
                        <button className="text-2xl border-blue-900 border-4 mt-6 px-8 py-2 rounded-lg" type='submit'>Sign-in</button>
                    </form>
                </div>
            </div>
        </>
    )
}