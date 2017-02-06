## [v1.5.4]
**Support LESS and SASS**
**Support for preprocessors(Sass, Less, Stylus) postfix **
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
+ overflow-y: scroll;                /* 4 , 修正Chrome/Firefox 默认不显示滚动条, 导致页面切换异常问题 */
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


