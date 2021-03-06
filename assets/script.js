//alternate color switch for "GDG Cloud Indore"
let colors = ["#0085ff", "#3cba54", "#ea4335", "#f4b400"];
let maintext = document.getElementById('main-text');
let color = colors[Math.floor(Math.random() * colors.length)];
maintext.style.color = color
document.getElementById('subscribe2').style.color = color
document.documentElement.style
    .setProperty('--scrollColor', color);

//To display main content based on Navbar
let navbuttons = Array.from(document.getElementsByClassName('nav-links'))
let mainContents = Array.from(document.getElementsByClassName('main--content'))
navbuttons.forEach(button => {
    button.addEventListener('click', () => {
        navbuttons.forEach(button => {
            button.classList.remove('active-nav')
        })
        let activeMain = button.id.split('-').filter(cl => cl !== 'nav')[0]
        mainContents.forEach(main => {
            if (main.classList.value.split(' ').includes(activeMain)) {
                main.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
            }
        })
        button.classList.add('active-nav')
        if (button.id === 'archives-nav') {
            document.getElementById('archives').style.height = 'auto'
        } else {
            document.getElementById('archives').style.height = '75vh'
        }
    })
})

//remove this line
//document.getElementById('team').scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })

//Filling Archives into the div
archives.forEach(archive => {
    let archiveCode = document.createElement('div')
    archiveCode.classList.add('item--container')
    archiveCode.innerHTML = `
    <div class="item--category category-${archive.category === 'Newsletter' ? "newsletter" : "event"}">
        ${archive.category}
    </div>
    <div class="item--link">${archive.title}</div>
    <div class="item--date">${archive.date}</div>`
    document.getElementById('archives--container').appendChild(archiveCode)
})

const toggleBodyIframe = () => {
    document.getElementById('body').classList.toggle('display-none')
    document.getElementById('iframe--container').classList.toggle('display-none')
    document.getElementById('iframe').src = ""
}

//enabling iframes on archive Click
let archiveLinks = Array.from(document.getElementsByClassName('item--link'))
archiveLinks.forEach(link => {
    link.addEventListener('click', () => {
        toggleBodyIframe();
        document.getElementById('iframe').src = archives.filter(({ title }) => title === link.textContent)
            .map(({ link }) => link).reduce((val, link) => val = link)
    })
})

//Close button for iframes
document.getElementById('iframe--close').addEventListener('click', toggleBodyIframe)

document.getElementById('subscribe').addEventListener('click', () => {
    document.getElementById('body').classList.toggle('display-none');
    document.getElementById('subscribe--container').classList.toggle('display-none');
})

document.getElementById('subscribe2').addEventListener('click', () => {
    document.getElementById('body').classList.toggle('display-none');
    document.getElementById('subscribe--container').classList.toggle('display-none');
})

document.getElementById('subscribe--close').addEventListener('click', () => {
    document.getElementById('body').classList.toggle('display-none');
    document.getElementById('subscribe--container').classList.toggle('display-none');
})