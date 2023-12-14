import axios from "axios";

const api = axios.create();
const baseUrl = "http://localhost:5000"

// api calls for authentication
export const authenticationApiRequests = {
    register: (registrationDetails) => api.post(`${baseUrl}/auth/register`, registrationDetails),
    login: (loginDetails) => api.post(`${baseUrl}/auth/login`, loginDetails)
}