# CSS引入方式
## 内嵌式: css写在style标签中
style标签虽然可以写在页面任意位置,但是通常约定写在<head>中.
作用范围:当前文件
使用场景:小案例
## 外联式: css写在独立的.css文件中
需要通过<link>标签引入
作用范围:多个页面
使用场景:项目
## 行内式: css写在标签的style属性中
之后配合js使用
作用范围:当前标签
使用场景:配合js使用

# 基础选择器
选择器作用:选择页面中对应的标签, 方便后续设置样式
## 标签选择器
结构: 标签名{ css属性名: 属性值 ; }
作用: 通过标签名, 找到页面中所有这类标签,  设置样式
注意

- 标签选择器选择的是一类标签, 而不是某一个
- 标签选择器无论嵌套关系有多深, 都能找到

## 类选择器
结构: 定义类  .+类名{属性名:属性值; }
通过类名,找到页面中所有有这个类名的标签, 设置样式
注意

- 所有标签都有class属性, class属性值为类名
- 类名可以由数字字母下划线中划线组成,但不能由数字中划线开头
- 一个标签可以同时有多个类名, 多个类名中间由空格隔开
- 类名可以重复, 一个类选择器可以选择多个标签
## id选择器
结构: 定义id #id属性值{ 属性名: 属性值; }
通过id属性值, 找到页面中有这个id的标签. 设置样式
注意

- 所有标签都有id属性
- id属性是唯一的, 不可重复
- 一个标签上只能有一个id属性
- 一个id选择器只能选择一个标签

一般配合js使用
## 通配符选择器
结构: &{ css属性名: 属性值; }
作用:找到页面中所有标签,设置样式
注意

- 开发中使用极少, 指在特殊情况下会使用
- 在小页面中可能会用于去除标签默认的margin和padding

# 字体和文本样式
## 字体样式
### 文字大小: font-size
属性名 font-size
取值 数字+px
注意

   - chrome默认文字大小是16px
   - 单位需要设置,否则无效
### 文字粗细: font-weight
属性名 font-weight
取值:
关键字
正常: normal
加粗: bold
或100-900的整百数字
100-900
正常: 400
加粗: 700
注意

   - 不是所有字体都提供了九种粗细,有的字体设置无变化
   - 实际开发中, 正常, 加粗用的最多

### 字体样式: font-style
属性名: font-style
取值:
正常: normal
倾斜: italic

### 字体类型: font-family
属性名: font-family
取值: 具体字体1,具体字体2,字体系列

      - 具体字体: 微软雅黑, 黑体, 宋体
      - 字体系列: sans-serif, serif , monospace
#### 渲染规则:

- 从左往右按照顺序查找, 如果电脑中未安装, 则显示下一个字体
- 如果都不支持,就根据操作系统,显示默认字体
#### 注意:

- 如果字体名称存在多个单词,推荐使用引号包裹
- 最后一项字体系列不需要引号包裹
- 网页开发时, 尽量使用系统常见字体. 保证不同用户访问都可正确显示
### 常见字体系列:
#### 无衬线字体(sans-serif)

- 特点: 文字笔画粗细均匀, 首尾无装饰
- 场景: 网页中大多采用无衬线字体
- 常见无衬线字体: 黑体, arial
#### 衬线字体(serif)

- 特点: 文字笔画粗细不均, 首尾有装饰
- 场景, 报刊书籍中应用广泛
- 常见衬线字体: 宋体, times new roman
#### 等宽字体(monospace)

- 特点: 每个字母或文字的宽度相等
- 场景: 一般用于程序代码编写, 有利于代码的阅读和编写
- 常见等宽字体: consolas , fira code

**如果给一个元素多个css属性, 后面的属性会覆盖上面的属性 **
### 字体font 属性连写 (复合属性)
属性名 font
取值 font : font: style weight size/line-height family;
注意

- 只能省略前两个, 如果省略了相当于设置了默认值
- 如果需要同时设置单独与连写的形式
   - 要不把单独的样式写在连写的下面
   - 要么把单独的样式写在连写的里面
## 文本样式
### 文本缩进 : text-indent
属性: text-indent
取值

- 数字+px
- 数字+em ( 推荐使用 1em表示当前标签的font-size的大小)
### 文本水平对齐方式 : text-align
属性: text-align
取值:

- left 			左对齐
- center		居中对齐
- right		右对齐
### 文本修饰: text-decoration
属性: text-decoration
取值:

- underline		下划线
- line-through	删除线
- overline		上划线
- none		无
## line-height行高
属性: line-height
![image.png](https://cdn.nlark.com/yuque/0/2022/png/25905096/1643091408193-a8bfb358-cfbe-430d-8f1f-7aac4dfce0cd.png#clientId=u6a767ba0-4d79-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=184&id=u71073c64&margin=%5Bobject%20Object%5D&name=image.png&originHeight=268&originWidth=745&originalType=binary&ratio=1&rotation=0&showTitle=false&size=76585&status=done&style=none&taskId=u9d6b3acd-a425-4053-8b4f-f8388eaf42e&title=&width=511)
取值:

- 数字+px
- 倍数 (font-size的倍数)
- 如果用在font属性连写的时候

font: style weight size/line-height family;

## CSS中的颜色表示

- 16进制表示: 		#000000 #ff00ff 如果两位数字相同,可以合并, 如#000 #f0f
- rgb表示法		rgb(255,255,255)
- rgba表示法		rgba(255,255,255,0.5) a的取值从0-1
- 关键词表示法		red black green
