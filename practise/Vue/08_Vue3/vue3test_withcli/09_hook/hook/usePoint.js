import { reactive, onMounted } from "vue";
export default function () {
    let point = reactive({});

    onMounted(() => {
        window.addEventListener("click", givePos);
    });
    const givePos = function (e) {
        console.log(e.pageX, e.pageY);
        point.x = e.pageX;
        point.y = e.pageY;
    };
    return point;
}
