const readline = require ("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("masukkan harga barang:", function (harga) {
    harga = parseInt(harga);

    if (harga >= 50000) {
        diskon = harga * 0.3;
    } else if (harga >= 100000) {
        diskon = harga * 0.5;
    } else if (harga >= 250000) {
        diskon = harga * 0.10;
    } else {
        diskon = 0;
    }

console.log("Total belanja anda adalah: ", harga);
console.log("diskon yang diperoleh anda adalah: ", diskon);
console.log("total yang harus dibayar adalah: ", harga - diskon);
rl.close(); });