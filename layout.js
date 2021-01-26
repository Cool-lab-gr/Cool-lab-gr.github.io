/**@type {KeyframeAnimationOptions} options */
const headerOptions = {
  duration: 350,
  iterations: 1,
  fill: 'forwards',
}
/**@type {Keyframe[] | PropertyIndexedKeyframes} keyframes */
const headerKeyframes = [
  { transform: 'translateY(0%)', composite: "auto" }
]


document.querySelectorAll('.box').forEach(box => {

  box.animate([
    {opacity: 1, offset: .3 }
  ])

})


setTimeout(() => {
  document.querySelector("header").animate(headerKeyframes, headerOptions);

  Array.from(
    document.querySelectorAll('.box')
  ).forEach((box, key) => {
    setTimeout(() => {
      box.animate([
        {opacity: 1}
      ], {
        duration: 350,
        iterations: 1,
        fill: 'forwards',
      })
    }, 200 * ++key)
  })
}, 500)




