window.addEventListener("load", function () {
    var that;
    class tab {
        constructor(id) {
            //获取元素
            that = this;
            /**
             * @type {HTMLElement} main
             */
            this.main = document.querySelector(id);
            /**
             * @type {HTMLElement} tabNav
             */
            this.navBar = this.main.querySelector(".tabNav ul");
            this.tabContent = this.main.querySelector(".tabContent");
            // this.lis = this.main.querySelectorAll(".tabNav ul li");
            // /**
            //  * @type {HTMLElement} tabContent
            //  */
            // this.tabContents = this.main.querySelectorAll(".tabContent section");
            // console.log(tab,tabNav,tabContent);
            this.addBtn = this.main.querySelector(".add");
            this.addBtn.onclick = this.add;
            this.init();
        }

        //实现功能

        //初始化对象, 绑定事件
        init() {
            this.lis = this.main.querySelectorAll(".tabNav ul li");
            /**
             * @type {HTMLElement} tabContent
             */
            this.tabContents = this.main.querySelectorAll(".tabContent section");
            for (var i = 0; i < this.lis.length; i++) {
                this.lis[i].index = i;
                this.lis[i].onclick = this.toggle;
                //给删除按钮绑定事件
                this.lis[i].children[1].onclick=this.del;
            }
        }
        //切换功能
        toggle() {
            //先去除其他元素的acitve类
            for (var i = 0; i < that.lis.length; i++) {
                that.lis[i].classList.remove("active");
                that.tabContents[i].classList.remove("active");
            }

            this.classList.add("active");
            that.tabContents[this.index].classList.add("active");
        }
        //添加功能
        add() {
            //新增一个tab --start
            var li = document.createElement("li");
            var nvaSpan = document.createElement("span");
            nvaSpan.innerHTML = "newTab";
            var nvaDiv = document.createElement("div");
            nvaDiv.className = "remove";
            li.appendChild(nvaSpan);
            li.appendChild(nvaDiv);
            that.navBar.appendChild(li);
            //新增一个tab --end
            //新增一个内容区域 --start
            var contentSection = document.createElement("section");
            contentSection.innerHTML = "新内容";
            that.tabContent.appendChild(contentSection);
            //新增一个内容区域 ==end
            that.init();
            console.log(that);
        }
        // 删除功能
        del() {
            console.log(this);
            that.navBar.removeChild(this.parentNode);
        }
        //修改功能
        edit() {}
    }

    new tab(".tab");
});
