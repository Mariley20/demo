import createStore from "redux-zero";
let work = [
    {
        name: 'Game Planet',
        mode: 'Colaborativo',
        description: 'Una web dedica a la comida Japonesa, donde se da a conocer los más deliciosos pl' +
                'atillos de Sushi',
        tecnologies: ['HTML',' BootStrap', 'jQuery'],
        img: 'img/gameplanet.png',
        github: 'https://github.com/Mariley20/game-planet',
        website: 'https://mariley20.github.io/game-planet/'
    },    
    {
        name: 'App Love',
        mode: 'Individual',
        description: 'Una web dedica a la comida Japonesa, donde se da a conocer los más deliciosos pl' +
                'atillos de Sushi',
        tecnologies: ['Bootstrap','HTML', 'jQuery'],
        img: 'img/applove.png',
        github: 'https://github.com/Mariley20/applove-II',
        website: 'https://mariley20.github.io/applove-II/'
    },
    {
        name: 'Google Maps',
        mode: 'Individual',
        description: 'Una web dedica a la comida Japonesa, donde se da a conocer los más deliciosos pl' +
                'atillos de Sushi',
        tecnologies: ['CSS','HTML', 'jQuery', 'GoogleMaps Api', 'Programación Orientada A Objetos'],
        img: 'img/googlemap.png',
        github: 'https://github.com/Mariley20/easy-vreco',
        website: 'https://mariley20.github.io/easy-vreco/'
    },
     {
        name: 'japanese Food',
        mode: 'Colaborativo',
        description: 'Una web dedica a la comida Japonesa, donde se da a conocer los más deliciosos pl' +
                'atillos de Sushi',
        tecnologies: ['React', 'js', 'Redux', 'HTML', 'CSS', 'Bootstrap', 'Programación por Componentes'],
        img: 'img/japaneseFood.png',
        github: 'https://github.com/Mariley20/Japanesefood',
        website: 'https://jani-123.github.io/Japanesefood/'
    },
    {
        name: 'Trello',
        mode: 'Individual',
        description: 'Una web dedica a la comida Japonesa, donde se da a conocer los más deliciosos pl' +
                'atillos de Sushi',
        tecnologies: ['React', 'js', 'Redux', 'Router', 'HTML', 'CSS', 'Bootstrap', 'Programación por Componentes'],
        img: 'img/japaneseFood.png',
        github: 'https://github.com/Mariley20/trello-firebase-redux/',
        website: 'https://mariley20.github.io/trello-firebase-redux/'
    },
    {
        name: 'Registro de Invitados',
        mode: 'Individual',
        description: 'Una web dedica a la comida Japonesa, donde se da a conocer los más deliciosos pl' +
                'atillos de Sushi',
        tecnologies: ['Reactjs', 'Redux', 'Router', 'HTML', 'Bootstrap', 'Programación por Componentes'],
        img: 'img/invitados.png',
        github: 'https://github.com/Mariley20/Registro-invitados-mvc/',
        website: 'https://mariley20.github.io/Registro-invitados-mvc/'
    },
    {
        name: 'ScoreBoard',
        mode: 'Individual',
        description: 'Una web dedica a la comida Japonesa, donde se da a conocer los más deliciosos pl' +
                'atillos de Sushi',
        tecnologies: ['Reactjs','CSS', 'Redux', 'Router', 'HTML', 'Programación por Componentes'],
        img: 'img/scoreboard.png',
        github: 'https://github.com/Mariley20/Registro-invitados-mvc/',
        website: 'https://mariley20.github.io/Registro-invitados-mvc/'
    },
    {
        name: 'Reserva de Pasajes',
        mode: 'Individual',
        description: 'Una web dedica a la comida Japonesa, donde se da a conocer los más deliciosos pl' +
                'atillos de Sushi',
        tecnologies: ['HTML', 'CSS', 'Reactjs','Redux', 'Router', 'Programación por Componentes'],
        img: 'img/reservapasajes.png',
        github: 'https://github.com/Mariley20/Reserva_de_Pasajes/',
        website: 'https://mariley20.github.io/Reserva_de_Pasajes/'
    }
]

let biografy = [];
const initialState = {
    biografy: biografy,
    work: work,
    selected: 0
};

const store = createStore(initialState);
export default store;