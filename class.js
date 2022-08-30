// class A {
//   fix() {
//     const className = this.__proto__.constructor.name
//     const names = Object.getOwnPropertyNames(this.__proto__).filter(item => item !== 'constructor')
//     for (let name of names) {
//       if (typeof this.__proto__[name] == 'function') {
//         const originValue = this.__proto__[name]
//         Object.defineProperty(this.__proto__, name, {
//           get() {
//             console.log(`调用 ${className}.${name}`)
//             return originValue
//           }
//         })
//       }
//     }
//   }
// }

// class B extends A {
//   constructor() {
//     super()
//     this.ccc = 10
//   }
//   fix() {
//     super.fix()
//     this.a()
//   }

//   a() {

//   }
// }

// const a = new B()
// console.log(a.fix())

const path = require('path')

console.log(path.basename('27医3.mp4'))
console.log(path.basename('/srv/app/dist/src/download/27医3.mp4'))
console.log(path.basename('/srv/app/dist/src/download/27医3.mp4').concat('_screenshot.png'))