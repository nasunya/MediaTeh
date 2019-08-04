alert("Текст для ввода на экран")

function notifyMe() {
  if (!("Notification" in window)) {
  alert("Этот браузер не поддерживает уведомления на рабочем столе");
  }
  else if (Notification.permission === "granted") {
  var notification = new Notification("Привет! Теперь ты будешь в курсе всех новостей :)");
  }
  else if (Notification.permission !== 'denied') {
  Notification.requestPermission(function (permission) {
  if (permission === "granted") {
  var notification = new Notification("Привет! Теперь ты будешь в курсе всех новостей :)");
  }
  });
  }
  }
  notifyMe()

  elem.onclick = function() {
    var link                   = document.location.search.substr(5);
        document.location.href = link;
  };