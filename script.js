var p = document.querySelector('.text');
var line = 'Minecraft is a place which helps you to learn about blocks and make new friends'
var length = 0;
function animation(){
    if(length < line.length){
        p.innerHTML += line[length];
        length++;
    }

    setTimeout(animation,200);
}

animation();

gsap.from(".background",{
    delay:1,
    duration:1,
    ease:'expo.inOut',
    scale:1.5
})

gsap.from(".minecraft",{
    delay:2,
    duration:2,
    ease:'expo.inOut',
    y:-100,
    scale:2
})
gsap.from(".mc_sword",{
    delay:2,
    duration:2,
    ease:'expo.inOut',
    x:150,
    scale:2
})
gsap.from(".text_mc",{
    delay:2,
    duration:2,
    ease:'expo.inOut',
    y:-100,
    scale:3
})
gsap.from(".ender",{
    delay:4,
    duration:2,
    ease:'expo.inOut',
    x:-400,
    scale:3
})
gsap.from(".creeper",{
    delay:3,
    duration:2,
    ease:'expo.inOut',
    x:600,
    scale:0.5
})
gsap.from(".totem",{
    delay:3,
    duration:2,
    ease:'expo.inOut',
    x:-400,
    scale:3
})
gsap.from(".axolotl",{
    delay:3,
    duration:2,
    ease:'expo.inOut',
    x:600,
    scale:0.5
})
