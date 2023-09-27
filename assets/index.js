let games = [
    {
        id : 1, 
        nama : 'Clash of Clans' ,
        logo : './games/downloaded.jpeg' ,
        genre : 'Online multiplayer strategy game',
        item : 'Diamonds',
        harga: 111
    },
    {
        id : 2,
        nama : 'Free Fire' ,
        logo : './games/free fire.png' ,
        genre : 'Battle Royale',
        item : 'Cash',
        harga: 111
    },
    {
        id : 3,
        nama : 'Growtopia' ,
        logo : './games/growtopia.png' ,
        genre : 'Multiplayer online sandbox',
        item : 'Gems',
        harga: 111
    },
    {
        id : 4,
        nama : 'Call of Duty Mobile' ,
        logo : './games/images.jpeg' ,
        genre : 'Battle Royale',
        item : 'Credits',
        harga: 111
    },
    {
        nama : 'Mobile Legends' ,
        logo : './games/ML.png' ,
        genre : 'Multiplayer online battle arena ',
        item : 'Diamonds',
        harga: 111
    },
    {
        id : 4,
        nama : 'State of Survival' ,
        logo : './games/state of survival.png' ,
        genre : 'Online mobile strategy game',
        item : 'Golds',
        harga: 111
    },
    {
        id : 5,
        nama : 'Valorant' ,
        logo : './games/valorant.jpeg' ,
        genre : 'Battle Royale',
        item : 'Credits',
        harga: 111
    },
    {
        id : 6,
        nama : 'Clash Royale' ,
        logo : './games/clashroyale.jpeg' ,
        genre : 'Online multiplayer strategy game',
        item : 'Diamonds',
        harga: 111
    },
    {
        id : 7,
        nama : 'Hogwarts Legacy' ,
        logo : './games/hogwarts.webp' ,
        genre : 'Open world game',
        item : 'Coins',
        harga: 111
    },
    {
        id : 8,
        nama : 'Stumble Guys' ,
        logo : './games/stumble.png' ,
        genre : 'Multiplayer party knockout game ',
        item : 'Gems',
        harga: 111
    },
    {
        id : 9,
        nama : 'PUBG Mobile' ,
        logo : './games/pubg.png' ,
        genre : 'Battle Royale',
        item : 'Credits',
        harga: 111
    },
    {
        id : 10,
        nama : 'Hay Day' ,
        logo : './games/hay day.jpeg' ,
        genre : 'Online multiplayer strategy game',
        item : 'Diamonds',
        harga: 111
    },
    {
        id : 11,
        nama : 'Speed Drifters' ,
        logo : './games/speed drifters.jpeg' ,
        genre : 'Online racing game',
        item : 'Diamonds',
        harga: 111
    },
    {
        id : 12,
        nama : 'Brawl Stars' ,
        logo : './games/brawl.jpeg' ,
        genre : 'Multiplayer online battle arena',
        item : 'Gems',
        harga: 111
    },
]


// Contoh: Memainkan audio


// Contoh: Mengubah volume
document.getElementById("loginPageAudio").volume = 0.08; 


let users = [
    {
        name: 'Admin Kel 4',
        username: 'admin',
        email: 'admin@gmail.com',
        password: 'Admin123'
    }
];



//Fungsi Login
function login(){
    let emailInput = document.getElementById('email').value;
    let passwordInput = document.getElementById('password').value;

    Swal.fire({
        title: 'Mohon Tunggu',
        showConfirmButton: false,
        allowOutsideClick: false,
        willOpen: () => {
          Swal.showLoading()
        }
    });

    for (const user of users) {
        const {name, username, email, password} = user;
        
        if (password === passwordInput && email === emailInput) {
            const user = {
                name,
                username,
                email,
            };

            let users = JSON.parse(localStorage.getItem('users')) || [];
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));

            Swal.close();
    
            Swal.fire({
                title: 'Berhasil!',
                text: "Berhasil masuk, selamat datang!",
                icon: 'success',
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Ok',
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = '../pages/index.html';
                }
            })

            break;
        }else{
            Swal.close();
    
            Swal.fire({
                title: 'Gagal!',
                text: "Email atau password salah!",
                icon: 'error',
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Ok',
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = '../pages/login.html';
                }
            });
            break;
        }
    }



    //Tambahan ketika udah login maka masukkan informasi email ke dalam localStorage
}