// // target elements with the "draggable" class
// interact('.ch')({
//     // enable inertial throwing
//     inertia: true,
//     // keep the element within the area of it's parent
//     modifiers: [
//       interact.modifiers.restrictRect({
//         restriction: 'parent',
//         endOnly: true,
//       })
//     ],
//     // enable autoScroll
//     autoScroll: true,
//
//     listeners: {
//       // call this function on every dragmove event
//       move: dragMoveListener,
//     }
//   })
//
// function dragMoveListener (event) {
//   var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
//   var target = event.target
//   // keep the dragged position in the data-x/data-y attributes
//   var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
//   // var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy
//
//     // translate the element
//     target.style.webkitTransform =
//       target.style.transform =
//         'translate(' + x + 'px, ' + 0 + 'px)'
//
//     // update the posiion attributes
//     target.setAttribute('data-x', x)
//     // target.setAttribute('data-y', y)
// }
//
// // this function is used later in the resizing and gesture demos
// window.dragMoveListener = dragMoveListener



// const position = { x: 0, y: 0 }
//
//
// interact('.ch').draggable({
//   inertia: true,
//   modifiers: [
//     interact.modifiers.restrictRect({
//       inner: {
//          left: 100, // the left edge must be <= 100
//          right: 200, // the right edge must be >= 200
//        },
//       outer: {
//          left: 0, // the left edge must be >= 0
//          right: 300, // the right edge must be <= 300
//        },
//       })
//     ],
//   listeners: {
//     start (event) {
//       console.log(event.type, event.target)
//     },
//     move (event) {
//       position.x += event.dx
//       // position.y += event.dy
//
//       event.target.style.transform =
//         `translate(${position.x}px, ${position.y}px)`
//     },
//   }
// })
