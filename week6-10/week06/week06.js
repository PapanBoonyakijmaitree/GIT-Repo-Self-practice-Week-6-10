//1.เขียนฟังก์ชัน reverseFormatter(text) ที่ใช้กับ greet ได้ และทำให้ข้อความกลับด้าน (เช่น "hello" → "olleh")
const greet = (text, formatter) => formatter(text);

function reverseFormatter(text) {
  return text.split("").reverse().join("");
}

console.log(greet("hello", reverseFormatter)) 
// "olleh"


//2.เพิ่มฟังก์ชัน multiply(elements) เพื่อนำไปใช้กับ calculate ที่คูณตัวเลขทั้งหมดใน array
function calculate(nums, compute) {
  return compute(nums)
}

function multiply(elements) {
  return elements.reduce((product, n) => product * n, 1);
}

console.log(calculate([2, 3, 4], multiply)) 
// 24

//3.พัฒนา counter() เดิม ให้ return method ใหม่ชื่อ reset() ที่รีเซ็ตค่า count กลับเป็น 0

function counter() {
  let count = 0;
  function increment() {
    return ++count;
  }
  function decrement() {
    return --count;
  }
  function getCount() {
    return count;
  }
  function reset() {
    count = 0;
    return count;
  }
  return { add: increment, decrese: decrement, getCountValue: getCount, reset: reset };
}


const c = counter();
console.log(c.add());   // 1
console.log(c.add());   // 2
console.log(c.reset()); // 0


//4.แก้ไข idGenerator ให้รับ prefix (เช่น "ID-") และคืนค่า id พร้อม prefix

function idGenerator(prefix = "") {
  let count = 0;
  return function () {
    return prefix + (++count);
  };
}

const userIdGen = idGenerator("ID-");
console.log(userIdGen()); // "ID-1"
console.log(userIdGen()); // "ID-2"


//5. เขียน outerMultiply(a) ที่ return innerMultiply(b) และคืนค่า a * b

function outerMultiply(a) {
  function innerMultiply(b) {
    return a * b;
  }
  return innerMultiply;
}


const timesTwo = outerMultiply(2);
console.log(timesTwo(5)); // 10

const timesTen = outerMultiply(10);
console.log(timesTen(3)); // 30