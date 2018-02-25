// 游戏全局的入口文件
// var canvas = wx.createCanvas();
var canvas = document.getElementById('game_canvas');
// 可以在屏幕左上角看到一个 100x100 的红色矩形。
var context = canvas.getContext('2d');
context.fillStyle = 'red';
context.fillRect(0, 0, 200, 200);