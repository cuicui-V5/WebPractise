class Person {
    // 实例属性 只有实例对象上可以读取
    age: number = 19;
    // 静态属性 只能通过类名.属性名调用, 实例对象内无此属性
    static Pname: string = "tim";
    // 只读属性
    readonly job = "front end";
    // 静态只读属性
    static readonly jobs = "front end";
    // 实例方法 只有在实例中才可调用
    hello() {
        console.log("hello");
    }
    // 静态方法 只能直接调用类名
    static hi() {
        console.log("static hi");
    }
}

const p = new Person();
console.log(p);
console.log(Person);
p.hello();
Person.hi();
