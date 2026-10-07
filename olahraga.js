const readline = require("readline"); 
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout, 
}); 
 
rl.question("masukkan jenis olahraga (lari/push-up/plank): ", function (olahraga) { 
    rl.question("masukkan lama waktu olahraga (menit): ", function (waktu) { 
 
        waktu = parseInt(waktu); 
 
        let kalori = 0; 
        let total = 0; 
 
        if (olahraga == "lari") { 
            if (waktu >= 5) { 
                kalori = 60 / 5; 
                total = kalori * waktu; 
 
                console.log("olahraga yang anda lakukan adalah lari"); 
                console.log("lama waktu olahraga:", waktu, "menit"); 
                console.log("kalori yang terbakar:", total, "kalori"); 
            } else { 
                console.log("waktu lari harus minimal 5 menit"); 
            } 
 
        } else if (olahraga == "push-up") { 
            if (waktu >= 30) { 
                kalori = 200 / 30; 
                total = kalori * waktu; 
 
                console.log("olahraga yang anda lakukan adalah push-up"); 
                console.log("lama waktu olahraga:", waktu, "menit"); 
                console.log("kalori yang terbakar:", total, "kalori"); 
            } else { 
                console.log("waktu push-up harus minimal 30 menit"); 
            } 
 
        } else if (olahraga == "plank") { 
            if (waktu >= 1) { 
                kalori = 5; 
                total = kalori * waktu; 
 
                console.log("olahraga yang anda lakukan adalah plank"); 
                console.log("lama waktu olahraga:", waktu, "menit"); 
                console.log("kalori yang terbakar:", total, "kalori"); 
            } else { 
                console.log("waktu plank minimal 1 menit"); 
            } 
 
        } else { 
            console.log("Jenis olahraga tidak adaa"); 
        } 
 
        rl.close(); 
    }); 
});