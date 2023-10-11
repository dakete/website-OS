var isMobile = window.innerWidth > 1400;

// Если устройство мобильное, отключаем анимации
if (isMobile) {

  gsap.from('.main-title', {opacity: 0, duration: 3, y: 30, Transition: 1.5})
  gsap.from('.main-pic', {opacity: 0, duration: 1.5, y: 30})

  let itemsL = gsap.utils.toArray('.gallery-left .gallery_item')

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

  // gsap.from('.description-os', {opacity: 0, duration: 7, x: 100})

  let itemR = gsap.utils.toArray('.gallery-right .text-item1')

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
}