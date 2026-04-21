

const arr = ["http://vcvcvcv", "http://dfdfdffdfdf", "dfdfdfdf", "dfdfdfdf", "dfdfdfhttp://", "dfdfdfhttp://"];

const fil = arr.filter((item) => item.startsWith("http://"));
const fil2 = arr.filter((item) => item.endsWith("http://"));

console.log(fil)
console.log(fil2)