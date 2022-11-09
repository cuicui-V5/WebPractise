{
    // 定义接口
    interface animalInterface {
        name: string;
        sex: string;
    }
    // 可以定义两个重名接口, 接口内容会合并
    interface animalInterface {
        say(): void;
    }

    // 实现接口
    abstract class Animal implements animalInterface {
        name: string;
        sex: string;

        constructor(name: string, sex: string) {
            this.name = name;
            this.sex = sex;
        }
        abstract say(): void;
    }

    // 继承animal抽象类
    class Dog extends Animal {
        say(): void {
            console.log("汪汪汪", this.name);
        }
    }

    // 实例化对象
    const dog = new Dog("tim", "male");
    dog.say();
}
