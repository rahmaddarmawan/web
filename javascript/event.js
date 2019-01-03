window.setTimeout("waktu()",1000);
    function waktu() {
        var tanggal = new Date();
        setTimeout("waktu()",1000);
        document.getElementById("jam").innerHTML = tanggal.getHours();
        document.getElementById("menit").innerHTML = tanggal.getMinutes();
        document.getElementById("detik").innerHTML = tanggal.getSeconds();
    }
    
    function jadwal() {
        var jam = getHours(06);
        var menit =getMinutes(00);
        if (jam>=07 && menit>=00){
            alert("Sekarang Jam 07.00 saatnya masuk ke kelas");
        } else if (jam>=09 && menit>=30){
            alert("Sekarang Jam 09.30 saatnya istirahat");
        } else if (jam>=10 && menit>=00){
            alert("Sekarang Jam 10.00 saatnya masuk ke kelas");
        } 
        else if (jam>=12 && menit>=00){
            alert("Sekarang Jam 12.00 saatnya istirahat dan Sholat Dhuhur");
        } else if (jam>=12 && menit>=30){
            alert("Sekarang Jam 12.30 saatnya masuk ke kelas");
        } else {
            alert("Waktu belajar telah selesai Saatnya Pulang");
        }
               
    }