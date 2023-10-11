var isMobile = window.innerWidth > 1400;

// Если устройство мобильное, отключаем анимации
if (isMobile) {
  gsap.from('.main-title', {opacity: 0, duration: 3, y: 30, Transition: 1.5})
  gsap.from('.main-pic', {opacity: 0, duration: 1.5, y: 30})

  let itemsL = gsap.utils.toArray('.gallery-left .gallery_item')

  itemsL.forEach(item => {
    gsap.fromTo(item, {x: -100, opacity:0},
    {
      opacity: 1, x: 0,
      scrollTrigger: {
        trigger: item,
        start: '-1000',
        scrub: true
      }
    }) 
  });

  gsap.from('.log-os', {opacity: 0, duration: 7, x: 100})
  gsap.from('.description-os', {opacity: 0, duration: 7, x: 100})

  let itemR = gsap.utils.toArray('.container2')
  
  itemR.forEach(item => {
    gsap.fromTo(item, {x: 100, opacity:0},
    {
      opacity: 1, x: 0,
      scrollTrigger: {
        trigger: 'center',
        start: '-10',
        scrub: true
      }
    }) 
  });
  
}
