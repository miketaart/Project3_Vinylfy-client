import axios from "axios";
import qs from "qs";

export const signup = (user) => {
    return axios({
        method: "POST",
        url: `${process.env.REACT_APP_API_BASE}/auth/signup`,
        data: qs.stringify(user),
        headers: {
            'Content-Type': "application/x-www-form-urlencoded"
        }
    })
    .then(response => {
        setUser(response.data)
    })
}

export const login = (user) => {
    return axios({
        method: "POST",
        url: `${process.env.REACT_APP_API_BASE}/auth/login`,
        data: qs.stringify(user),
        headers: {
            'Content-Type': "application/x-www-form-urlencoded"
        }
    })
    .then(response => {
        setUser(response.data)
    })
}

export const logout = (user) => {
    return axios.delete(`${process.env.REACT_APP_API_BASE}/auth/logout`)
           .then((response) => {
                clearUser('user');
            })
}

export const setUser = (user) => {
    window.localStorage.setItem("user", JSON.stringify(user));
}

export const clearUser = (user) => {
    window.localStorage.clear("user");  
}

export const getUser = () => {
    return JSON.parse(window.localStorage.getItem("user"));
    
}