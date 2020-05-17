// collapsible of the player list
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

// var modal
var updateModal = document.getElementById("updateModal");
var updateBtn = document.getElementById("updateBtn");
var span1 = document.getElementsByClassName("close1")[0];
var span2 = document.getElementsByClassName("close2")[0];
var notiModal = document.getElementById("notiModal");
var notiBtn = document.getElementById("notiBtn");


// ! update modal
// open modal
updateBtn.onclick = function(){
    updateModal.style.display = "block";
}
// close modal
span1.onclick = function(){
    updateModal.style.display = "none";
}

window.onclick = function(event){
    if(event.target == updateModal){
        updateModal.style.display = "none";
    }
    if(event.target == notiModal){
      this.notiModal.style.display = "none";
    }
}

// ! notification modal
notiBtn.onclick = function(){
  notiModal.style.display = "block";
}
// close modal
span2.onclick = function(){
  notiModal.style.display = "none";
}


