import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import "./App.css"


const AddUser = () => {

    const [box1, setBox1] = useState("")
    const [box2, setBox2] = useState("")
    const [box3, setBox3] = useState("")
    const [box4, setBox4] = useState("")
   
    const history=useHistory()


   async function getData() {
       alert("Card number saved successfully !!")
        let item = { box1, box2, box3,box4 }
        console.log(item)
        //iss code block me kuch modification krke addProduct page ko working banana hai

        let result = await fetch("http://localhost:3000/ccuser/", {
            method: "POST",//using post method  here  to push the code
            headers: {//meta daata setup for pushing data to api
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)// item is the form data the we push in api body

        })
        result = await result.json();
        console.warn("result", result)
        localStorage.setItem("addproduct", JSON.stringify(result))
        history.push("/")
}

    return (
        <div>
            <h1 >Add new data</h1>

            <div id="form">
              <form>
             

    Credit card*<input type="text" className="box" name="box1" maxLength="4" onChange={(e)=>setBox1(e.target.value)} />
                <input type="text"  className="box" name="box2" maxLength="4" onChange={(e)=>setBox2(e.target.value)} />
                <input type="text" className="box" name="box3" maxLength="4" onChange={(e)=>setBox3(e.target.value)}/>
                <input type="text" className="box" name="box4" maxLength="4"onChange={(e)=>setBox4(e.target.value)}/><br/><br/>
            
               
                {/* <button className="btn btn-primary " onClick={getData} >Submit</button> */}
            <Link   to="" ><button className="btn btn-primary " onClick={getData} >Submit</button></Link> 
            </form>
            
            </div>
        </div>
    )
    }

export default AddUser
