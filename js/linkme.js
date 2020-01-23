function enviar () {
  var emaliValue = document.getElementById('emailTxt').value;
  var areaValue = document.getElementById('areaTxt').value;
  var timestamp = new Date().getTime();

//   console.log(emaliValue);
//   console.log(areaValue);
//   A variavel database vai recer as funções de acesso ao banco de dados.
  var database = firebase.database();
  database.ref(timetamp).set({
      email:emaliValue,
      mensagem:areaValue
  });

}