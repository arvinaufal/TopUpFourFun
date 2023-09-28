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
function getToken(){
    let cart = JSON.parse(localStorage.getItem('cart'));
    document.getElementById('token').value = cart.token;
}


function crudPlayerId(playerId) {
    Swal.fire({
        title: 'Form Detail User',
        html: `
            <input type="text" id="usernameSA" class="swal2-input" placeholder="UserId" value="${playerId}"> 
            <input type="number" id="jmlDiamondSA" class="swal2-input" placeholder="Jumlah Diamond">
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
            const username = Swal.getPopup().querySelector('#usernameSA').value;
            const jmlDiamond = Swal.getPopup().querySelector('#jmlDiamondSA').value;

            // Panggil fungsi untuk meng-handle update data
            handleUpdate(username, jmlDiamond);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            // Panggil fungsi untuk meng-handle delete data
            handleDelete();
        }
    });
}

function handleUpdate(username, jmlDiamond) {
    // Lakukan apa yang perlu dilakukan untuk memproses update
    console.log('Update data:');
    console.log(`Username: ${username}, Jumlah Diamond: ${jmlDiamond}`);
}

function handleDelete() {
    // Lakukan apa yang perlu dilakukan untuk memproses delete
    console.log('Delete data');
}


function showPlayerId() {
    let playerIds = JSON.parse(localStorage.getItem('cart'));
    playerIds = playerIds.playerId;

    let bungkusPlayerId = document.getElementById('listPlayer');
    let temp = '';
    for (const pI of playerIds) {
        temp += 
        `
            <div class="btn btn-success" onclick="crudPlayerId('${pI}')">
                ${pI}
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
                text: "Apakah Anda yakin ingin menambahkan user id " + userId + "?",
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
                            text: "Player ID sudah ditambahkan sebelumnya!",
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

            
                        cartData.playerId.push(userId);
                        localStorage.setItem('cart', JSON.stringify(cartData));


                        Swal.fire({
                            title: 'Berhasil!',
                            text: "Berhasil menambahkan player Id!",
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
}
