import createStore from "redux-zero";
let work = [
    {
        name: 'FotoLog',
        mode: 'Individual',
        description: 'Una web dedica a la comida Japonesa, donde se da a conocer los más deliciosos pl' +
                'atillos de Sushi',
        tecnologies: ['HTML',' CSS', 'jQuery', 'Programacion Orientada a Objetos', 'Web Storage Api'],
        img: 'img/fotolog.png',
        github: 'https://github.com/Mariley20/comentarios-fotolog-II',
        website: 'https://mariley20.github.io/comentarios-fotolog-II/'
    },
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
        name: 'Save the Koala-II',
        mode: 'Individual',
        description: 'Una web dedica a la comida Japonesa, donde se da a conocer los más deliciosos pl' +
                'atillos de Sushi',
        tecnologies: ['HTML', 'Bootstrap','jQuery'],
        img: 'img/savekoala.png',
        github: 'https://github.com/Mariley20/save-koala-II',
        website: 'https://mariley20.github.io/save-koala-II/'
    },
    {
        name: 'Lab Studio',
        mode: 'Individual',
        description: 'Una web dedica a la comida Japonesa, donde se da a conocer los más deliciosos pl' +
                'atillos de Sushi',
        tecnologies: ['HTML', 'CSS', 'Bootstrap', 'jQuery'],
        img: 'img/labstudio.png',
        github: 'https://github.com/Mariley20/lab-Studio',
        website: 'https://mariley20.github.io/lab-Studio/'
    }, {
        name: 'Lyft Card Bloques',
        mode: 'Colaborativo',
        description: 'Una web dedica a la comida Japonesa, donde se da a conocer los más deliciosos pl' +
                'atillos de Sushi',
        tecnologies: ['HTML', 'Materialize','jQuery'],
        img: 'img/lyft.png',
        github: 'https://github.com/Mariley20/proyecto-final-bloques',
        website: 'https://mariley20.github.io/proyecto-final-bloques/'
    }, {
        name: 'Freelance BootStrap',
        mode: 'Individual',
        description: 'Una web dedica a la comida Japonesa, donde se da a conocer los más deliciosos pl' +
                'atillos de Sushi',
        tecnologies: ['Bootstrap','HTML', 'jQuery'],
        img: 'img/freelance.png',
        github: 'https://github.com/Mariley20/FreeLancer-flexbox',
        website: 'https://mariley20.github.io/FreeLancer-flexbox/'
    },
    {
        name: 'To Do List',
        mode: 'Individual',
        description: 'Una web dedica a la comida Japonesa, donde se da a conocer los más deliciosos pl' +
                'atillos de Sushi',
        tecnologies: ['Bootstrap','HTML', 'jQuery', 'Programación Orientada a Objetos'],
        img: 'img/todolist.png',
        github: 'https://github.com/Mariley20/listaTareasPOO',
        website: 'https://mariley20.github.io/listaTareasPOO/'
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
        name: 'Panda Love',
        mode: 'Individual',
        description: 'Una web dedica a la comida Japonesa, donde se da a conocer los más deliciosos pl' +
                'atillos de Sushi',
        tecnologies: ['CSS','HTML', 'jQuery'],
        img: 'img/pandalove.png',
        github: 'https://github.com/Mariley20/PandaPanda',
        website: 'https://mariley20.github.io/PandaPanda/'
    }, {
        name: 'japanese Food',
        mode: 'Colaborativo',
        description: 'Una web dedica a la comida Japonesa, donde se da a conocer los más deliciosos pl' +
                'atillos de Sushi',
        tecnologies: 'React, js, Redux, HTML, CSS, Bootstrap 3',
        img: 'img/japaneseFood.png',
        github: 'https://github.com/Mariley20/Japanesefood',
        website: 'https://jani-123.github.io/Japanesefood/'
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