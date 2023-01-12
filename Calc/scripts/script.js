function calcular(n1, n2) {
  n1 = parseFloat(document.getElementById("n1").value);
  n2 = parseFloat(document.getElementById("n2").value);

  selector = document.getElementById("selector").value;

  switch (selector) {
    case "+":
      resultado = n1 + n2;
      document.getElementById("resultado").innerHTML =
        "O resultado é: " + resultado;
      break;

    case "-":
      resultado = n1 - n2;
      document.getElementById("resultado").innerHTML =
        "O resultado é: " + resultado;
      break;

    case "*":
      resultado = n1 * n2;
      document.getElementById("resultado").innerHTML =
        "O resultado é: " + resultado;
      break;

    case "/":
      resultado = n1 / n2;
      document.getElementById("resultado").innerHTML =
        "O resultado é: " + resultado.toFixed(2);
      break;
  }
}
