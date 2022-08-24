setTimeout(function () {
    let lis = document.querySelectorAll(".list-box .duration");
    let totalMin = 0,
        totalSec = 0,
        totalHur = 0;
    for (let i = 0; i < lis.length; i++) {
        const TimeStr = lis[i].innerHTML;
        let min, sec;
        min = TimeStr.substring(0, 2);
        sec = TimeStr.substring(3, 5);
        totalMin += Number(min);
        totalSec += Number(sec);
        console.log(i, TimeStr, min, sec);
    }
    totalMin += Math.round(totalSec / 60);
    totalHur = Math.round(totalMin / 60);
    totalSec = totalSec % 60;
    totalMin = totalMin % 60;
    console.log(
        `该集视频共有${lis.length}p视频, 共有${totalHur}小时${totalMin}分${totalSec}秒 !`
    );

    //在页面中添加
    let tittle = document.querySelector(
        "#multi_page > div.head-con > div.head-left > h3"
    );
    tittle.innerHTML = `共${totalHur}h ${totalMin}m ${totalSec}s`;
}, 2000);
