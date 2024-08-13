function hitungBMI() {
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    let hasil = parseInt(weight) / (parseInt(height) / 100) ** 2;

    if(document.getElementById('pria').checked == true) {   
        var gender = "Pria"
    } else if(document.getElementById('wanita').checked == true) {  
        var gender = "Wanita" 
    };
    
    alert(gender + " " + "dengan hasil BMI" + " " + hasil)
}
  