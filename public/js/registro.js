$(document).ready(function () {
    $("#registro").click(function () {
        if ($("#user").val() == "" || $("#password").val() == "") {
            alert("Completar campos")
        } else {
            $("#load").removeClass("load")
            axios.post('/login', {
                user: $("#user").val(),
                password: $("#password").val()
            }).then(function (response) {
                alert("Registro correcto");
                window.location.href = "./"
            }).catch(function (error) {
                alert(error);
            }).finally(function (d) {
                $("#load").addClass("load")
            });
        }
    });
});