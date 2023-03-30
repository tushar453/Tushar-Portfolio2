import "./Form.css"
import React , { useRef }from 'react'
import { useState  } from "react";
import { useNavigate } from "react-router-dom";

import emailjs from '@emailjs/browser';


const Form = () => {
  let navigate = useNavigate();
  const[name ,setName] = useState("");
  const[email ,setEmail] = useState("");
  const[subject ,setSubject] = useState("");
  const[message ,setMessage] = useState("");
  const[nameerr ,setNameerr] = useState(true);
  const[emailerr ,setEmailerr] = useState(true);
  const form = useRef();
  const submit = async(e)=>{
    e.preventDefault();
//     const userId =JSON.parse(localStorage.getItem('details')) ;
//      console.warn(userId._id);
   
//    let result =  fetch('http://localhost:4500/save',{
// method:'post',
// body:JSON.stringify({name,email,subject,message}),
// headers:{
// 'Content-Type':'application/json'
// }, 
// })
//   result = await result.json();
// console.warn(result);
// localStorage.setItem("user",JSON.stringify(result));

emailjs.sendForm('service_bvj4aaw', 'template_i4deg5l', form.current, 'aTQ94qnQ-QcU5JC3s')
.then((result) => {
    console.log(result.text);
     alert("your message is submitted"); 
     navigate('/')

}, (error) => {
    console.log(error.text);
});


   
     
  }




  const namesubmit = (e)=>{
   setName(e.target.value)
let item = e.target.value;
   if(item.length<5){
    setNameerr(true);
   }
   else{
    setNameerr(false);
   }
  }

  const emailsubmit = (e)=>{
    setEmail(e.target.value)
    let item = e.target.value;
    if(item.length<10){
     setEmailerr(true);
    }
    else{
     setEmailerr(false);
    }
   }
  return (
    <div className="form">
        <form onSubmit={submit} ref={form} >
        <label htmlFor="">Your Name</label>
        <input type="text"  name="name"  className="text" value={name} onChange={namesubmit}/>
        {nameerr?<p style={{color:"red"}}>enter correct details  !</p>:""}
     
        <label htmlFor="">Email</label>
      <input type="email" name="email" className="text" value={email}  onChange={emailsubmit}/>
      {emailerr?<p style={{color:"red"}}>enter correct details  !</p>:""}
      <label htmlFor="">Subject</label>
      <input type="text" className="text"value={subject} onChange={(e)=>setSubject(e.target.value)}/>
     
      
      <label htmlFor="">Message</label>
      <textarea  name="message" placeholder="Enter Your Message Here" id="" cols="30" rows="3" className="text" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
      <button className="btn">SUBMIT</button>
      </form>
    </div>
  )
}

export default Form