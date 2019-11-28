(function(exports) {
  function NoteListView(noteList) {
    this.list = noteList
  }

  NoteListView.prototype.returnHTML = function() {
    var aStringOfHTML = []

    for (var i = 0; i < this.list.array.length; i++) {
      aStringOfHTML.push("<li><div>" + this.list.array[i] + "</div></li>")
    };

    aStringOfHTML.unshift("<ul>")
    aStringOfHTML.push("</ul>")

    return aStringOfHTML.join("");
  }

  exports.NoteListView = NoteListView;
})(this);
