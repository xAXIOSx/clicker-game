let products = document.querySelector('.products')
    audio1 = document.querySelector('.aud1'),
    audio2 = document.querySelector('.aud2'),
    audio3 = document.querySelector('.aud3'),
    audio4 = document.querySelector('.aud4'),
    back = document.querySelector('.back'),
    balance = document.querySelector('.balance')
console.log(localStorage.getItem('cross'));
let cards = [
    {
    name:'Upgrade click lvl 1',
    price: 100,
    path:`../img/cursor-lvl1.png`,
    baf:1
    },
    {
    name:'Upgrade click lvl 2',
    price: 300,
    path:`../img/cursor-lvl2.png`,
    baf:2
    },
    {
    name:'Upgrade click lvl 3',
    price: 1000,
    path:`../img/cursor-lvl3.png`,
    baf:3
    },
    {
    name:'Auto Clicker lvl 1',
    price:50000,
    path:`../img/auto-click-lvl1.png`
    }
]

balance.innerHTML = `${localStorage.getItem('clicks')}<img class="coin" src="../img/341-3416805_coin-pixel-art-smiley.png" alt="">`



cards.forEach((e)=>{
    if (e.baf <= localStorage.getItem('baf')) {
        products.insertAdjacentHTML('beforeend',
    `<div class='shop-card'><div class="name">${e.name}</div><div class='product'><img src='${e.path}' alt=''><img class="cross" src="../img/cross.png" alt=""></div><div class='price'>${e.price}<img class="coin" src="../img/341-3416805_coin-pixel-art-smiley.png" alt=""></div><div class='buy-button'>BUY</div></div>`)
    }else{
        products.insertAdjacentHTML('beforeend',
        `<div class='shop-card'><div class="name">${e.name}</div><div class='product'><img src='${e.path}' alt=''></div><div class='price'>${e.price}<img class="coin" src="../img/341-3416805_coin-pixel-art-smiley.png" alt=""></div><div class='buy-button'>BUY</div></div>`)
    }
})

let buttons = document.querySelectorAll('.buy-button')


buttons.forEach((elem,key)=>{
    elem.addEventListener('click',()=>{
        pay = cards[key].price;
        
        if (localStorage.getItem('baf') >= cards[key].baf && localStorage.getItem('baf') != 0) {
            elem.classList.add('no')
            audio4.play()
            setTimeout(() => {
                elem.classList.remove('no')
            }, 400);
        }else if (localStorage.getItem('clicks') < pay) {
            audio4.play()
            elem.classList.add('no')
            setTimeout(() => {
                elem.classList.remove('no')
            }, 400);
        }else {
            let bal = localStorage.getItem('clicks')
            localStorage.setItem('clicks',(bal-pay))
            balance.innerHTML = `${localStorage.getItem('clicks')}<img class="coin" src="../img/341-3416805_coin-pixel-art-smiley.png" alt="">`
            elem.classList.add('yes')
            audio3.play()
            setTimeout(() => {
                elem.classList.remove('yes')
            }, 1500);

            localStorage.setItem('baf',(cards[key].baf))
            setTimeout(() => {
                location.reload()
            }, 2000);
        }
    })
})
back.addEventListener('click',()=>{
    audio1.play()
    setTimeout(() => {
        location.href = '../index.html'
    }, 200);
})