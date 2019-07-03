// 时间戳转换
export function formateTime(t, type) {
  let time = new Date(t);
  let weekday = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  let y = time.getFullYear();
  let m = time.getMonth() + 1;
  let d = time.getDate();
  let h = time.getHours();
  let mm = time.getMinutes();
  let s = time.getSeconds();
  let w = weekday[time.getDay()];
  if (type === 1) { // 月-日 星期 时：分
    return [m, d].map(formatNumber).join('-') + ' ' + w + ' ' + [h, mm].map(formatNumber).join(':');
  } else if (type === 2) {
    return [y, m, d].map(formatNumber).join('-') + ' ' + [h, mm, s].map(formatNumber).join(':');
  } else if (type === 3) {
    return m + '月' + d + '日' + ' ' + [h, mm].map(formatNumber).join(':');
  }
};

// 计算课程场次时间
export const formateLong = (startTime, endTime) => {
  let start = new Date(startTime);
  let end = new Date(endTime);
  const startYea = start.getFullYear();
  const startMon = start.getMonth() + 1;
  const startDay = start.getDate();
  const startHou = start.getHours();
  const startMin = start.getMinutes();
  const endHou = end.getHours();
  const endMin = end.getMinutes();
  return [startYea, startMon, startDay].map(formatNumber).join('-') + ' ' + [startHou, startMin].map(formatNumber).join(':') + '-' + [endHou, endMin].map(formatNumber).join(':');
};

// 数字加0格式化
export const formatNumber = n => {
  n = n.toString();
  return n[1] ? n : '0' + n;
};

// /n过滤
export function formatText(value) {
  return value.replace(/<[^>]*>/g, '').replace(/[\n]/gi, '</br>');
};

// 时间戳 小时：分钟 格式化
export function houMinTime (time) {
  const date = new Date(time);
  const hour = date.getHours();
  const minute = date.getMinutes();
  return [hour, minute].map(formatNumber).join(':');
}

// 价格加.00格式化
export function formateAmount(n) {
  n = n.toString();
  return n.indexOf('.') > -1 ? n : n + '.00';
}
