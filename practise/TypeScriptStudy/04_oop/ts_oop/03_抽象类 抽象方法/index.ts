{
    // 定义抽象类, 抽象类不能被直接new出来, 只能用于继承
    abstract class Animal {
        aniName: string;
        constructor(name: string) {
            this.aniName = name;
        }
        // 抽象方法: 子类必须重写该方法, 抽象方法不能有实现
        // 抽象方法必须包含在抽象类中, 但是抽象类不一定必须含有抽象方法
        abstract hello(): void;
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
            console.log("喵喵喵", this.aniName);
        }
    }

    let dog = new Dog("dog");
    let cat = new Cat("cat", "male");

    dog.hello();
    cat.hello();
}
