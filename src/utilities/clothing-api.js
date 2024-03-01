import sendRequest from "./send-request";
const BASE_URL = '/api/clothing';

export function add(formData) {
    return sendRequest(BASE_URL, 'POST', formData)
}

export function uploadPhoto(imageData) {
    return sendRequest(`${BASE_URL}/upload`, 'POST', imageData, true)
}