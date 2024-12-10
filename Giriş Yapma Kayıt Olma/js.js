let users = [
    { username: "admin", password: "1234" },
    { username: "emre", password: "123456" },
    { username: "furkan", password: "998877" }
];

let secim = prompt("Bir işlem seçin: \n1. Giriş (giris)\n2. Kayıt (kayıt)\n3. Çıkış (cik)");

while (secim !== "cik") {
    if (secim === "giris") {
        let girilenUsername = prompt("Kullanıcı adı: ");
        let girilenPassword = prompt("Şifre: ");

        let girisBasarili = false;

        for (let user of users) {
            if (user.username === girilenUsername && user.password === girilenPassword) {
                girisBasarili = true;
                break;
            }
        }

        if (girisBasarili) {
            console.log("Giriş başarılı! Hoş geldiniz, " + girilenUsername + "!");
            secim = prompt("Başka bir işlem seçin: \n1. Giriş (giris)\n2. Kayıt (kayıt)\n3. Çıkış (cik)");

        } else {
            console.log("Hatalı kullanıcı adı veya şifre.");
            secim = prompt("Başka bir işlem seçin: \n1. Giriş (giris)\n2. Kayıt (kayıt)\n3. Çıkış (cik)");
        }
    }
    else if (secim === "kayıt") {

        let yeniUsername = prompt("Yeni kullanıcı adı: ");

        let usernameAlindi = false;

        for (let user of users) {
            if (user.username === yeniUsername) {
                usernameAlindi = true;
                break;
            }
        }

        if (usernameAlindi) {
            console.log("Bu kullanıcı adı zaten alınmış. Lütfen başka bir kullanıcı adı seçin.");
            secim = prompt("Başka bir işlem seçin: \n1. Giriş (giris)\n2. Kayıt (kayıt)\n3. Çıkış (cik)");

        } else {
            let yeniPassword = prompt("Yeni şifre: ");

            users.push({ username: yeniUsername, password: yeniPassword });
            console.log("Kayıt başarılı! Artık giriş yapabilirsiniz.");
            secim = prompt("Başka bir işlem seçin: \n1. Giriş (giris)\n2. Kayıt (kayıt)\n3. Çıkış (cik)");
        }
    }
    else {
        console.log("Geçersiz seçim. Lütfen tekrar deneyin.");
        secim = prompt("Başka bir işlem seçin: \n1. Giriş (giris)\n2. Kayıt (kayıt)\n3. Çıkış (cik)");
    }
}

console.log("Program sonlandı.");
