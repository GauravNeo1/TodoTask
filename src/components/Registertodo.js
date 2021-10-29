
import React, {useState} from 'react'

function Registertodo() {
    const [Fname, setUser] = useState(" ");
    const [Lname, setLname] = useState(" ");
    const [Uname, setUname] = useState(" ");
    const [Email, setEmail] = useState(" ");
    const [Pass, setPass] = useState(" ");
    const [Conpass, setConPass] = useState(" ");

    const handleForm = (e) => {
        e.preventDefault();
        let formData = {
            Email: Email,
            Password:Pass,
        }
        let formArr = [ ];
        let data = localStorage.getItem('Data')
        data = JSON.parse(data);
        console.log("Data",data);
        if(data!==null){
        formArr =[...data];}

        formArr.push(formData);
        let loginData = localStorage.setItem("Data",JSON.stringify(formArr));
        console.log("Data",loginData);
       
    }


    const handleClick = (e) => {
        if (Fname !== " " && Lname !== " " && Uname !== " " && Email !== " " && Email !== " " && Pass !== " " && Conpass !== " ") {
           window.location.href="./logintodo"
        }
        else {
            alert("Please fill all the fields")
        }
    }

   return (
    <div className="container">
    <form className="col-md-5 cen" onSubmit={handleForm}>
        <h2> Register Here </h2>
        
        <div class="form-group row">
            <label  class="col-sm-3 col-form-label">First_Name</label>
            <div class="col-sm-9">
            <input type="text" placeholder="Enter Name" onChange={(e) => setUser(e.target.value)}  class="form-control"/>
            </div>
        </div>
        <div class="form-group row">
            <label  class="col-sm-3 col-form-label">Last_Name</label>
            <div class="col-sm-9">
            <input type="text" placeholder="Last Name" onChange={(e) => setLname(e.target.value)}   class="form-control"/>
            </div>
        </div>
        <div class="form-group row">
            <label  class="col-sm-3 col-form-label">Username</label>
            <div class="col-sm-9">
            <input type="text" placeholder="User Name" onChange={(e) => setUname(e.target.value)}  class="form-control"/>
            </div>
        </div>
        <div class="form-group row">
            <label  class="col-sm-3 col-form-label">EmailID</label>
            <div class="col-sm-9">
            <input placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)}   class="form-control"/>
            </div>
        </div>
        <div class="form-group row">
            <label  class="col-sm-3 col-form-label">Password</label>
            <div class="col-sm-9">
            <input placeholder="Password" type="Password" onChange={(e) => setPass(e.target.value)} class="form-control"/>
            </div>
        </div>
        <div class="form-group row">
            <label  class="col-sm-3 col-form-label">Confirm Password</label>
            <div class="col-sm-9">
            <input placeholder="Password" type="Password" onChange={(e) => setConPass(e.target.value)} class="form-control"/>
            </div>
        </div>
        <button type="submit"onClick={handleClick} class="btn btn-primary">Sign Up</button>
        <div>
        <a href="./logintodo">already have an account?Login</a>
        </div>
        </form>
      
</div>
   )
}


export default Registertodo
