function dataPerson() {
    let form = document.getElementById("formulir");
    let name = form.name.value;
    let job = form.job.value;
    let hobby = form.hobby.value;
    let greeting = 'Halo ' + name + '<br> Semangat menjadi ' + job + '<br>Jika lelah jangan lupa ' + hobby;
    let empty = "Mohon maaf anda belum mengingisi formulir";
    let hasil = (name && job && hobby != '') ? greeting : empty;

    document.getElementById('hasil').innerHTML = hasil;
}
