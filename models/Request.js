import {encode} from "base-64"

export default class Request{

    constructor({url, options}){
        this.url = url
        this.options = options
    }

    static createPostRequest(query, body){
        const baseUrl = process.env.EXPO_PUBLIC_BASE_URL
        const auth = encode(process.env.EXPO_PUBLIC_MARTHA_USERNAME + ":" + process.env.EXPO_PUBLIC_MARTHA_PASSWORD)

        const url = baseUrl + query
        const options = {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'auth': auth
            }
        }

        return new Request({url, options})
    }
}