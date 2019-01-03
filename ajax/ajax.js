function loadpage (){
    var xmlHttp;
    if (window.XMLHttpRequest){
        xmlHttp= new XMLHttpRequest();
    } else {
        xmlHttp= new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlHttp.onreadystatechange= function(){
        if (xmlHttp.readyState==4 && xmlHttp.status==200){
            var xml xmlHttp.responseXML;
            buku = xml.documentElement.getElementByTagName("buku");
            judul = buku[0].getElementByTagName("judul")[0].childNodes[0].nodeValue;
            document.getElementById("Katalog").innerHTML= judulS;
        }
    }
    xmlHttp.open("GET",file,true);
    xmlHttp.sent("");
}