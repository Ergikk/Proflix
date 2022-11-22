const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const rating = document.getElementById('rating')
const date = document.getElementById('date')
const logo = document.getElementById('logo')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bgs_text = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
    header.innerHTML = '<img src="https://th.bing.com/th/id/R.08a55d7d0ddca7a04d51eb2af583d13a?rik=efFB9c4Fei2dFg&riu=http%3a%2f%2fwww.wellgousa.com%2fsites%2fdefault%2ffiles%2f2020-05%2f812x1200.jpg&ehk=nf8zuzID4BCbSSObicBiQOgkyfSNCN2nvU2mpGxF1ME%3d&risl=&pid=ImgRaw&r=0">'
    title.innerHTML = 'Gundala'
    profile_img.innerHTML = '<img src="https://th.bing.com/th/id/R.4e148a3c4e20264bb23f12532dcaf5c3?rik=kUsxQNqwCY9KnQ&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fstar-icon-transparent-background%2fstar-icon-transparent-background-4.png&ehk=qWe235iJIdKqzyN%2bAi8mKXwkbKGE8wTR9U0qjda07L0%3d&risl=&pid=ImgRaw&r=0" alt="">'
    rating.innerHTML = 'Imdb 3,8'
    date.innerHTML = 'Released Oct 08, 2022'
    logo.innerHTML = '<img src="https://farm6.staticflickr.com/5821/20639706793_8c038faa4a_o.png">'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bgs_texts.forEach(bg => bg.classList.remove('animated-bg-texts'))
}