{
    class Person {
        // // 公共属性
        // public name: string;
        // // 私有属性 只能在此类内使用
        // private age: number;

        // // 保护类型的属性
        // protected job: string;

        // 手动的 setter 需要函数调用形式
        public getter() {
            return this.age;
        }
        public setter(v: number) {
            this.age = v;
        }
        // get写法, 可以直接通过 .属性名 的形式读取
        public get getAge(): number {
            return this.age;
        }

        public set setAge(v: number) {
            this.age = v;
        }

        // constructor(name: string, age: number, job: string) {
        //     this.name = name;
        //     this.age = age;
        //     this.job = job;
        // }
        // 构造函数简写
        constructor(
            public name: string,
            private age: number,
            protected job: string,
        ) {}
    }
    class p extends Person {
        say() {
            console.log(this.job);
        }
    }
    const bob = new p("bob", 12, "fe");
    bob.say();
    const tim = new Person("tom", 20, "be");

    console.log(tim.name);
    tim.setAge = 100;
    console.log(tim.getter());
}
