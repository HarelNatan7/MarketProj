
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'
import { httpService } from './http.service.js'

const STORAGE_KEY = 'user'
const BASE_URL = 'user/'

export const marketerService = {
    query,
    getById,
    save,
    remove,
    getEmptyMarketer
}
window.cs = userService

async function query() {
    // const users = await storageService.query(STORAGE_KEY)
    const users = await httpService.get(BASE_URL)
    console.log('usersFromStorage:', users)
    return users
}

async function save(user) {
    var savedUser
    if (user._id) {
        savedUser = await storageService.put(STORAGE_KEY, user)
    } else {
        // savedUser = await storageService.post(STORAGE_KEY, user)
        savedUser = await httpService.post('user', user)

    }
    return savedUser
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