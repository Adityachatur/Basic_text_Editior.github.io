// change the font size 
const fontSizeInput = document.getElementById('fontSizeInput');
const fontSizeButton = document.getElementById('fontSizeButton');
  const editor = document.getElementById('editor');
  fontSizeButton.addEventListener('click', function() {
    toggleFontSize();
    function toggleFontSize() {
    const fontSizeValue = fontSizeInput.value;
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);

    if (range.toString() !== "") {
        const span = document.createElement('span');
        span.style.fontSize = fontSizeValue + "px";

        range.surroundContents(span);
        selection.removeAllRanges();
    }
}
});

  // text change to bold
  function toggleBold() {
    document.execCommand('bold', false, null);
  }


  // text change to italic
  function toggleItalic() {
    document.execCommand('italic', false, null);
  }
  

  // text  add to underline
  function toggleUnderline() {
    document.execCommand('underline', false, null);
  }
  


// text alignment change 
  function toggleAlignment(alignment) {
    var selectedText = window.getSelection().toString();
    
    if (selectedText) {
      var lines = selectedText.split('\n');
      var alignedLines = lines.map(line => `<div style="text-align: ${alignment};">${line}</div>`);
      var newContent = alignedLines.join('');
      
      document.execCommand('insertHTML', false, newContent);
    }
  }
  

  // text color change
  function changeColor() {
    var color = document.getElementById("colorPicker").value;
    document.execCommand('foreColor', false, color);
  }



// text change to uppercase and lowercase
  function toggleCase() {
    var selectedText = window.getSelection().toString();
    var newText = selectedText === selectedText.toLowerCase()
      ? selectedText.toUpperCase()
      : selectedText.toLowerCase();
    document.execCommand('insertText', false, newText);
  }


// text can be save to file in TXT file 
  function saveToFile() {
    var textToSave = document.getElementById('editor').textContent;
    var fileName = window.prompt("Enter file name", "myTextFile.txt");
    
    if (fileName !== null) {
      var blob = new Blob([textToSave], { type: 'text/plain' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = fileName;
      
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  }
  
  //save the text in first file
  function saveText() {
    var textToSave = document.getElementById('editor').textContent;
    localStorage.setItem('savedText', textToSave);
    alert('Text saved successfully.');
  }



  //open file
  function openFile() {
    document.getElementById('fileInput').click();
  }
  function readFileContent(input) {
    const file = input.files[0];
    const reader = new FileReader();
    
    reader.onload = function(e) {
      document.getElementById('editor').textContent = e.target.result;
    };
    
    reader.readAsText(file);
  }



  const imageInput = document.getElementById('imageInput');
imageInput.addEventListener('change', function(event) {
    insertImage(event.target.files[0]);
    function insertImage(file) {
      if (file) {
          const reader = new FileReader();
          reader.onload = function(event) {
              const img = document.createElement('img');
              img.src = event.target.result;
              editor.appendChild(img);
          };
          reader.readAsDataURL(file);
      }
  }
});

