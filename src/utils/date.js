 const date = () =>
{
    let arrbulan = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
    let menit = new Date().getMinutes();
    let jam = new Date().getHours();
    let Tahun = new Date().getFullYear();
    let Tanggal = new Date().getDate();
    let bulan = new Date().getMonth();
    let time = `${arrbulan[bulan]} ${Tanggal}, ${Tahun} - ${jam}.${menit}`;
    return time;
}
export{
    date
}