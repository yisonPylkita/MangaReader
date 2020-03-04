class MangaTile {
    constructor(name, cover_img) {
        this.name = name;
        this.cover_img = cover_img;
    }

    toString() {
        return `<dev class="MangaTile">
            <dev class="MangaTileCover" style="background-image: url(${this.cover_img})"></div>
            <dev class="MangaTileTitle">${this.name}</div>
        </dev>`;
    }
}

const fav_mangas_mock = [
    new MangaTile('Peerless Refiner', 'https://cdn1.mangafox.online/307/407/737/548/280/peerless-refiner.jpg'),
    new MangaTile('Hidan no Aria', 'https://cdn1.mangafox.online/119/131/088/136/610/2/hidan-no-aria.jpg'),
    new MangaTile('Flower War', 'https://cdn1.mangafox.online/114/720/144/776/314/2/flower-war.jpg'),
]

let renderFavPage = () => {
    const favs = document.getElementById('favorite_manga');
    for (const manga of fav_mangas_mock) {
        favs.innerHTML += manga.toString();
    }
}

window.onload = () => {
    console.log('Hello there');
    renderFavPage();
}