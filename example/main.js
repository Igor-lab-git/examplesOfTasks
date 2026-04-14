const user = {
    name: "JENNA",
    
    // Обычная функция
    regularHi: function() {
        console.log(this.name);
       () => {
        console.log(this.name);
        console.log("IGOR");
    }
    },
    
    // Стрелочная функция
    
};

user.regularHi(); // "JENNA" (this = user)
user.regularHi();