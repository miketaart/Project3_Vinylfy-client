import Axios from "axios";
import qs from "qs";

// qs this is a very small library that turns js objects into 
// the query string format, which is equal to the x-www-form-urlencoded format

const axios = Axios.create({
    baseURL: 'https:localhost:8000/auth',
    withCredentials: true,
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
});

export const signup = (user) => {
    return axios({
        method: "POST",
        url: "/signup", //url backend
        data: qs.stringify(user) // using qs to put the js object into the right format
    })
        .then((response) => {
            setUser(response.data);
        })
        .catch((err) => { console.log("ERROR", err) })
}

export const logout = () => {
    axios()
        // log out on server using axios
        .then(() => {
            clearUser()
        })

    // if success call clearUser
    // redirect in component
}

export const setUser = (user) => {
    window.localStorage.setItem("user", JSON.stringify(user));
    // keeping the user in localStorage
    // localStorage can only save strings
}

export const clearUser = () => {
    window.localStorage.clear();
    // remove user from local storage
    // use clear() or removeItem()
    //https://stackoverflow.com/questions/15486484/localstorage-clear-or-removeitem
}

export const getUser = (user) => {
    return JSON.parse(window.localStorage.getItem("user"));
    // a function that gets the user out of the localstorage and 
    // turns it intor a js object again
    // use this function to protect routes, your profile page navbar
    // or anywhere else where you need userdata
}