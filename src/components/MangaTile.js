export const MangaTile = ({ name, cover_img }) => (
    <div class="MangaTile">
        <img class="MangaTileCover" src={cover_img}></img>
        <div class="MangaTileTitle">{name}</div>
    </div>
);
