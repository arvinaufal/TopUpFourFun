

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

function showGames(){
    let bungkus = document.getElementById('section-games-promo');
    let games = JSON.parse(localStorage.getItem('games'));


    let content = ""; // Inisialisasi variabel string untuk menyimpan konten
   
    for (const game of games) {
        const {id, nama, logo, genre, item, harga} = game;
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
                        <h5 class="mt-1" style="font-weight: bold;">Rp ${harga} <span style="font-size: 12px; color: #989898;">/10 diamonds</span> </h5>
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




window.onload = function() {
    createGamesTable();
    
}
