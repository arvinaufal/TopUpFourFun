function createCategoriesTable() {
    let gamesCategory = JSON.parse(localStorage.getItem('gamesCategory'));

    if (!gamesCategory) {
        gamesCategory = [];
    }

    if (gamesCategory.length < 1) {
        let gamesCategoryLists = [
            {
                id : 1, 
                nama : 'Battle Royale' ,
                logo : '../assets/photos/game-category/br.png' ,
            },
            {
                id : 2, 
                nama : 'Multiplayer Online Battle Arena' ,
                logo : '../assets/photos/game-category/moba.png' ,
            },
            {
                id : 3, 
                nama : 'Multiplayer Online Sandbox' ,
                logo : '../assets/photos/game-category/mos.png' ,
            },
            {
                id : 4, 
                nama : 'Multiplayer Party Knockout Game' ,
                logo : '../assets/photos/game-category/mpkg.png' ,
            },
            {
                id : 5, 
                nama : 'Online Multiplayer Strategy Game' ,
                logo : '../assets/photos/game-category/omsg.png' ,
            },
            {
                id : 6, 
                nama : 'Open World Game' ,
                logo : '../assets/photos/game-category/owg.png' ,
            },
           
        ]

        for (const gc of gamesCategoryLists) {
            gamesCategory.push(gc);
        }
        localStorage.setItem('gamesCategory', JSON.stringify(gamesCategory));
    }

    showGamesCategory();
}
function createGamesTable() {
    let games = JSON.parse(localStorage.getItem('games'));

    if (!games) {
        games = [];
    }

    if (games.length < 1) {
        let gameLists = [
            {
                id : 0, 
                nama : 'Genshin Impact' ,
                logo : '../assets/photos/games/genshin.jpg' ,
                genre : 'Open World',
                item : 'Diamonds',
                harga: 3000,
            },
            {
                id : 1, 
                nama : 'Clash of Clans' ,
                logo : '../assets/photos/games/coc.png' ,
                genre : 'Online multiplayer strategy game',
                item : 'Diamonds',
                harga: 10000,
            },
            {
                id : 2,
                nama : 'Free Fire' ,
                logo : '../assets/photos/games/free fire.png' ,
                genre : 'Battle Royale',
                item : 'Cash',
                harga: 12000
            },
            {
                id : 3,
                nama : 'Growtopia' ,
                logo : '../assets/photos/games/growtopia.png' ,
                genre : 'Multiplayer online sandbox',
                item : 'Gems',
                harga: 4000
            },
            // {
            //     id : 4,
            //     nama : 'Call of Duty Mobile' ,
            //     logo : '../assets/photos/games/cod.jpg' ,
            //     genre : 'Battle Royale',
            //     item : 'Credits',
            //     harga: 111
            // },
            {
                nama : 'Mobile Legends' ,
                logo : '../assets/photos/games/ML.png' ,
                genre : 'Multiplayer online battle arena ',
                item : 'Diamonds',
                harga: 8000
            },
            {
                id : 4,
                nama : 'State of Survival' ,
                logo : '../assets/photos/games/state of survival.png' ,
                genre : 'Online mobile strategy game',
                item : 'Golds',
                harga: 3000
            },
            // {
            //     id : 5,
            //     nama : 'Valorant' ,
            //     logo : '../assets/photos/games/valoran.jpg' ,
            //     genre : 'Battle Royale',
            //     item : 'Credits',
            //     harga: 111
            // },
            {
                id : 6,
                nama : 'Clash Royale' ,
                logo : '../assets/photos/games/clashroyale.jpeg' ,
                genre : 'Online multiplayer strategy game',
                item : 'Diamonds',
                harga: 6000
            },
            {
                id : 7,
                nama : 'Hogwarts Legacy' ,
                logo : '../assets/photos/games/hogwarts.webp' ,
                genre : 'Open world game',
                item : 'Coins',
                harga: 111
            },
            {
                id : 8,
                nama : 'Stumble Guys' ,
                logo : '../assets/photos/games/stumble.png' ,
                genre : 'Multiplayer party knockout game ',
                item : 'Gems',
                harga: 6700
            },
            {
                id : 9,
                nama : 'PUBG Mobile' ,
                logo : '../assets/photos/games/pubg.png' ,
                genre : 'Battle Royale',
                item : 'Credits',
                harga: 6500
            },
            {
                id : 10,
                nama : 'Hay Day' ,
                logo : '../assets/photos/games/hay day.jpeg' ,
                genre : 'Online multiplayer strategy game',
                item : 'Diamonds',
                harga: 7900
            },
            // {
            //     id : 11,
            //     nama : 'Speed Drifters' ,
            //     logo : '../assets/photos/games/speed drifters.jpeg' ,
            //     genre : 'Online racing game',
            //     item : 'Diamonds',
            //     harga: 111
            // },
            {
                id : 12,
                nama : 'Brawl Stars' ,
                logo : '../assets/photos/games/brawl.jpeg' ,
                genre : 'Multiplayer online battle arena',
                item : 'Gems',
                harga: 4000
            },
        ]

        for (const g of gameLists) {
            games.push(g);
        }
        localStorage.setItem('games', JSON.stringify(games));
    }

    showGames();
}

function createTestimonialsTable() {
    let testimonials = JSON.parse(localStorage.getItem('testimonials'));

    if (!testimonials) {
        testimonials = [];
    }

    if (testimonials.length < 1) {
        let testimonialsLists = [
            {
                id : 1, 
                nama : 'Andi' ,
                status : 'ProGamer' ,
                testimoni : 'Saya senang, saya senang' ,
            }, 
            {
                id : 2, 
                nama : 'Dina' ,
                status : 'Pro Gramer' ,
                testimoni : 'Saya senang juga, saya senang juga' ,
            },
            {
                id : 3, 
                nama : 'Doni' ,
                status : 'Programmer' ,
                testimoni : 'Saya kayaknya senang juga, saya kayaknya senang juga' ,
            },
           
           
        ]

        for (const gc of testimonialsLists) {
            testimonials.push(gc);
        }
        localStorage.setItem('testimonials', JSON.stringify(testimonials));
    }

    showTestimonials();
}

function showGames(){
    let bungkus = document.getElementById('section-games-promo');
    let games = JSON.parse(localStorage.getItem('games'));


    let content = ""; // Inisialisasi variabel string untuk menyimpan konten
   
    for (const game of games) {
        const {id, nama, logo, genre, item, harga} = game;
        let rupiah = formatRupiah(harga);
        content += `
            <div class="swiper-slide position-relative card-holder">
                <div class="card-arvi">
                    <img src="${logo}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h6 class="card-title">${nama}</h6>
                        <div class="d-flex">
                            <span class="badge badge-pill discount-precentage">${genre}</span>
                        </div>
                        <p class="mt-1 mb-0" style="font-size: 14px;">Start From:</p>
                        <h5 class="mt-1" style="font-weight: bold;">${rupiah} <span style="font-size: 12px; color: #989898;">/10 diamonds</span> </h5>
                        <div class="d-flex align-items-center">
                            <img class="star-rating" src="../assets/photos/icon-bintang.png" alt="">
                            <img class="star-rating" src="../assets/photos/icon-bintang.png" alt="">
                            <img class="star-rating" src="../assets/photos/icon-bintang.png" alt="">
                            <img class="star-rating" src="../assets/photos/icon-bintang.png" alt="">
                            <img class="star-rating" src="../assets/photos/icon-bintang.png" alt="">
                            <span style="color: #989898;">(972)</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    bungkus.innerHTML = content; // Menetapkan konten baru ke elemen
}

function showGamesCategory(){
    let bungkus = document.getElementById('section-gamecategory-lists');
    let gamesCategory = JSON.parse(localStorage.getItem('gamesCategory'));


    let content = ""; // Inisialisasi variabel string untuk menyimpan konten
   
    for (const gc of gamesCategory) {
        const {id, nama, logo } = gc;
        content += `
                <div class="col-lg-4 col-md-6 mt-4 mt-md-0 mb-4">
                    <a href="#" class="game-category-link">
                        <div class="card-service d-flex align-items-center">
                            <img src="${logo}" class="img-fluid img-section-gamelists" alt="" />
                            <div class="detail">
                                <h5>${nama}</h5>
                            </div>
                        </div>
                    </a>
                </div>
        `;
    }

    bungkus.innerHTML = content; // Menetapkan konten baru ke elemen
}

function showTestimonials(){
    let bungkus = document.getElementById('section-testimonials');
    let testimonials = JSON.parse(localStorage.getItem('testimonials'));


    let content = ""; // Inisialisasi variabel string untuk menyimpan konten
   
    for (const gc of testimonials) {
        const {id, nama, status, testimoni } = gc;
        content += `
                <div class="swiper-slide card text-center py-2" style="border-radius: 20px;">
                        
                    <p class="name mb-0 mt-2 fw-bold">${nama}</p>
                    <p class="address">${status}</p>
                    <div class="card-body px-5 py-4 position-relative mx-auto">
                    <i
                        class="bx bxs-quote-left position-absolute top-0 start-0"
                    ></i>
                    <i
                        class="bx bxs-quote-right position-absolute bottom-0 end-0"
                    ></i>
                    <p class="testi-text">
                        ${testimoni}
                    </p>
                    </div>
                </div>
        `;
    }

    bungkus.innerHTML = content; // Menetapkan konten baru ke elemen
}


function showUserLoginStatus(){
    let bungkus = document.getElementById('user-status');
    let userLogin = JSON.parse(localStorage.getItem('loginUsers'));
    console.log(userLogin);
    if (userLogin !== null) {
        let user = userLogin[userLogin.length - 1].name
        bungkus.innerHTML = `

        <i class="bx bxs-user" style="color: white; font-size: large;"> ${user}</i>
        <div class="btn btn-primary btn-sm" onClick="logout()" style="border-radius: 20px; width: 80px; font-weight: bold; font-size: medium;">Logout</div>
        `; // Menetapkan konten baru ke elemen
    }else{
        bungkus.innerHTML = `
        
            <div class="btn btn-primary btn-sm" style="border-radius: 20px; width: 80px; font-weight: bold; font-size: medium;"><a href="login.html" class="auth-link">Login</a></div>
            <div class="btn btn-success btn-sm" style="border-radius: 20px; width: 80px; font-weight: bold; font-size: medium;"><a href="register.html" class="auth-link">Daftar</a></div>
        `;
    }
}

function logout(){
    console.log('tes');
}






window.onload = function() {
    createGamesTable();
    createCategoriesTable();
    createTestimonialsTable();
    showUserLoginStatus();
}
