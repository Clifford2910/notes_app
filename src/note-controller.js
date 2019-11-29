(function(exports) {
  function NoteController(noteList) {
    noteView = new NoteView(noteList)
  };

  NoteController.prototype.addHTML = function () {
    element = document.getElementById("app")
    element.innerHTML = noteView.returnHTML();
    return element.innerHTML
  };

  exports.NoteController = NoteController
})(this);
