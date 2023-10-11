var isMobile = window.innerWidth > 1400;

// Если устройство мобильное, отключаем анимации
if (isMobile) {
  gsap.from('.main-title', {opacity: 0, duration: 3, y: 30, Transition: 1.5})
  gsap.from('.main-pic', {opacity: 0, duration: 1.5, y: 30})

  let itemsL = gsap.utils.toArray('.div-left .slide-item')

  itemsL.forEach(item => {
    gsap.fromTo(item, {x: -200, opacity:0},
    {
      opacity: 1, x: 0,
      scrollTrigger: {
        trigger: item,
        start: '-1000',
        scrub: true
      }
    }) 
  });

  let itemR = gsap.utils.toArray('.div-right .slide-item')

  itemR.forEach(item => {
    gsap.fromTo(item, {x: 30, opacity:0},
    {
      opacity: 1, x: 0,
      scrollTrigger: {
        trigger: item,
        start: '-1000',
        scrub: true
      }
    }) 
  });

  let itemC = gsap.utils.toArray('.container-sod')

  itemC.forEach(item => {
    gsap.fromTo(item, {opacity:0},
    {
      opacity: 1,
      scrollTrigger: {
        trigger: item,
        start: '-500',
        scrub: true
      }
    }) 
  });

  let item1 = gsap.utils.toArray('.container1')

  item1.forEach(item => {
    gsap.fromTo(item, {opacity:0},
    {
      opacity: 1,
      scrollTrigger: {
        trigger: item,
        start: '-800',
        scrub: true
      }
    }) 
  });

  let itemPreviu = gsap.utils.toArray('.previu')

  itemPreviu.forEach(item => {
    gsap.fromTo(item, {opacity:0},
    {
      opacity: 1,
      scrollTrigger: {
        trigger: item,
        start: '-800',
        scrub: true
      }
    }) 
  });

  let itemH3 = gsap.utils.toArray('.text-h3')

  itemH3.forEach(item => {
    gsap.fromTo(item, {opacity:0},
    {
      opacity: 1,
      scrollTrigger: {
        trigger: item,
        start: '-800',
        scrub: true
      }
    }) 
  });
}

