var card = [

    {
        Img: './assets/images/img1.png',
        h2: 'Everyday Things are',
        heading2: ' Colorful',
        p: 'Lorem ipsum dolor sit amet consectetur. Elementum quam blandit fusce laoreet nunc lectus',
    },
    {
        Img: './assets/images/img2.png',
        h2: 'Everyday Things are',
        heading2: ' Colorful',
        p: 'Lorem ipsum dolor sit amet consectetur. Elementum quam blandit fusce laoreet nunc lectus',
    },
    {
        Img: './assets/images/img3.png',
        h2: 'Everyday Things are',
        heading2: ' Colorful',
        p: 'Lorem ipsum dolor sit amet consectetur. Elementum quam blandit fusce laoreet nunc lectus',
    },

]
const mycontainer = document.querySelector('.cardcontainer');
const mycard =
    card.map((postdata) => {
        return `
    <div class="card">
    <img src=${postdata.Img} alt="">
<h2 class="card_heading">${postdata.h2}<span class="colorful">${postdata.heading2}</span></h2>
    <p class="paragraph">${postdata.p}</p>

    </div>
    `
    }).join(" ")
mycontainer.innerHTML = mycard;