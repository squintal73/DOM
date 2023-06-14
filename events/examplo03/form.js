var fsList = document.querySelectorAll(".multiple");

for (var i = 0; i < fsList.length; i++) {
  initListFieldSet(fsList[i]);
}

function initListFieldSet(fs) {

  var addButton = document.createElement("button");
      addButton.textContent = "Adicionar";
      addButton.type = "button";
      fs.appendChild(addButton);
  
  var firstInput = fs.querySelector("input");

  addButton.addEventListener("click", () => {
    var addDiv = document.createElement("div");
    var addInput = document.createElement("input");
    var deleteButton = document.createElement("button"); 
   
    addInput.name = firstInput.name;
    addInput.type = firstInput.type; 
    deleteButton.textContent = "Excluir";
    deleteButton.type = "button";
    addDiv.appendChild(addInput);
    addDiv.appendChild(deleteButton);

    deleteButton.addEventListener("click", () => {
        alert("Confirme Exclusão !");
        fs.removeChild(addDiv);
      });

    fs.insertBefore(addDiv,addButton);
  });
}