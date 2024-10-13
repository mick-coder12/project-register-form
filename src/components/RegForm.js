import React from 'react'
import { useState } from 'react';

function RegForm() {
    const[inputdata,setInputData]=useState({});
    const[flag,setFlag]=useState(false);
    function changeHandler(e){
        setInputData({...inputdata,[e.target.name]:e.target.value})
        setFlag(false);
    }

    function submitHandler(e){
        e.preventDefault();
        if(!inputdata.name || !inputdata.email || !inputdata.password){
            alert("all details are mandatory")
        }
        else{
            setFlag(true);
        }
    }
  return (
    <>
    <pre className='text-center'>{(flag)?<h1>hello {inputdata.name},you've registered successfully</h1>:""}</pre>
    <div className='bg-blue-50 w-[700px] mx-auto'>
       
        <h1 className='text-center mt-[100px] text-5xl bg-blue-500  text-white mx-auto h-[60px] '>Registration Form</h1>
        <form onSubmit={submitHandler} className='  flex flex-col w-[600px]  mx-auto '>
        
        <input className='border-2' type="text"  name="name" placeholder='Enter Your Name' onChange={changeHandler}></input>
        <br/>
        <input className='border-2' type="email" name="email" placeholder='Enter Your Email 'onChange={changeHandler}></input>
        <br/>
        <input className='border-2' type="password" name="password" placeholder='Enter Password' onChange={changeHandler}></input>
        <br/>
        <input  className="bg-green-700 text-white w-[100px] h-[40px] mx-auto text-1xl"type="submit" value="Register" ></input>

        </form>
     
    </div>
    </>
    
  )
}

export default RegForm;