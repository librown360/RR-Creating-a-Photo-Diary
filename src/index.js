import { koalas } from './koalas'
import { renderKoalaList } from './koalalist'
import { renderActiveKoala } from './activekoala'

export let activeKoala = null

// Changes the active koala, then re-renders the page to display that koala
export let selectKoala = koala => {
    activeKoala = koala
    render()
}

// Called once when the page loads, and again every time a koala is selected
let render = () => {
    let oldPage=  document.querySelector('.koala-container')
    let newPage;
    if(activeKoala){
        newPage = renderActiveKoala(activeKoala)
    } else {
        newPage = renderKoalaList(koalas)
    }
    newPage.classList.add('koala-container')
    oldPage.replaceWith(newPage)
}

// Render the page after all functions are defined
render()
