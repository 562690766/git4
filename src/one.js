// import '@babel/polyfill'
import two from './two'
const merge = require('webpack-merge');
console.log(merge({name:"tom",age:20},{name:"susan",sex:"女"}));
const x=200;
console.log("x:",x);
console.log("y:",two.y)

//es6
const test=(num)=>{
    console.log("test函数"+num);
}
test(two.y);

const delay=new Promise(resolve=>console.log("new Promise()"));
function*helloWorldGenerator(){
    yield'hello';
    yield'word';
    yield'ending';
}
var hw=helloWorldGenerator();