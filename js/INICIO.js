document.getElementById("calculateButton").addEventListener("click", function() {
  const expression = document.getElementById("expression").value;
  const variable = document.getElementById("variable").value;

  if (expression && variable) {
      const result = math.derivative(expression, variable).toString();
      
      // Display the result
      document.getElementById("output").innerHTML = result;

      // Add to history
      const historyItem = document.createElement("li");
      historyItem.innerHTML = `Expresión: ${expression} <br> Variable: ${variable} <br> Resultado: ${result}`;
      document.getElementById("historyList").prepend(historyItem);

      // Scroll the new history item into view
      historyItem.scrollIntoView({ behavior: 'smooth', block: 'end' });

      // Render MathJax
      MathJax.typeset();
  }
});

document.getElementById("logo").addEventListener("click", function() {
  location.reload();
});

document.getElementById("toggleHistoryButton").addEventListener("click", function() {
  const history = document.getElementById("history");
  history.style.display = history.style.display === 'none' || history.style.display === '' ? 'block' : 'none';
});

document.getElementById("clearHistoryButton").addEventListener("click", function() {
  document.getElementById("historyList").innerHTML = '';
});
// Mostrar la barra lateral
const history = document.getElementById("history");
history.style.display = "block";

// Renderizar MathJax para mostrar las derivadas correctamente
MathJax.typeset();

// Mostrar el resultado
const result = math.derivative(expression, variable).toString();
document.getElementById("output").innerHTML = result;
const historyItem = document.createElement("li");
historyItem.innerHTML = `Expresión: \[${expression}\] <br> Variable: \[${variable}\] <br> Resultado: \[${result}\]`;
document.getElementById("historyList").prepend(historyItem);
window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)'], ['\\[', '\\]']], // Puedes añadir otros delimitadores aquí
    tags: 'ams'
  },
  startup: {
    ready: function() {
      MathJax.startup.defaultReady();
      // Tu código existente aquí
    }
  }
};
