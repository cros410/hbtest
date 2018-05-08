
var jwt = localStorage.getItem('jwt_token')
if (jwt) {
    axios.get('/auth?jwt=' + jwt)
        .then(function (response) {
            window.location.href = "./private"
        })
        .catch(function (error) {
            console.log("no registrado");
        });
}


$(document).ready(function () {
    $("#login").click(function () {
        if ($("#user").val() == "" || $("#password").val() == "") {
            alert("Completar campos")
        } else {
            $("#load").removeClass("load")
            axios.post('/getlogin', {
                user: $("#user").val(),
                password: $("#password").val()
            }).then(function (response) {
                localStorage.setItem('jwt_token', response.data.jwt);
                alert("Ingreso correcto")
                window.location.href = "./private"
            }).catch(function (error) {
                alert("Usuario no registrado")
            }).finally(function (d) {
                $("#load").addClass("load")
            });
        }
    });
});