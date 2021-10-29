
import React, {useState} from 'react'

 function Logintodo() {
    const [Email_login ,setEmail_login]=useState(" ");
    const [Password_login,setPass_login]=useState(" ");

    const handleLogin=(e)=>{
        e.preventDefault();
        let flag1=false;
        const myArray =JSON.parse(localStorage.getItem('Data'));
        myArray.map((elem)=>{
            if( elem.Email == Email_login && elem.Password == Password_login)
            {
                flag1=true;
                // alert("logged in successfully");
            }
    });
    if(flag1 == true)
    {
        alert("logged in successfully");
        window.location.href="./todo";
    }
    else{
        alert("Login credentials incorrect");
    }
}
    return (
        <div className="container">
            <form className="col-md-5 cen" onSubmit={handleLogin}>
                <h2> User Login </h2>
               
                <div class="form-group row">
                    <label  class="col-sm-3 col-form-label">EmailID</label>
                    <div class="col-sm-9">
                    <input placeholder="Email/Username" type="text" onChange={(e)=>setEmail_login(e.target.value)}   class="form-control"/>
                    </div>
                </div>
                <div class="form-group row">
                    <label  class="col-sm-3 col-form-label">Password</label>
                    <div class="col-sm-9">
                    <input placeholder="Password" type="Password" onChange={(e)=>setPass_login(e.target.value)}   class="form-control"/>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">LogIn</button>
                </form>
              
        </div>
    )
}


export default Logintodo
