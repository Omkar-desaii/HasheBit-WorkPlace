function createDiv(width, height, text) {
    var newDiv = document.createElement('div');
    newDiv.style.width = width + 'px';
    newDiv.style.height = height + 'px';
    newDiv.style.color="gold"
    newDiv.style.backgroundColor="black"
    newDiv.textContent = text;

    // Append the new div to the #container div
    document.getElementById('container').appendChild(newDiv);
  }
  createDiv(500, 100, 'I am Hashebit Student');