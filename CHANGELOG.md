## [v1.5.8]
* add
```
body {
    word-wrap: break-word; /* 允许单词换行    [ 避免因长单词不换行导致浏览器宽度拉伸, 导致 浏览器宽度 > 100% ] */
}
**演示：http://output.jsbin.com/xinopeloxe**
```
## [v1.5.7]
* add
```
a {
  color: #06c;  /* 1, 统一字体颜色。 [ 统一为IE默认字色,在浏览器`user agent stylesheet`中也只有IE设置color ] */
}
```
**`a tag color` 默认是不继承的, 浏览器显示差异比较大,这里统一为IE 默认, 同样也是最为合适的字色**
## [v1.5.6]
### Remove
* before
```
/**
 * 4. 确保不指定[height] 保持等比缩放 [避免只指定width 导致图片变形]
 */
img {
  border-style: none; /* 1 */
  max-width: 100%; /* 2 */
  width: auto\9;   /* 3 * \9 是 Css hack， 它表示只作用于 Internet Explorer 7 - 9 */
  height: auto;    /* 4 */
  vertical-align: bottom; /* 5 */
}
```
* after
```
img {
  border-style: none; /* 1 */
  max-width: 100%; /* 2 */
  width: auto\9;   /* 3 * \9 是 Css hack， 它表示只作用于 Internet Explorer 7 - 9 */
  vertical-align: bottom; /* 5 */
}
```
**现代浏览器均支持图片等比缩放,` height: auto;` 不是必需品。**

**移除[v1.5.4] 更新, 预处理器(Sass/Less/Stylus) 后缀文件不是必需品。 请使用如下替代**
```
@import '~backon.css/dist/backon.min.css';
```
## [v.1.5.5]
## Add
```
body {
  ...                                /* 1 */

 -webkit-overflow-scrolling: touch; /* 2 , 修正IOS 6+ 浏览器不支持触摸滑动 */

}
```
**候选**
```
@media only screen and (max-device-width: 768px){
    body{
        -webkit-overflow-scrolling: touch;
    }
}
```
**IOS `-webkit-overflow-scrolling: touch` 采用系统控件渲染[创建`UIWebOverflowScrollView`渲染容器],因为使用硬件加速的系统级控件,拥有更高效率,但消耗额外的内存**


## <del>[v1.5.4]</del>
**Support for preprocessors(Sass, Less, Stylus) postfix**
```
// LESS/SASS/Stylus
@import '~backon.css/dist/backon.min';

// 预处理后缀格式并不是必需品, 如下等价
@import '~backon.css/dist/backon.min.css';
```

## [v1.5.3]
### Add
* before
```
html {
  font-family: arial,sans-serif;     /* 1 */
  -moz-box-sizing: border-box;       /* 2 */
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -ms-text-size-adjust: 100%;        /* 3 */
  -webkit-text-size-adjust: 100%;    /* 3 */
  -ms-overflow-style: scrollbar;     /* 4 */
  -webkit-tap-highlight-color: transparent; /* 5 */
}
```
* before
```
html {
  font-family: arial,sans-serif;     /* 1 */
  -moz-box-sizing: border-box;       /* 2 */
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -ms-text-size-adjust: 100%;        /* 3 */
  -webkit-text-size-adjust: 100%;    /* 3 */
  overflow-y: scroll;                /* 4 , 修正Chrome/Firefox 默认不显示滚动条, 导致页面切换异常问题 */
  -ms-overflow-style: scrollbar;     /* 5 */
  -webkit-tap-highlight-color: transparent; /* 6 */
}
```

## [v1.5.2]
### Add
* before
```
a {
  background-color: transparent; /* 1 */
  -webkit-text-decoration-skip: objects; /* 2 */
}
```
* after
```
a {
  background-color: transparent; /* 1 */
  -webkit-text-decoration-skip: objects; /* 2 */
  text-decoration: none; /* 3, 移除默认下划线,增加其可读性 */
}
```

## [v1.5.1]
### Remove:
* before
```
/**
 * 1. 统一 box-sizing 为 content-box [Firefox 差异]
 * 2. 统一 默认样式, 解决不同浏览器之间的样式差异
 *    2.1、 修正越界问题 [ 除Edge/IE 为`hidden`, 其他浏览器均为`visible`, `visible`属性会导致越界 ]
 *    2.2、 修正不同浏览器之间的样式差异
 * 3. 默认 清除浮动
 */
hr {
  -webkit-box-sizing: content-box; /* 1 */
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: hidden;  /* 2.1 */
  background: transparent; /* 2.2 */
  border: 0;               /* 2.2 */
  border-bottom: 1px solid #ccc; /* 2.2 */
  padding: 0 ; /* 2.2  校验中.... */
}

hr::before {
  display: table;
  content: '';
}
```
* after
```
hr {
  -webkit-box-sizing: content-box; /* 1 */
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: hidden;  /* 2.1 */
  background: transparent; /* 2.2 */
  border: 0;               /* 2.2 */
  border-bottom: 1px solid #ccc; /* 2.2 */
}
```

## [v1.5.0]


