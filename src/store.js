import createStore from "redux-zero";
let js = [
    {
        name: 'FotoLog',
        mode: 'Individual',
        description: 'Una web dedica a la comida Japonesa, donde se da a conocer los más deliciosos pl' +
                'atillos de Sushi',
        tecnologies: ['HTML',' CSS', 'jQuery', 'Programacion Orientada a Objetos', 'Web Storage Api'],
        img: 'img/fotolog.png',
        github: ['https://github.com/Mariley20/comentarios-fotolog-II', 'https://github.com/Mariley20/comentarios-fotolog/'],
        website: ['https://mariley20.github.io/comentarios-fotolog-II/', 'https://mariley20.github.io/comentarios-fotolog/']
    }
]
let work = [
    {
        name: 'japanese Food',
        mode: 'Colaborativo',
        description: 'Una web dedica a la comida Japonesa, donde se da a conocer los más deliciosos pl' +
                'atillos de Sushi',
        tecnologies: 'React, js, Redux, HTML, CSS, Bootstrap 3',
        img: 'img/japaneseFood.png',
        github: 'https://github.com/Mariley20/Japanesefood',
        website: 'https://jani-123.github.io/Japanesefood/'
    }, {
        name: 'japanese Food',
        mode: 'Colaborativo',
        description: 'Una web dedica a la comida Japonesa, donde se da a conocer los más deliciosos pl' +
                'atillos de Sushi',
        tecnologies: 'React, js, Redux, HTML, CSS, Bootstrap 3',
        img: 'img/japaneseFood.png',
        github: 'https://github.com/Mariley20/Japanesefood',
        website: 'https://jani-123.github.io/Japanesefood/'
    }, {
        name: 'japanese Food',
        mode: 'Colaborativo',
        description: 'Una web dedica a la comida Japonesa, donde se da a conocer los más deliciosos pl' +
                'atillos de Sushi',
        tecnologies: 'React, js, Redux, HTML, CSS, Bootstrap 3',
        img: 'img/japaneseFood.png',
        github: 'https://github.com/Mariley20/Japanesefood',
        website: 'https://jani-123.github.io/Japanesefood/'
    }, {
        name: 'japanese Food',
        mode: 'Colaborativo',
        description: 'Una web dedica a la comida Japonesa, donde se da a conocer los más deliciosos pl' +
                'atillos de Sushi',
        tecnologies: 'React, js, Redux, HTML, CSS, Bootstrap 3',
        img: 'img/japaneseFood.png',
        github: 'https://github.com/Mariley20/Japanesefood',
        website: 'https://jani-123.github.io/Japanesefood/'
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