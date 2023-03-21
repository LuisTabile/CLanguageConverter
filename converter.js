function convertToPython() {
    // Obtenha o código em C do input
    const cCode = document.getElementById("c-code").value;
  
    // Faça a conversão do código em C para Python
    const pythonCode = cToPython(cCode);
  
    // Exiba o código em Python no input
    document.getElementById("python-code").value = pythonCode;
  }
  
  function cToPython(cCode) {
    // Substitua as palavras-chave em C pelas equivalentes em Python
    const pythonCode = cCode
      .replace(/int/g, "int")
      .replace(/float/g, "float")
      .replace(/char/g, "str")
      .replace(/void/g, "None")
      .replace(/if/g, "if")
      .replace(/else/g, "else")
      .replace(/while/g, "while")
      .replace(/for/g, "for")
      .replace(/return/g, "return");
  
    // Adicione indentação correta para Python
    const lines = pythonCode.split("\n");
    let indentationLevel = 0;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.endsWith("{")) {
        lines[i] = "  ".repeat(indentationLevel) + line;
        indentationLevel++;
      } else if (line.endsWith("}")) {
        indentationLevel--;
        lines[i] = "  ".repeat(indentationLevel) + line;
      } else {
        lines[i] = "  ".repeat(indentationLevel) + line;
      }
    }
  
    return lines.join("\n");
  }
  