export const sendData = (userInfo) => {
    return fetch("http://localhost:3005/api/mail", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify(userInfo)
    })
        .then(data => {
            return data.json();
        })
        .catch(err => {
            return err.json();
        });
};