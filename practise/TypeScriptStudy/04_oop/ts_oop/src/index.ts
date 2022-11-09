{
    // 泛型类
    class Person<T> {
        constructor(public name: T, public age: T) {}
    }

    const p = new Person("tim", "dog");
    // 泛型函数
    function fun<T>(v: T): T {
        return v;
    }

    let v = {};
    fun(v);
}
