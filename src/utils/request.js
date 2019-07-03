import axios from 'axios'

var instance = axios.create({
    baseURL: 'http://127.0.0.1:9527/',
    responseType: 'json',
    validateStatus(status) {
        return status == 200
    }
})

const request = {
    get(url, params) {
        let _params
        if (Object.is(params, undefined)) {
            _params = ''
        } else {
            _params = '?'
            for (let key in params) {
                if (params.hasOwnProperty(key) && params[key] != null) {
                    _params += `${key}=${params[key]}&`
                }
            }
        }
        return instance.get(`${url}${_params}`)
    },
    delete(url, params) {
        let _params
        if (Object.is(params, undefined)) {
            _params = ''
        } else {
            _params = '?'
            for (let key in params) {
                if (params.hasOwnProperty(key) && params[key] != null) {
                    _params += `${key}=${params[key]}&`
                }
            }
        }
        return instance.delete(`${url}${_params}`)
    },
    post(url, params) {
        return instance.post(url, params, {
            transformRequest: [(params) => {
                let result = ''
                Object.keys(params).forEach((key) => {
                    if (!Object.is(params[key], undefined) && !Object.is(params[key], null)) {
                        result += encodeURIComponent(key) + '=' + encodeURIComponent(params[key]) + '&'
                    }
                })
                return result
            }],
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
    },
    put(url, params) {
        return instance.put(url, params, {
            transformRequest: [(params) => {
                let result = ''
                Object.keys(params).forEach((key) => {
                    if (!Object.is(params[key], undefined) && !Object.is(params[key], null)) {
                        result += encodeURIComponent(key) + '=' + encodeURIComponent(params[key]) + '&'
                    }
                })
                return result
            }],
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
    },

}

export default request