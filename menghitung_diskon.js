const readline = require ("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("masukkan harga barang: ", function (harga) {
    harga = parseInt(harga);

    if (harga >= 50000) {
        diskon = harga * 0.3;
        console.log("Total belanja anda adalah: ", harga);
        console.log("diskon yang diperoleh anda adalah: ", diskon);
        console.log("total yang harus dibayar adalah: ", harga - diskon);
    } else if (harga >= 100000) {
        diskon = harga * 0.5;
        console.log("Total belanja anda adalah: ", harga);
        console.log("diskon yang diperoleh anda adalah: ", diskon);
        console.log("total yang harus dibayar adalah: ", harga - diskon);
    } else if (harga >= 250000) {
        diskon = harga * 0.10;
        console.log("Total belanja anda adalah: ", harga);
        console.log("diskon yang diperoleh anda adalah: ", diskon);
console.log("total yang harus dibayar adalah: ", harga - diskon);
    } else {
        diskon = 0;
        console.log("Total belanja anda adalah: ", harga);
        console.log("diskon yang diperoleh anda adalah:", diskon, "karena Total belanja anda kurang dari Rp.50.000");
        console.log("total yang harus dibayar adalah: ", harga - diskon);
    }

rl.close(); });