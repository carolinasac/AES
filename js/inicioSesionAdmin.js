var config = {
    apiKey: "AIzaSyDQYQ0mVppk73IyI0db76v3v_uCjglWyVE",
    authDomain: "actitudejerciciosalud-16ced.firebaseapp.com",
    databaseURL: "https://actitudejerciciosalud-16ced.firebaseio.com",
    projectId: "actitudejerciciosalud-16ced",
    storageBucket: "actitudejerciciosalud-16ced.appspot.com",
    messagingSenderId: "616848565942"
  };
  firebase.initializeApp(config);
  
 
  function exito()
{
    $("#spinner").html("");
    location.assign('indexAdmin.html');
}

$(function()
{
    $("#ingresa").click(function()
    {
        var correo=$("#correo").val();
        var contrasena=$("#contrasena").val();

        firebase.auth().signInWithEmailAndPassword(correo, contrasena).then(exito).catch(function(error)
        {
            $("#spinner").html("");
            //console.log(error);
            alert ("Error detectado:\n\n"+error.message);
        });
    });


    $("#botonCancelar").click(function()
    {
        location.assign('inicioSesion.html');
    });

});