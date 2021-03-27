const baseUrl = 'http://artificialbyte.com:8080'

const fechSinToken = (endpoint, data, method = 'GET') => {
    const url = `${baseUrl}/${ endpoint}`;
    if (method === 'GET') {
        return fetch(url);
    }else{
        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }
}

const fechConToken = (endpoint, data, method) => {
    const url = `${baseUrl}/${ endpoint}`;

        if (method === 'POST') {
            return fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + data
                },
                body: JSON.stringify({token: data})
            })
        }
}

export {
    fechSinToken,
    fechConToken
}