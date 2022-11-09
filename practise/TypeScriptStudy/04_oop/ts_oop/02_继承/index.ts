{
    class Animal {
        aniName: string;
        constructor(name: string) {
            this.aniName = name;
        }
        hello() {
            console.log("hello===" + this.aniName);
            console.log(this);
        }
    }

    class Dog extends Animal {
        // 重写方法
        hello(): void {
            console.log("汪汪汪", this.aniName);
        }
    }
    class Cat extends Animal {
        sex: string;
        constructor(name: string, sex: string) {
            super(name);
            this.sex = sex;
        }
        hello(): void {
            // console.log("喵喵喵", this.aniName);
            super.hello();
        }
    }

    let dog = new Dog("dog");
    let cat = new Cat("cat", "male");

    dog.hello();
    cat.hello();
}
