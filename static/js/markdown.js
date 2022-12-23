document.addEventListener('DOMContentLoaded', function() {
  // Finde alle Code-Blöcke im Dokument
  var codeBlocks = document.querySelectorAll('pre code');
  // Füge für jeden Code-Block einen Kopier-Button hinzu
  codeBlocks.forEach(function(codeBlock) {
    // Erstelle einen Button
    var button = document.createElement('button');
    button.textContent = 'Copy';
    // Füge den Button als erstes Kindelement des Code-Blocks hinzu
    codeBlock.parentNode.insertBefore(button, codeBlock);
    // Füge einen Klick-Handler für den Button hinzu
    button.addEventListener('click', function () {
      // Change the text of the button to "Copied"
      button.textContent = 'Copied';
      // Erstelle ein temporäres Textarea-Element
      const textarea = document.createElement('textarea');
      // Setze den Inhalt des Code-Blocks als Wert des Textarea
      textarea.value = codeBlock.innerText;
      // Füge das Textarea dem Dokument hinzu
      document.body.appendChild(textarea);
      // Markiere den Inhalt des Textarea
      textarea.select();
      // Kopiere den markierten Inhalt
      document.execCommand('copy');
      // Entferne das Textarea wieder aus dem Dokument
      document.body.removeChild(textarea);
      // Entferne die Meldung nach 2 Sekunden
      setTimeout(function () {
        button.textContent = 'Copy';
      }, 1000);
    });
  });
});
