
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


