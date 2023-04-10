class Typescript {
    version;
    constructor(version) {
        this.version = version;
    }
    info(name) {
        return `[${name}]: Typescript version is ${this.version}`;
    }
}
// class Car {
//   readonly model: string
//   readonly numberOfWheels: number = 4
//
//   constructor(theModel: string) {
//     this.model = theModel
//   }
// }
class Car {
    model;
    numberOfWheels = 4;
    constructor(model) {
        this.model = model;
    }
}
// ==============
class Animal {
    voice = '';
    color = 'black';
    constructor() {
        this.go();
    }
    go() {
        console.log('Go');
    }
}
class Cat extends Animal {
    setVoice(voice) {
        this.voice = voice;
    }
}
const cat = new Cat();
cat.setVoice('test');
console.log(cat.color);
// cat.voice
// =====================
class Component {
}
class AppComponent extends Component {
    render() {
        console.log('Component on render');
    }
    info() {
        return 'This is info';
    }
}
//# sourceMappingURL=5_classes.js.map