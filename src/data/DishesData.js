export default function Dishes(){
    const dishes_data = [
        {
            title: 'Frango Yin Yang',
            description: 'Um pouco de batata, um pouco de salada',
            img:"./img/frango_yin_yang 1.png",
            price: '14,90',
            isSelected: false
        },
        {
            title: 'Strogonoff vegetariano',
            description: 'Strogonoff de cogumelos',
            img:"./img/strogonoff.jpeg",
            price: '18,90',
            isSelected: false
        },
        {
            title: 'Hamburguer',
            description: 'Acompanha batatas e refri',
            img:"./img/Hamburguer.jpg",
            price: '25,50',
            isSelected: false
        },
        {
            title: 'Lasanha',
            description: 'Lasanha a bolonhesa',
            img: "./img/lasanha.jpg",
            price: '20,00',
            isSelected: false
        },
        {
            title: 'Feijoada',
            description: 'Acompanha arroz e farofa',
            img:"./img/feijoada.jpg",
            price: '21,50',
            isSelected: false
        }, 
    ];
    return dishes_data;
}