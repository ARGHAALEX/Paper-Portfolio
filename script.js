const scroll = new LocomotiveScroll({
   el: document.querySelector('.main'),
   smooth: true
});


var tl = gsap.timeline()

tl.to("#page1",{
   y:"0vh",
   scale:0.6,
   duration:0
})
tl.from("#page1",{
   y:"100vh",
   duration:1,
   delay:1
})
tl.to("#page1",
   {
      rotate:360,
      scale:1,
      duration:1,
      delay:1
   }
)