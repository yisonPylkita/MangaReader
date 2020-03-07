import { MangaTile } from '../components/MangaTile';

const fav_mangas_mock = [
    ['Peerless Refiner', 'https://cdn1.mangafox.online/307/407/737/548/280/peerless-refiner.jpg'],
    ['Hidan no Aria', 'https://cdn1.mangafox.online/119/131/088/136/610/2/hidan-no-aria.jpg'],
    ['Flower War', 'https://cdn1.mangafox.online/114/720/144/776/314/2/flower-war.jpg'],
    ['Peerless Refiner', 'https://cdn1.mangafox.online/307/407/737/548/280/peerless-refiner.jpg'],
    ['Hidan no Aria', 'https://cdn1.mangafox.online/119/131/088/136/610/2/hidan-no-aria.jpg'],
    ['Flower War', 'https://cdn1.mangafox.online/114/720/144/776/314/2/flower-war.jpg'],
    ['Peerless Refiner', 'https://cdn1.mangafox.online/307/407/737/548/280/peerless-refiner.jpg'],
    ['Hidan no Aria', 'https://cdn1.mangafox.online/119/131/088/136/610/2/hidan-no-aria.jpg'],
    ['Flower War', 'https://cdn1.mangafox.online/114/720/144/776/314/2/flower-war.jpg'],
    ['Peerless Refiner', 'https://cdn1.mangafox.online/307/407/737/548/280/peerless-refiner.jpg'],
    ['Hidan no Aria', 'https://cdn1.mangafox.online/119/131/088/136/610/2/hidan-no-aria.jpg'],
    ['Flower War', 'https://cdn1.mangafox.online/114/720/144/776/314/2/flower-war.jpg'],
    ['Peerless Refiner', 'https://cdn1.mangafox.online/307/407/737/548/280/peerless-refiner.jpg'],
    ['Hidan no Aria', 'https://cdn1.mangafox.online/119/131/088/136/610/2/hidan-no-aria.jpg'],
    ['Flower War', 'https://cdn1.mangafox.online/114/720/144/776/314/2/flower-war.jpg'],
    ['Peerless Refiner', 'https://cdn1.mangafox.online/307/407/737/548/280/peerless-refiner.jpg'],
    ['Hidan no Aria', 'https://cdn1.mangafox.online/119/131/088/136/610/2/hidan-no-aria.jpg'],
    ['Flower War', 'https://cdn1.mangafox.online/114/720/144/776/314/2/flower-war.jpg'],
    ['Peerless Refiner', 'https://cdn1.mangafox.online/307/407/737/548/280/peerless-refiner.jpg'],
    ['Hidan no Aria', 'https://cdn1.mangafox.online/119/131/088/136/610/2/hidan-no-aria.jpg'],
    ['Flower War', 'https://cdn1.mangafox.online/114/720/144/776/314/2/flower-war.jpg'],
    ['Peerless Refiner', 'https://cdn1.mangafox.online/307/407/737/548/280/peerless-refiner.jpg'],
    ['Hidan no Aria', 'https://cdn1.mangafox.online/119/131/088/136/610/2/hidan-no-aria.jpg'],
    ['Flower War', 'https://cdn1.mangafox.online/114/720/144/776/314/2/flower-war.jpg'],
];

export const Favurites = () => (
    <div id="favorite_manga">
        {
            fav_mangas_mock.map((manga_info) => {
                return <MangaTile name={manga_info[0]} cover_img={manga_info[1]} />
            })
        }
    </div>
);
