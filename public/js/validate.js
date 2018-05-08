var jwt = localStorage.getItem('jwt_token')
if (jwt) {
    axios.get('/auth?jwt=' + jwt)
        .then(function (response) {
            console.log("registrado");
        })
        .catch(function (error) {
            window.location.href = "./"
        });
} else {
    window.location.href = "./"
}

$(document).ready(function () {
    $("#salir").click(function () {
        localStorage.removeItem("jwt_token");
        window.location.href = "./"

    });
});

