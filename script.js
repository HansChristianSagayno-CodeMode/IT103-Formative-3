function replaceAllSpaces() {
  const txtInput = document.getElementById("txtInput");
  const txtResult = document.getElementById("txtResult");

  let input = txtInput.value.trim();         
  let output = input.replaceAll(" ", "");    

  txtResult.textContent = output === "" ? "Result here" : output;
}

