//EXERCISE 1:
const runCode1 = () => {
  console.log("start");
  let today = new Date();
  console.log(today);
  console.log("end");
};

//EXERCISE 2:
const runCode2 = () => {
  console.log("start");
  setTimeout(() => {
    console.log(new Date());
  }, 3000);

  console.log("end");
};

//EXERCISE 3:
const runCode3 = () => {
  console.log("start");
  let today = new Date();
  setTimeout(() => {
    console.log(today);
  }, 3000);

  console.log("end");
};

//EXERCISE 4:
const runCode4 = () => {
  console.log("start");
  setTimeout(() => {
    console.log(Math.floor(Math.random() * 100));
  }, 3000);
  setTimeout(() => {
    console.log(Math.floor(Math.random() * 100));
  }, 5000);
  setTimeout(() => {
    console.log(Math.floor(Math.random() * 100));
  }, 7000);
  console.log("end");
};

// //EXERCISE 5:
// const runCode5 = () => {
//   setInterval(() => {
//     userNumber = document.getElementById("userNumber");
//     ranNum = document.getElementById("ranNum");
//     let showNum = Math.floor(Math.random() * userNumber.value);
//     ranNum.innerHTML = showNum;
//   }, 1000);

// //   EXERCISE 6:
//   setInterval(() => {
//     let randomColor = Math.floor(Math.random() * 16777215).toString(16);
//     console.log(randomColor);
//     document.body.style.backgroundColor = "#" + randomColor;
//   }, 1000);
// };

//EXERCISE 7:
const runCode7 = () => {
  document.body.style.backgroundColor = "Green";
  setTimeout(() => alert("Done"), 1000);
};

//EXERCISE 8:
const runCode8 = () => {
  showRandom(getRandomNumberAfterDelay);
  console.log(random);
};

const getRandomNumberAfterDelay = () => {
  setTimeout(mathFloor(), 5000);
  return random;
};

const mathFloor = () => {
  random = Math.floor(Math.random() * 100);
};

const showRandom = (callback) => {
  callback();
};

//EXERCISE 9:
const runCode9 = () => {};
