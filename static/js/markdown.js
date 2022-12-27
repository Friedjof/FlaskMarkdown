document.addEventListener('DOMContentLoaded', function() {
  addCopyButton();
  addCollapsibleCodeBlocks();
});

function addCollapsibleCodeBlocks() {
  // Finde alle Code-Blöcke im Dokument
  var codeBlocks = document.querySelectorAll('pre code');
  // Füge für jeden Code-Block einen Einklapp-Button hinzu
  codeBlocks.forEach(function(codeBlock) {
    // Erstelle einen Button
    var button = document.createElement('button');
    button.textContent = 'Collapse';
    // Füge den Button als erstes Kindelement des Code-Blocks hinzu
    codeBlock.parentNode.insertBefore(button, codeBlock);

    const codeBlockLines = codeBlock.innerText.split('\n');
    const firstLine = codeBlockLines[0];

    // Der code block Titel ist der erste Teil der ersten Zeile bis zum 20. Zeichen
    const codeBlockTitle = firstLine.substring(0, 100) + ' […]';

    const codeBlockTitleElement = document.createElement('span');
    codeBlockTitleElement.textContent = codeBlockTitle;
    codeBlockTitleElement.classList.add('code-block-title');
    codeBlockTitleElement.style.display = 'none';
    codeBlock.parentNode.insertBefore(codeBlockTitleElement, codeBlock);

    // Füge einen Klick-Handler für den Button hinzu
    button.addEventListener('click', function() {
      // Wechsle die Sichtbarkeit des Code-Blocks
      codeBlock.style.display = codeBlock.style.display === 'none' ? 'block' : 'none';
      // Wechsle den Text des Buttons
      button.textContent = button.textContent === 'Collapse' ? 'Expand' : 'Collapse';
      // Zeige den Titel des Code-Blocks an, wenn der Code-Block eingeblendet ist
      codeBlockTitleElement.style.display = codeBlock.style.display === 'none' ? 'block' : 'none';
    });
    // Klick auf den Button Collapse/Expand, wenn der Code-Block mehr als 2 Zeilen hat
    if (codeBlock.innerText.split('\n').length > 10) {
      button.click();
    }
    // Klick auf den Code-Block-Titel löst ein Klick auf den Collapse/Expand-Button aus
    codeBlockTitleElement.addEventListener('click', function() {
      button.click();
    });
  });
}

function addCopyButton() {
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
}