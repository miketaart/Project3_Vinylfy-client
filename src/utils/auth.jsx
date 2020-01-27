import Axios from "axios";
import qs from "qs";

const axios = Axios.create({
    baseURL: 'https:localhost:8000/auth/',
    withCredentials: true,
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
});

export const signup = (user) => {
    return axios({
        method: "POST",
        url: "signup", //url backend
        data: qs.stringify(user)
    })
        .then((response) => {
            setUser(response.data);
        })
    // don't forget to catch the error wherever you import his function
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
}

export const clearUser = () => {
    window.localStorage.clear();
    this.setState({ navigate: true });
    // remove user from local storage
}

export const getUser = (user) => {
    return JSON.parse(window.localStorage.getItem("user"));
}