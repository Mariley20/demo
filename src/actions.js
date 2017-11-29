import store from "./store";
export const selectionWork = (index) => {
    store.setState({selected: index})
}
export const  myFunction = () => {
    var element = document.getElementById("menu");
element
    .classList
    .toggle("active");
}