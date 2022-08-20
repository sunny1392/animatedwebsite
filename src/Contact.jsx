import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Contact =()=>{
  const [data , setData] = useState({
    fullname:"",
    adress:"",
    email:""

  })
  const inputevent=(event)=>{
    const {name , value} = event.target;
    setData((preVal)=>{
      return{
        ...preVal,
        [name]:value,

      }
    })
  }
  const formsubmit = (e)=>{
    e.preventDefault();
    alert(`My name is ${data.fullname} My address is ${data.adress} and My Email is ${data.email}`)
  }

  return(
    <>
    <div className="my-5">
      <h1 className="text-center">Contact us</h1>
    </div>
    <div className="container contact_div">
      <div className="row">
        <div className="col-md-6 col-10 mx-auto">
          <form onSubmit={formsubmit}>
        <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">FullName</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={inputevent} placeholder="FullName" />
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Address</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" name="adress" value={data.adress} onChange={inputevent} placeholder="Adress" />
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={inputevent} placeholder="name@example.com" />
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Message</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div class="col-12">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
  </form>

        </div>
      </div>
    </div>
    
    </>
  )
}
export default Contact;