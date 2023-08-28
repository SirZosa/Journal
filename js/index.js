import { posts } from './data.js'

const recentPost = document.getElementById('recent')

function renderPosts(){
    for(let comment of posts){
        recentPost.innerHTML += 
        `<section class="recent">
        <a href="${comment.link}" target="_blank">
        <img src="${comment.img}" alt="${comment.alt}">
        </a>
        <p>${comment.date}</p>
        <h1>${comment.title}</h1>
        <p>${comment.message}</p>
        <div class="links">
            <a class="liveLink" href="${comment.link}" target="_blank">LIVE LINK</a>
            <a class="codeLink" href="${comment.codeLink}" target="_blank">CODE LINK</a>
        </div>
    </section>
        `
    }
}

renderPosts()
