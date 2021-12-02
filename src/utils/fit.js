export const onloadLayout = () => {
  //获取当前浏览器窗口宽度(这里的实质就是body宽度)
  let win_w = document.body.offsetWidth;
  //定义变量
  let fontSize = 16;
  //如果浏览器窗口宽度(这里的实质就是body宽度)值小于320，取320
  win_w = Math.max(320, win_w);
  fontSize = win_w / 1600 * 16
  //设置根元素的大小
  document.getElementsByTagName('html')[0].style.fontSize = fontSize + 'px';
  //浏览器窗口宽度发生变化时条用这个函数，方便与改变窗口大小时候调试
  //@ts
  window.onresize = onloadLayout;
}