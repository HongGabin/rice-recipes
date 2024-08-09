// 다크 모드 토글
let Links = {
  setColorLinks: function(color) {
    let aList = document.querySelectorAll('a')
      , i = 0;
    while (i < aList.length) {
      aList[i].style.color = color;
      i = i + 1;
    }
  }
}
let Body = {
  setColorBackground: function(color) {
    document.querySelector('body').style.backgroundColor = color;
  },
  setColorFont: function(color) {
    document.querySelector('body').style.color = color;
  }
}
function darkLightHandler(self) {
  if (self.value === '다크 모드') {
    Body.setColorBackground('black');
    Body.setColorFont('white');
    self.value = '라이트 모드';
    Links.setColorLinks('yellow');
  } else {
    Body.setColorBackground('white');
    Body.setColorFont('black');
    self.value = '다크 모드';
    Links.setColorLinks('green');
  }
}