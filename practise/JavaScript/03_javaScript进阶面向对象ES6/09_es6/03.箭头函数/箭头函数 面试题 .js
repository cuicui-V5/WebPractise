var age = 29;
var obj = {
    age: 20,
    say: () => {
        console.log(this);
    },
};
obj.say();
