import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom';
import "./App.css"

const UserList = () => {

    const [data, setData] = useState([]);
    useEffect(() => {//note:-agar useEffect k andar ham api call krne pe =>onpage koi operation like delete/edit pe api update ni hogi and deleted/update item show hota rehega
        
        getData()
   
    },[])


    async function deleteOperation(id) {
        alert("This item will be deleted")
        let result = await fetch("http://localhost:3000/ccuser/" + id, {
            method: "DELETE"
        })
        result = await result.json()
        console.warn(result)
        getData()
    }

    async function getData() {
       
        let result = await fetch("http://localhost:3000/ccuser/")
        
        result = await result.json();
       return  setData(result)  
    }
    return (
        <div>
            <h3 >Credit card data management </h3>
            <div >
                {/* buttom to add new ccdata */}
                <Link to="/adduser" type="button" id="add" >Add new User data </Link>
            </div>
            <table id="ccuser">
                <thead>
                    <tr>

                        <th>ID</th>
                        <th>Box 1 </th>
                        <th>Box 2</th>
                        <th>box-3</th>
                        <th>box-4</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item,id) =>
                            <tr>
                                <td>{id+1}</td>
                                <td>{item.box1}</td>
                                <td>{item.box2}</td>
                                <td>{item.box3}</td>
                                <td>{item.box4}</td>
                                <td><span type="button" id="deletebtn" onClick={() => deleteOperation(item.id)}>Delete</span></td>
                            </tr>)
                    }

                </tbody>
            </table>

        </div>
    )
}

export default UserList
