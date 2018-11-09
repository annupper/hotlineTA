
document.querySelectorAll(".ta").forEach(element => {
  var character = element.classList[1];
  // Get character name from second class in tag
  element.onclick = function(){ window.location.href = 'home.html?player=' + character; };
});

