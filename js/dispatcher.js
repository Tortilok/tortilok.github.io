var count1 = 0;
var flag = 1;

function Parser() {
  var command = document.getElementById("vvod").value;

  if (command == "show") {
    document.getElementById("spinningTheWheel").style.display = 'flex';
    if (count1 <= 2) {
      document.getElementById("main_text").innerHTML = "Вот тебе колесо помощник в решение моей задачки.<br>Прфцс р умъцф цлхрф юймъцф?";
    }
    else {
      document.getElementById("main_text").innerHTML = "Вот тебе колесо помощник в решение моей задачки.<brОцт еяп млтефицдципир бцтжт ьмшфд?";
    }

    document.getElementById("vvod").value = "";

    if (flag == 1) {
      flag = 0;
      const TypeExternal = new CircleType(document.getElementById('text1'));
      const TypeInternal = new CircleType(document.getElementById('text2'));
      TypeExternal.radius(0).dir(1);
      TypeInternal.radius(0).dir(1);
    }
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
      if (temp[2].toLowerCase() == "мутз") {
        document.getElementById("main_text").innerHTML = "Молодец ты решил верно мою загадку.<br>Держи тогда следующую:<br>Оцт еяп млтефицдципир бцтжт ьмшфд?";
        count1 = 3;
      //  document.getElementById("win").style.display= "flex";
      }
      else if (count1 == 1) {
        document.getElementById("main_text").innerHTML = "Здесь используется сдвиг на 8 букв.<br>Прфцс р умъцф цлхрф юймъцф?";
        count1 = count1 + 1;
      }
      else if (count1 == 2) {
        document.getElementById("main_text").innerHTML = "Ответ: елка.<br>Сама загадка звучала так: Зимой и летом одним цветом?<br>Сдвиг был на 8 букв.<br> Но не расстраивайся вот тебе еще одна загадка: Оцт еяп млтефицдципир бцтжт ьмшфд?";
        count1 = count1 + 1;
      }
      //4 сдвиг
      else if (temp[2].toLowerCase() == "ъилдфа") {
        document.getElementById("main_text").innerHTML = "Ура-Ура! Все верно!<br>У тебя появилась кнопка и по ней ты можешь оставить свой отзыв об игре.";
        document.getElementById("win_button").style.display= "flex";
      }
      else if (count1 == 3) {
        document.getElementById("main_text").innerHTML = "Здесь используется сдвиг на 4 буквы.<br>Оцт еяп млтефицдципир бцтжт ьмшфд?";
        count1 = count1 + 1;
      }
      else if (count1 >= 4) {
        document.getElementById("main_text").innerHTML = "Ответ: цезарь.<br>Сама загадка звучала так: Кто был изобретателем шифра?<br>Сдвиг был на 4 буквы.<br> Но не расстраивайся все еще получится в следующий раз, а пока ты можешь оставить свой отзыв по кнопке которая появилась.";
        document.getElementById("win_button").style.display= "flex";
      }
      else {
        document.getElementById("main_text").innerHTML = "Ты чего обзываешься? Кажется твои сообщения были перехвачены.<br>Я буду с тобой общаться после решение моей загадки:<br>Прфцс р умъцф цлхрф юймъцф?<br>Для вызова помощника напиши show.";
        count1 = count1 + 1;
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
