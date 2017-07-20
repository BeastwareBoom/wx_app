function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function getCurTime(){
  return formatTime(new Date())
}

//使用module.exports.xxx
// module.exports = {
//   formatTime: formatTime,
//   getCurTime: getCurTime
// }

module.exports.getCurTime = getCurTime;
module.exports.formatTime = formatTime;