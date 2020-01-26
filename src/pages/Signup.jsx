import React, { Component } from 'react'
//import DefaultLayout from "../layout/Default";
//import Form from "../layout/Form";
//import {signup} from "../utils/auth";

export default class Signup extends Component {
    render() {
        debugger
        return (
    <div>
            
                <div className="">
                    <label className="">Username</label>
                    <div className="">
                        <input 
                            
                            className="" 
                            name="username" 
                            type="text" 
                            placeholder="email"
                        />
                    </div>
                </div>
                
                <div className="">
                    <label className="">Email</label>
                    <div className="">
                        <input 
                           
                        
                            className="" 
                            name="email" 
                            type="text" 
                            placeholder="email"
                        />
                    </div>
                </div>                                                
                <div className="">
                    <label className="">Password</label>
                    <div className="">
                        <input 
                           
                         
                            className="" 
                            name="password" 
                            type="password" 
                            placeholder="password"
                        />
                    </div>
                </div>
                <button 
                    className=""
                    >
                    Signup
                </button>
                </div>

            

        )
    }
}
