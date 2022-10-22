
const menuItems: string[] = [
    `${process.env.PUBLIC_URL}/imgs/img1.png`,
    `${process.env.PUBLIC_URL}/imgs/img2.png`,
    `${process.env.PUBLIC_URL}/imgs/img3.png`,
    `${process.env.PUBLIC_URL}/imgs/img4.png`,
];

interface SelectItems {
    img: any;
    adress: string
}

const weapon: SelectItems = {
        img:" hoge",
        adress: "hogu"
}

console.log(weapon.adress);

export const ListItems = () => {

    const len = menuItems.length;
    const items: any[] = [];

    for(let i=0; i<len; i++){
        items.push(<li className="ListItems"><img src={`${menuItems[i]}`} alt="" /></li>);
    }

    return <ul className="SellectBox">{items}</ul>;
};