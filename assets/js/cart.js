// document.addEventListener('DOMContentLoaded', function() {
    // function testess() {
    //     console.log('ya');
    //     let userId = document.getElementById('user_id');
    //     Swal.fire({
    //         title: 'Yakin?',
    //         text: "Apakah Anda yakin ingin menambahkan user id " + userId.value + "?",
    //         icon: 'question',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         confirmButtonText: 'Ok',
    //         cancelButtonText: 'Tidak',
    //         allowOutsideClick: false,
    //         allowEscapeKey: false,
    //         allowEnterKey: false,
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             // localStorage.removeItem('loginUsers');
    //             // window.location.href = '../pages/index.html';
    //         }
    //     });
    // }

    // Export fungsi testess jika perlu
//     window.testess = testess;
// });
function getBannerDetailGame(){
    let cart = JSON.parse(localStorage.getItem('cart'));
    let gameId = cart.gameId;
    let games = JSON.parse(localStorage.getItem('games'));
    let banner = null;
    let name = null;
    for (const i of games) {
        if (i.id === gameId) {
            nama = i.nama;
            deskripsi = i.deskripsi;
            banner = i.banner;
        }
    }

    let bungkusBanner = document.getElementById('banner-detail-img');
    let bungkusDesc = document.getElementById('game-detail-desc');
    bungkusBanner.innerHTML = `<img src="${banner}" alt="TopUpFourFun Banner" class="img-fluid" style="border-radius: 20px; box-shadow: 4px 6px 8px rgba(0,0,0,0.5);">`;
    bungkusDesc.innerHTML = 
        `
            <h2 style="color: white;"><b>${nama}</b></h2>
            <p class="text-justify mt-4" style="color: white;">
                ${deskripsi}
            </p>
            
        `;

        // <p class="text-justify">
            //     Top up ML Diamond, Twilight Pass, dan Weekly Pass hanya dalam hitungan detik! Cukup masukkan User ID dan Zone ID MLBB Anda, pilih jumlah Diamond yang Anda inginkan, selesaikan pembayaran, dan Diamond akan secara langsung ditambahkan ke akun Mobile Legends Anda.
            // </p>
            // <p class="text-justify">
            //     Bayarlah menggunakan Codacash, GoPay, ShopeePay, Dana, OVO, LinkAja, Telkomsel, Indosat, Tri, XL, Bank Transfer, QRIS, Indomaret, Alfamart, Kredivo, Kartu Kredit, dan Doku Wallet.
            // </p>
            // <p class="text-justify">
            //     Harga sudah termasuk PPN. Informasi tambahan, untuk transaksi menggunakan Telkomsel akan dikenakan biaya tambahan pajak.
            // </p>
            // <p class="text-justify warning">
            //     PERINGATAN: Harga sudah termasuk PPN. Informasi tambahan, untuk transaksi menggunakan Telkomsel akan dikenakan biaya tambahan pajak.
            // </p>
    


}
function getToken(){
    let cart = JSON.parse(localStorage.getItem('cart'));
    document.getElementById('token').value = cart.token;
}


function crudPlayerId(playerId) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    let gameId = cart.gameId;
    let games = JSON.parse(localStorage.getItem('games'));
    let item = null;
    for (const i of games) {
     
        if (i.id == gameId) {
            item = i.item;
            break;
        }
    }

    let jmlDiamond = 0;
    for (let i = 0; i < cart.playerId.length; i++) {
        if (cart.playerId[i].userId === playerId) {
            jmlDiamond = cart.playerId[i].jmlDm
            break;
        }
    }
    Swal.fire({
        title: 'Form Detail User',
        html: `
            <input type="text" id="usernameOld" class="swal2-input" placeholder="UserId" value="${playerId}" hidden>
            <div>
                <label for="usernameSA">User ID</label>
                <input type="text" id="usernameSA" class="swal2-input" placeholder="UserId" value="${playerId}">
            </div>
            <div>
                <label for="jmlDiamondSA">Jml ${item}</label>
                <input type="number" id="jmlDiamondSA" class="swal2-input" placeholder="Jumlah Diamond" value="${jmlDiamond}" min="0">
            </div>
        `,

    

        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: 'Update data',
        cancelButtonText: 'Delete data',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        focusConfirm: false,
    }).then((result) => {
        if (result.isConfirmed) {
            const usernameOld = Swal.getPopup().querySelector('#usernameOld').value;
            const username = Swal.getPopup().querySelector('#usernameSA').value;
            const jmlDiamond = Swal.getPopup().querySelector('#jmlDiamondSA').value;

            // Panggil fungsi untuk meng-handle update data
            handleUpdate(username, usernameOld, jmlDiamond, item);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            // Panggil fungsi untuk meng-handle delete data
            handleDelete(playerId);
        }
    });
}

function handleUpdate(username, usernameOld, jmlDiamond, item) {
    let countUsername = (username+"").length;

    if(jmlDiamond*1 < 0){
        Swal.fire({
            title: 'Gagal!',
            text: "Jumlah "+ item +" tidak boleh negatif!",
            icon: 'error',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
        });

        return;
    }

    if(countUsername < 9){
        Swal.fire({
            title: 'Gagal!',
            text: "User ID minimal 9 digit!",
            icon: 'error',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
        });

    }else if(countUsername > 10){

        Swal.fire({
            title: 'Gagal!',
            text: "User ID maksimal 10 digit!",
            icon: 'error',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
        });

    }else{

        let cart = JSON.parse(localStorage.getItem('cart'));
        for (let i = 0; i < cart.playerId.length; i++) {
            if (cart.playerId[i].userId === usernameOld) {
                cart.playerId[i].userId = username;
    
                if (jmlDiamond) {
                    cart.playerId[i].jmlDm = jmlDiamond*1;
                }
                break;
            }
        }
    
        localStorage.setItem('cart', JSON.stringify(cart));
        showPlayerId();


        Swal.fire({
            title: 'Berhasil!',
            text: "Berhasil mengupdate data User!",
            icon: 'success',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
        });

    }



}



function handleDelete(playerId) {
    let cart = JSON.parse(localStorage.getItem('cart'));

    // Temukan indeks dari playerId yang ingin dihapus
    let indexToRemove = -1;
    for (let i = 0; i < cart.playerId.length; i++) {
        if (cart.playerId[i].userId === playerId) {
            indexToRemove = i;
            break;
        }
    }

    if (indexToRemove !== -1) {
        // Hapus elemen dari array
        cart.playerId.splice(indexToRemove, 1);

        // Perbarui localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Tampilkan ulang daftar player ID
        showPlayerId();

        // Tampilkan pesan sukses
        Swal.fire({
            title: 'Berhasil!',
            text: "Berhasil menghapus data User!",
            icon: 'success',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
        });
    } else {
        // Jika playerId tidak ditemukan
        Swal.fire({
            title: 'Gagal!',
            text: "User ID tidak ditemukan!",
            icon: 'error',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
        });
    }
}



function showPlayerId() {
    let playerIds = JSON.parse(localStorage.getItem('cart'));
    playerIds = playerIds.playerId;

    let bungkusPlayerId = document.getElementById('listPlayer');
    let temp = '';
    for (const pI of playerIds) {
        temp += 
        `
            <div class="btn btn-success" onclick="crudPlayerId('${pI.userId}')">
                ${pI.userId}
            </div> 
        `;
    }

    bungkusPlayerId.innerHTML = temp;
}



function showUserLoginStatus(){
    let bungkus = document.getElementById('user-status');
    let userLogin = JSON.parse(localStorage.getItem('loginUsers'));
    if (userLogin !== null) {
        let user = userLogin[userLogin.length - 1].name
        bungkus.innerHTML = `

        <i class="bx bxs-user" style="color: white; font-size: large; margin: 20px;"> ${user}</i>
        <div class="btn btn-primary btn-sm" onClick="logout()" style="border-radius: 20px; width: 80px; font-weight: bold; font-size: medium;">Logout</div>
        `; // Menetapkan konten baru ke elemen
    }else{
        bungkus.innerHTML = `
        
            <div class="btn btn-primary btn-sm" style="border-radius: 20px; width: 80px; font-weight: bold; font-size: medium;"><a href="login.html" class="auth-link">Login</a></div>
            <div class="btn btn-success btn-sm" style="border-radius: 20px; width: 80px; font-weight: bold; font-size: medium;"><a href="register.html" class="auth-link">Daftar</a></div>
        `;
    }
}

    function tambahPlayerId() {
    
        let userId = document.getElementById('user_id').value;
        let countUserId = (userId + "");
        countUserId = countUserId.length;
        
    
        if (!userId) {
            Swal.fire({
                title: 'Gagal!',
                text: "Silakan isi User ID terlebih dahulu!",
                icon: 'error',
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Ok',
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
            });
        }else if(countUserId < 9){
            Swal.fire({
                title: 'Gagal!',
                text: "User ID minimal 9 digit!",
                icon: 'error',
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Ok',
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
            });

        }else if(countUserId > 10){

            Swal.fire({
                title: 'Gagal!',
                text: "User ID maksimal 10 digit!",
                icon: 'error',
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Ok',
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
            });

        }else{

            Swal.fire({
                title: 'Yakin?',
                text: "Apakah Anda yakin ingin menambahkan User ID " + userId + "?",
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Ok',
                cancelButtonText: 'Tidak',
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
            }).then((result) => {
                if (result.isConfirmed) {
                    let cartData = JSON.parse(localStorage.getItem('cart'));
                    let userIdLd = cartData.playerId;
                    let exist = false;
                    if (userIdLd.length > 0) {
            
                        
                        for (const i of userIdLd) {
                            if(i === userId){
                                exist = true;
                            }
                        }
                    }


                    if (exist) {
                        
                        Swal.fire({
                            title: 'Gagal!',
                            text: "User ID sudah ditambahkan sebelumnya!",
                            icon: 'error',
                            showCancelButton: false,
                            confirmButtonColor: '#3085d6',
                            confirmButtonText: 'Ok',
                            allowOutsideClick: false,
                            allowEscapeKey: false,
                            allowEnterKey: false,
                        });

                        document.getElementById('user_id').value = null;
                        showPlayerId();
                     
                    }else{

                        cartData.playerId.push({userId: userId, jmlDm: 0});
                        localStorage.setItem('cart', JSON.stringify(cartData));

                        Swal.fire({
                            title: 'Berhasil!',
                            text: "Berhasil menambahkan User ID!",
                            icon: 'success',
                            showCancelButton: false,
                            confirmButtonColor: '#3085d6',
                            confirmButtonText: 'Ok',
                            allowOutsideClick: false,
                            allowEscapeKey: false,
                            allowEnterKey: false,
                        });

                        document.getElementById('user_id').value = null;
                        showPlayerId();
                    }

         
             
                }
            });
        }
    }


window.onload = function() {
    // showUserLoginStatus();
    getToken();
    showPlayerId();
    getBannerDetailGame();
}
