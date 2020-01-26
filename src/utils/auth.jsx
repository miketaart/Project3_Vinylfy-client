import Axios from "axios";
import qs from "qs";

const axios = Axios.create({
    baseURL: ``,//'https:localhost:3000',
    withCredentials: true,
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  });

export const signup = (user)=>{
    return axios({
        method: "POST",
        url: "signup",
        data: qs.stringify(user)
    })
    .then((response)=> {
        setUser(response.data);
    })
    // don't forget to catch the error wherever you import his function
}

export const logout = ()=> {
    // todo
    // log out on server using axios
    // if success call clearUser
    // redirect in component
}

export const setUser = (user)=> {
    window.localStorage.setItem("user", JSON.stringify(user));
}

export const clearUser = ()=> {
    // remove user from local storage
}

export const getUser = (user)=> {
    return JSON.parse(window.localStorage.getItem("user"));
}