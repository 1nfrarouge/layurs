import sendRequest from "./send-request";
// import axios from "axios";
const BASE_URL = '/api/clothing';

export function add(formData) {
    return sendRequest(BASE_URL, 'POST', formData);
}

export function uploadPhoto(imageData) {
    return sendRequest(`${BASE_URL}/upload`, 'POST', imageData, true);
}

export async function getAll() {
    return sendRequest(BASE_URL);
}

export async function deleteItem(itemId) {
    return sendRequest(`${BASE_URL}/${itemId}`, 'DELETE');
}

export async function getItem(itemId) {
    return sendRequest(`${BASE_URL}/${itemId}`);
}

export async function updateItem(itemId, formData) {
    return sendRequest(`${BASE_URL}/${itemId}`, 'PUT', formData);
}
