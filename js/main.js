// let btn_1 = document.querySelector(".hero-item__img");
// let btn_2 = document.querySelector(".hero-item__img");
// let btn_3 = document.querySelector(".hero-item__img");
// let btn_4 = document.querySelector(".hero-item__img");
// let btn_5 = document.querySelector(".hero-item__img");

// btn_1.addEventListener("click", function(){
//     this.hero-item__list
// })

// const button = document.getElementsByClassName(".hero-item__img")
// const list = document.getElementsByClassName("hero-item__list")




// let item__img = document.querySelector(".hero-item__img");

// item__img.forEach(function(item__img){
    //     item__img.addEventListener("click".)
    // })
    // document.querySelectorAll(".hero-item__img").forEach(e=> {
        //     e.addEventListener('click', e =>{
            //         const menu = e.currentTarget.dataset.path;
            //         document.querySelectorAll('hero-item__list').forEach(e => {
                //             if(!document.querySelector('[data-target-$(menu)]').classList.contains('open')){
//                 document.querySelector('[data-target-$(menu)]').classList.add('menu-active');
//             }
//         })
//     })
// })

// buttun .hero-item__img
// ul list=hero-item__list
// let hero_img = document.querySelectorAll('.hero-item__img');
// for(i in hero_img){

//     console.log(hero_img[i])
// }

// var imgArray = [...hero_img];
// imgArray.forEach(single =>{
// let hero_list = document.querySelectorAll(".hero-item__list");

//    hero_list.classList.toggle('.menu-active')
// })
document.querySelector('.hero-item__img').addEventListener('click', function(){
    document.querySelector(".hero-item__list").classList.toggle('menu-active2');
})
document.querySelector('.hero-item__img2').addEventListener('click', function(){
    document.querySelector(".hero-item__list2").classList.toggle('menu-active2');
})
document.querySelector('.hero-item__img3').addEventListener('click', function(){
    document.querySelector(".hero-item__list3").classList.toggle('menu-active3');
})
document.querySelector('.hero-item__img4').addEventListener('click', function(){
    document.querySelector(".hero-item__list4").classList.toggle('menu-active4');
})
document.querySelector('.hero-item__img5').addEventListener('click', function(){
    document.querySelector(".hero-item__list5").classList.toggle('menu-active5');
})
function timeShover(){
    var timeNow = new Date();
    document.querySelector(".hours").textContent = timeNow.getHours();
    document.querySelector(".minutes").textContent = timeNow.getMinutes();
    document.querySelector(".seconds").textContent = timeNow.getSeconds();
}
setInterval(function(){
    timeShover()
},1000);



