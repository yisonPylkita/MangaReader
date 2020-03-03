class MangaTile {
    constructor(name, cover_img) {
        this.name = name;
        this.cover_img = cover_img;
    }
}

const fav_mangas_mock = [
    new MangaTile('Peerless Refiner', 'https://cdn1.mangafox.online/307/407/737/548/280/peerless-refiner.jpg'),
    new MangaTile('Hidan no Aria', 'https://cdn1.mangafox.online/119/131/088/136/610/2/hidan-no-aria.jpg'),
    new MangaTile('Ominous Liar', ''),
    new MangaTile('Peerless Refiner', 'https://cdn1.mangafox.online/307/407/737/548/280/peerless-refiner.jpg'),
    new MangaTile('Peerless Refiner', 'https://cdn1.mangafox.online/307/407/737/548/280/peerless-refiner.jpg'),
]

let render_fav_page = () => {

}

window.onload = () => {
    console.log('Helo there');
}