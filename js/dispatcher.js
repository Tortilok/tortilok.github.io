function Parser() {
  command = document.getElementById("vvod").value;

  if (command == "show") {
    document.getElementById("spinningTheWheel").style.display = 'flex';
    document.getElementById("vvod").value = "";
    
    const TypeExternal = new CircleType(document.getElementById('text1'));
    const TypeInternal = new CircleType(document.getElementById('text2'));
    TypeExternal.radius().dir(1);
    TypeInternal.radius().dir(1);
  }
  else if (command == "help") {
    console.log("help");
  }

  document.getElementById("vvod").value = "";
}
