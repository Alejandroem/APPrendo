function getImage() {
    
    navigator.camera.getPicture(uploadPhoto, function(message) {
        alert('La imagen no fue cargada, intente de nuevo');
    }, {
        quality: 100,
        destinationType: navigator.camera.DestinationType.FILE_URI,
        sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
    });
}

function uploadPhoto(imageURI) {
    window.plugins.spinnerDialog.show("Cargando","Por favor espere mientras cargamos su imagen", true);
    
    var options = new FileUploadOptions();
    options.fileKey = "file";
    options.fileName = imageURI.substr(imageURI.lastIndexOf('/') + 1);
    options.mimeType = "image/jpeg";
    console.log(options.fileName);
    var params = new Object();
    params.value1 = "test";
    params.value2 = "param";
    options.params = params;
    options.chunkedMode = false;

    var ft = new FileTransfer();
    ft.upload(imageURI, "http://apprendo.000webhostapp.com/upload.php", function(result){
        console.log(JSON.stringify(result));
        // alert(JSON.stringify(result));

        window.plugins.spinnerDialog.hide();
        console.log($("#NombreUsuario").text());
        console.log(result.response);
        $.ajax({
            url: 'https://apprendo.000webhostapp.com/actualizarImagen.php',
            data: {carnet:$("#NombreUsuario").text(),imagen:result.response},
            type:'get',
            success: function(response){
                alert("Imagen cargada con exito");
                window.location.replace("Perfil.html");
            }
        });  
    }, function(error){
        console.log(JSON.stringify(error));
        alert(JSON.stringify(error));
        window.plugins.spinnerDialog.hide();
        alert("Ocurrio un error al cargar la imagen");
    }, options);

}