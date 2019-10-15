class API {
    //登录
    static login(state) {
        return new Promise((resolve, reject) => {
            fetch('http://192.168.22.32:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(state),
                mode: 'cors',
                credentials: 'same-origin'
            })
                .then((response) =>
                    response.json()
                )
                .then((responseJson) => {
                    if (responseJson.success) {
                        resolve(json.data)
                    }
                })
                .catch((error) => {
                    reject(error)
                });
        })
    }
}