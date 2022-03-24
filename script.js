let btn = document.querySelector('.button'),
    audio1 = document.querySelector('.aud1'),
    audio2 = document.querySelector('.aud2'),
    ammount = document.querySelector('.click-amount'),
    shop = document.querySelector('.shop'),
    reset = document.querySelector('.reset')
    clicks = 0


    if (localStorage.getItem('clicks') != null) {
        ammount.innerHTML = `${localStorage.getItem('clicks')}<img class="coin" src="img/341-3416805_coin-pixel-art-smiley.png" alt="">`
        clicks = localStorage.getItem('clicks')
    }else {
        ammount.innerHTML = 000
    }

btn.addEventListener('click',()=>{
    btn.insertAdjacentHTML('afterbegin',`<div class="progress">+${1+localStorage.getItem('baf') / 1}</div>`)
    prog = document.querySelector('.progress')
    let number = Math.round(Math.random() * (4 - 1)) + 1;
    console.log(number);
    if (number == 1) {
        prog.style = 'animation: 0.7s jump-left'
    }else if(number == 2 || number == 3){
        prog.style = 'animation: 0.7s jump'
    }else if (number == 4){
        prog.style = 'animation: 0.7s jump-right'
    }
    // prog.style = 'animation: 1s jump-left'
    btn.classList.add('pressed')
    setTimeout(() => {
        btn.classList.remove('pressed')
    }, 300);
    baf = localStorage.getItem('baf') / 1
    clicks++
    clicks += baf
    ammount.innerHTML=`${clicks}<img class="coin" src="img/341-3416805_coin-pixel-art-smiley.png" alt="">`
    localStorage.setItem('clicks',clicks)
})
shop.addEventListener('click',()=>{
    audio2.play()
    setTimeout(() => {
        location.href='pages/shop.html'
    }, 250);
})
reset.addEventListener('click',()=>{
    localStorage.setItem('clicks',0)
    localStorage.setItem('baf',0)
    location.reload()
})