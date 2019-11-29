(function(exports) {
  function NoteView(noteList) {
    this.list = noteList
  }

  NoteView.prototype.returnHTML = function() {
    var aStringOfHTML = []

    for (var i = 0; i < this.list.array.length; i++) {
      aStringOfHTML.push("<li><div>" + this.list.array[i] + "</div></li>")
    };

    aStringOfHTML.unshift("<ul>")
    aStringOfHTML.push("</ul>")

    return aStringOfHTML.join("");
  }

  exports.NoteView = NoteView;
})(this);
