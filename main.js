alert("Текст для ввода на экран")

function notifyMe() {
    // Проверка поддержки браузером уведомлений
    if (!("Notification" in window)) {
    alert("Этот браузер не поддерживает уведомления на рабочем столе");
    }
    
    // Проверка разрешения на отправку уведомлений
    else if (Notification.permission === "granted") {
    // Если разрешено, то создаем уведомление
    var notification = new Notification("Hi there!");
    }
    
    // В противном случае, запрашиваем разрешение
    else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
    // Если пользователь разрешил, то создаем уведомление 
    if (permission === "granted") {
    var notification = new Notification("Hi there!");
    }
    });
    }
    }

    notifyMe()

    elem.onclick = function() {
        console.log(window.location.href);
        window.location.assign('https://www.google.ru/');
    };