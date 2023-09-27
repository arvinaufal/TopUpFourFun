// Contoh: Mengubah volume
document.getElementById("loginPageAudio").volume = 0.08; 
function createAdminUser() {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let adminExists = users.some(user => user.email === 'admin@gmail.com');

    if (!adminExists) {
        let user = {
            name: 'Admin Kel 4',
            username: 'admin',
            email: 'admin@gmail.com',
            password: 'Admin123'
        };
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
    }
}

//Fungsi Login
function login(){
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let emailInput = document.getElementById('email-login').value;
    let passwordInput = document.getElementById('password-login').value;

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


            let loginUsers = JSON.parse(localStorage.getItem('loginUsers')) || [];
            let userExists = loginUsers.some(user => user.email === emailInput);
            // console.log(loginUsers);
            // console.log(userExists);

            if (!userExists) {
                loginUsers.push(user);
                localStorage.setItem('loginUsers', JSON.stringify(loginUsers));
            }

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


function register(){
    let namaInput = document.getElementById('nama-register').value;
    let usernameInput = document.getElementById('username-register').value;
    let emailInput = document.getElementById('email-register').value;
    let passwordInput = document.getElementById('password-register').value;
    let passwordKonfirmasiInput = document.getElementById('password-register-konfirmasi').value;

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
        
        if (username === usernameInput || email === emailInput) {
            Swal.close();
    
            Swal.fire({
                title: 'Gagal!',
                text: "Email atau username sudah terdaftar!",
                icon: 'error',
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Ok',
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = '../pages/register.html';
                }
            });
            break;


           
        }else{

            if (passwordInput !== passwordKonfirmasiInput) {
                Swal.close();
    
            Swal.fire({
                title: 'Gagal!',
                text: "Password dan konfirmasi password belum sesuai!",
                icon: 'error',
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Ok',
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = '../pages/register.html';
                }
            });
            break;

            }else{

                Swal.close();
    
                Swal.fire({
                    title: 'Berhasil!',
                    text: "Berhasil mendaftar, silakan login!",
                    icon: 'success',
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
                })
    
                break;

            }
           
        }
    }



    //Tambahan ketika udah login maka masukkan informasi email ke dalam localStorage
}

// Panggil fungsi ini saat halaman dimuat
window.onload = function() {
    createAdminUser();
}