function Parser() {
  command = document.getElementById("vvod").value;

  if (command == "show") {
    document.getElementById("spinningTheWheel").style.display = 'flex';
    document.getElementById("main_text").innerHTML = "Вот тебе небольшая подсказка.<br>Жду тебя";
    document.getElementById("vvod").value = "";

    const TypeExternal = new CircleType(document.getElementById('text1'));
    const TypeInternal = new CircleType(document.getElementById('text2'));
    TypeExternal.radius().dir(1);
    TypeInternal.radius().dir(1);
  }
  else if (command == "help") {

  }
  else if (command == "ifconfig") {
    document.getElementById("ipAdress").style.display = 'flex';
    document.getElementById("main_text").innerHTML = "Твой IP адрес: 192.168.5.103<br>Маска сети: 255.255.255.0<br>Чтобы увидеть список команд напиши команду: help";
  }
  else if (command == "ping 192.168.5.122") {

  }
  else if (command == "ping 127.200.35.1") {

  }
  else if (command == "ping 157.182.77.3") {

  }
  else if (command == "all") {
    document.getElementById("main_text").innerHTML = "ПК1: 192.168.5.122<br>ПК2: 127.200.35.1<br>ПК3: 157.182.77.3<br><br>Чтобы увидеть список команд напиши команду: help";
  }
  else if (command == "msg") {

  }

  document.getElementById("vvod").value = "";
}
