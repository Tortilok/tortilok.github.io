function Parser() {
  var command = document.getElementById("vvod").value;

  if (command == "show") {
    document.getElementById("spinningTheWheel").style.display = 'flex';
    document.getElementById("main_text").innerHTML = "Вот тебе колесо помощник в решение моей задачки.<br>Прфцс р умъцф цлхрф юймъцф?";
    document.getElementById("vvod").value = "";

    const TypeExternal = new CircleType(document.getElementById('text1'));
    const TypeInternal = new CircleType(document.getElementById('text2'));
    TypeExternal.radius().dir(1);
    TypeInternal.radius().dir(1);
  }

  else if (command == "help") {
    document.getElementById("main_text").innerHTML = "Доступные команды:<br>ping - проверить связь с другим компьютером. Пример: ping 192.168.1.1 <br>all - показывает IP адреса ПК.<br>ifconfig - узнать свой IP адрес.<br>msg - отправить сообщение по IP аресу. Пример: msg 192.168.5.122 привет";
  }

  else if (command == "ifconfig") {
    document.getElementById("ipAdress").style.display = 'flex';
    document.getElementById("main_text").innerHTML = "Твой IP адрес: 192.168.5.103<br>Чтобы увидеть список команд напиши команду: help";
  }

  else if (command.indexOf("ping") == 0) {
    temp = command.split(" ");
    if (temp[1] == "192.168.5.122") {
      document.getElementById("box1").style.display = 'flex';
      document.getElementById("main_text").innerHTML = "Проверка соединения:<br>";
      for (var i = 0; i < 5; i++) {
        var text = document.getElementById("main_text").innerHTML;
        document.getElementById("main_text").innerHTML = text + i +": Соединение успешно. Задержка: " + (10+i-i*2) + ".<br>";
      }
    }
    else if (temp[1] == "127.200.35.1") {
      document.getElementById("box2").style.display = 'flex';
      document.getElementById("main_text").innerHTML = "Проверка соединения:<br>";
      for (var i = 0; i < 5; i++) {
        var text = document.getElementById("main_text").innerHTML;
        if (i < 3) {
          document.getElementById("main_text").innerHTML = text + i +": Соединение успешно. Задержка: " + (1000-i) + ".<br>";
        }
        else {
          document.getElementById("main_text").innerHTML = text + i +": Соединение неустановлено.<br>";
        }
      }
    }
    else if (temp[1] == "157.182.77.3") {
      document.getElementById("box3").style.display = 'flex';
      document.getElementById("main_text").innerHTML = "Проверка соединения:<br>";
      for (var i = 0; i < 5; i++) {
        var text = document.getElementById("main_text").innerHTML;
        document.getElementById("main_text").innerHTML = text + i +": Соединение неустановлено.<br>";
      }
    }
    else if (temp[1] == "192.168.5.103") {
      document.getElementById("ipAdress").style.display = 'flex';
      document.getElementById("main_text").innerHTML = "Проверка соединения:<br>";
      for (var i = 0; i < 5; i++) {
        var text = document.getElementById("main_text").innerHTML;
        document.getElementById("main_text").innerHTML = text + i +": Соединение успешно. Задержка: " + 1 + ".<br>";
      }
    }
    else {
      document.getElementById("main_text").innerHTML = "Такого IP адреса нету.<br> Для просмотра списка IP адресов наберите команду: all<br>Чтобы увидеть список команд напиши команду: help";
    }
  }

  else if (command == "all") {
    document.getElementById("main_text").innerHTML = "ПК1: 192.168.5.122<br>ПК2: 127.200.35.1<br>ПК3: 157.182.77.3<br>ПК4: 192.168.5.103<br>Чтобы увидеть список команд напиши команду: help";
  }

  else if (command.indexOf("msg") == 0) {
    temp = command.split(" ");

    if (temp[1] == "192.168.5.122") {
      //8 сдвиг
      if (temp[2] == "мутз") {
        document.getElementById("win").style.display= "flex";
      }
      else {
        document.getElementById("main_text").innerHTML = "Ты чего обзываешься? Кажется твои сообщения были перехвачены.<br>Я буду с тобой общаться после решение моей загадки:<br>Прфцс р умъцф цлхрф юймъцф?<br>Для вызова помощника напиши show.";
      }
    }
    else {
      document.getElementById("main_text").innerHTML = "Не могу доставить сообщение, соединение неустановлено.";
    }
  }

  else {
    document.getElementById("main_text").innerHTML = "Такой команды нету.<br>Чтобы увидеть список команд напиши команду: help";
  }

  document.getElementById("vvod").value = "";
}
