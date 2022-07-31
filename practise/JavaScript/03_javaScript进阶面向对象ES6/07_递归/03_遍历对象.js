//利用递归查找对象中的数据
let data = [
    {
        id: 1,
        name: "家电",
        goods: [
            {
                id: 11,
                name: "冰箱",
            },
            {
                id: 12,
                name: "洗衣机",
            },
        ],
    },
    {
        id: 2,
        name: "服饰",
    },
];
function getID(json, id) {
    let tar = {};
    json.forEach((item) => {
        if (id == item.id) {
            tar = item;
        } else if (item.goods && item.goods.length > 0) {
            tar = getID(item.goods, id);
        }
    });
    // console.log(tar);
    return tar;
}
console.log(getID(data, 11).name);
