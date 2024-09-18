import axios from "axios";

const api=axios.create({baseURL:'http://localhost:3000'});


export const login=(authData)=>api.post("/user/login",authData);