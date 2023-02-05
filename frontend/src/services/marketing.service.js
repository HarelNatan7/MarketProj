import { httpService } from './http.service.js'

const BASE_URL = 'user/'

export const marketerService = {
    query,
    save,
    getEmptyMarketer
}

async function query() {
    return await httpService.get(BASE_URL)
}

async function save(user) {
    return await httpService.post('user', user)
}

function getEmptyMarketer() {
    return {
        name: '',
        lastName: '',
        email: '',
        website: '',
        linkdin: '',
        exp: '',
        budget: 0,
    }
}