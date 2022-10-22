// index.js
// 列表数据
const classes = require('./data.js');
const totalPage = Math.ceil(classes.length / 10);

Page({
  data: {
    classes: classes.slice(0, 10),
    totalPage,
    curPage: 1,
    pageSize: 10,
    pageSizeArray: [5, 10, 20, 50],
    isHighlight: false,
  },
  updateClasses() {
    this.setData({
      classes: classes.slice((this.data.curPage - 1) * 10, this.data.curPage * 10),
    });
  },
  onPrevTap() {
    if (this.data.curPage <= 1) return;
    this.setData({
      curPage: this.data.curPage - 1,
    });
    this.updateClasses();
  },
  onNextTap() {
    if (this.data.curPage >= totalPage) return;
    this.setData({
      curPage: this.data.curPage + 1,
    });
    this.updateClasses();
  },
  onPageSizeChange(e) {
    console.log(e.detail.value);
    // write your code here
  },
  onHightlightChange(e) {
    console.log(e.detail.value);
    // write your code here
  },
});
