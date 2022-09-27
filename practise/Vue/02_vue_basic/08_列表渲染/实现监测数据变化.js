const data = {
    name: "tim",
    age: 18,
};
const obs = new Observer(data);
//实现监测数据
/**
 *
 * @param {object} obj
 */
function Observer(obj) {
    const keys = Object.keys(obj);
    keys.forEach(k => {
        Object.defineProperty(this, k, {
            get() {
                return obj[k];
            },
            set(val) {
                console.log(k, "被修改了");
                obj[k] = val;
            },
        });
    });
}
