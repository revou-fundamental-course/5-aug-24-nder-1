document.getElementById('hasilBMI', 'penjelasan').addEventListener('submit', function(event) {
    event.preventDefault(); 

    hitungBMI(); 
});

function hitungBMI() {

    const beratBadan = parseFloat(document.getElementById('weight').value);
    const tinggiBadan = parseFloat(document.getElementById('height').value) / 100; 
    const usia = document.getElementById('age').value;
    const jenisKelamin = document.querySelector('input[name="gender"]:checked');

    if (isNaN(beratBadan) || isNaN(tinggiBadan) || tinggiBadan <= 0 || beratBadan <= 0 || usia === "" || !jenisKelamin) {
        alert("Harap isi semua input dengan benar.");
        return; 
    }

    const bmi = beratBadan / (tinggiBadan * tinggiBadan);

    const hasilBMI = document.getElementById('hasilBMI');
    const statusBMI = document.getElementById('statusBMI');
    const bmiValue = document.getElementById('bmiValue');
    const keteranganBMI = document.getElementById('keteranganBMI');
    const downloadBtn = document.getElementById('downloadBtn');
    const tulisHasil = document.querySelector('.hasil-bmi-container h4'); 
    const penjelasanBMI = document.getElementById('penjelasanBMI');
    const penjelasan2BMI = document.getElementById('penjelasan2BMI');
    const solusi = document.getElementById('solusi');

    bmiValue.textContent = bmi.toFixed(1);

    if (bmi < 18.5) {
        statusBMI.textContent = 'Kekurangan Berat Badan';
        keteranganBMI.textContent = 'Anda memiliki berat badan kurang.';
        penjelasanBMI.textContent = 'Jika nilai BMI (Body Mass Index) Anda berada di bawah 18.5, ini menunjukkan bahwa Anda termasuk dalam kategori berat badan kurang atau underweight. Kondisi ini bisa disebabkan oleh berbagai faktor, seperti asupan kalori yang tidak mencukupi, masalah kesehatan seperti gangguan makan atau penyakit kronis, metabolisme yang tinggi, atau aktivitas fisik yang berlebihan tanpa asupan nutrisi yang seimbang.';
        penjelasan2BMI.textContent = 'Berat badan yang terlalu rendah dapat berdampak negatif pada kesehatan, seperti risiko kekurangan nutrisi penting yang diperlukan oleh tubuh. Selain itu, berat badan yang rendah juga bisa melemahkan sistem kekebalan tubuh, membuat Anda lebih rentan terhadap infeksi dan penyakit. Masalah kesehatan lain yang mungkin timbul adalah risiko osteoporosis akibat kekurangan kalsium dan vitamin D, serta kelelahan dan kurang energi karena tubuh tidak memiliki cadangan energi yang cukup.';
        solusi.textContent = '1. Perbaiki Pola Makan\n2. Tambahkan Camilan Sehat\n3. Latihan Fisik dengan Beban Ringan';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        statusBMI.textContent = 'Normal (Ideal)';
        keteranganBMI.textContent = 'Anda memiliki berat badan yang ideal.';
        penjelasanBMI.textContent = 'Jika nilai BMI (Body Mass Index) Anda berada di antara 18.5 dan 24.9, ini menunjukkan bahwa Anda berada dalam kategori berat badan normal atau sehat. Nilai BMI ini menunjukkan bahwa berat badan Anda seimbang dengan tinggi badan Anda, yang merupakan indikator umum bahwa Anda memiliki risiko lebih rendah terhadap berbagai masalah kesehatan terkait berat badan. ';
        penjelasan2BMI.textContent = 'Mempertahankan BMI dalam rentang ini penting untuk menjaga kesehatan secara keseluruhan, termasuk fungsi jantung yang baik, keseimbangan hormonal, dan sistem kekebalan tubuh yang kuat. Selain itu, berat badan yang normal juga dapat membantu mengurangi risiko penyakit kronis seperti diabetes tipe 2, hipertensi, dan penyakit jantung. Untuk menjaga BMI yang sehat, penting untuk mengonsumsi diet seimbang yang kaya akan nutrisi, melakukan aktivitas fisik secara teratur, dan mempertahankan gaya hidup yang sehat.';
        solusi.textContent = '1. Pertahankan Pola Makan Seimbang\n2. Rutin Berolahraga\n3. Hindari Stres';
    } else if (bmi >= 25 && bmi <= 29.9) {
        statusBMI.textContent = 'Berat Badan Lebih';
        keteranganBMI.textContent = 'Anda memiliki berat badan berlebih.';
        penjelasanBMI.textContent = 'Jika nilai BMI (Body Mass Index) Anda berada di antara 25 dan 29.9, ini menunjukkan bahwa Anda termasuk dalam kategori overweight atau berat badan berlebih. Berat badan yang berlebih dapat meningkatkan risiko terkena berbagai masalah kesehatan, seperti penyakit jantung, diabetes tipe 2, hipertensi, dan gangguan metabolisme lainnya.';
        penjelasan2BMI.textContent = 'Kondisi ini juga dapat menyebabkan masalah fisik seperti nyeri sendi atau kelelahan, karena beban tambahan pada tubuh. Meskipun belum termasuk dalam kategori obesitas, BMI dalam rentang ini tetap memerlukan perhatian dan tindakan untuk mencegah peningkatan berat badan lebih lanjut. Penting untuk mempertahankan gaya hidup sehat dengan mengadopsi pola makan yang seimbang dan kaya nutrisi, serta rutin melakukan aktivitas fisik untuk membantu menurunkan berat badan ke rentang yang lebih sehat.';
        solusi.textContent = '1. Konsultasi dengan Ahli Gizi atau Dokter\n2. Tingkatkan Aktivitas Fisik\n3. Kurangi Asupan Kalori';
    } else {
        statusBMI.textContent = 'Kegemukan (Obesitas)';
        keteranganBMI.textContent = 'Anda memiliki berat badan yang sangat berlebih.';
        penjelasanBMI.textContent = 'Jika nilai BMI (Body Mass Index) Anda berada di atas 30, ini menunjukkan bahwa Anda termasuk dalam kategori obesitas. Obesitas adalah kondisi di mana penumpukan lemak dalam tubuh telah mencapai tingkat yang dapat mengganggu kesehatan';
        penjelasan2BMI.textContent = 'Orang dengan BMI di atas 30 memiliki risiko lebih tinggi untuk mengalami berbagai masalah kesehatan serius, seperti penyakit jantung, diabetes tipe 2, hipertensi, gangguan tidur, dan masalah muskuloskeletal seperti osteoartritis. Obesitas juga dapat berdampak negatif pada kualitas hidup, termasuk meningkatkan risiko depresi dan penurunan mobilitas.';
        solusi.textContent = '1. Konsultasi dengan Dokter\n2. Perubahan Pola Makan yang Signifikan\n3. Olahraga Teratur\n4. Pertimbangan Intervensi Medis';
    }

    tulisHasil.style.display = 'none';

    penjelasan.style.display = 'block';
    hasilBMI.style.display = 'block';
    downloadBtn.style.display = 'block';
}

function resetForm() {
    window.location.reload(); 
}