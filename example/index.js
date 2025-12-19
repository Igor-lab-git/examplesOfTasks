//
// const form = document.querySelector("[data-js-form]");
// const text = document.querySelector("#text");
//
// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//
//     const task = text.value.trim();
//
//     console.log(task);
//     text.value = ""
// })



const  myFun = () => {
   let count = 0;
   return () => {
     console.log(count++);
     
   };
};

const fuCount1 = myFun();
fuCount1()
fuCount1()
fuCount1()



 