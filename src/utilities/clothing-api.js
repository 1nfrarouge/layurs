import sendRequest from "./send-request";
import axios from "axios";
const BASE_URL = '/api/clothing';

export function add(formData) {
    return sendRequest(BASE_URL, 'POST', formData)
}

export function uploadPhoto(imageData) {
    return sendRequest(`${BASE_URL}/upload`, 'POST', imageData, true)
}

export async function getAll() {
    console.log("get all ran")
    const s = await axios.get('/api/clothing/get-clothing');
    console.log(s);
    return s//sendRequest(`${BASE_URL}/get-clothing`);
}