(function(exports) {
  function NoteView(noteList) {
    this.list = noteList
  }

  NoteView.prototype.textTruncate = function(str, length, ending) {
    if (length == null) {
      length = 20;
    }
    if (ending == null) {
      ending = '...';
    }
    if (str.length > length) {
      return str.substring(0, length) + ending;
    } else {
      return str;
    }
  };

  NoteView.prototype.returnHTML = function() {
    var aStringOfHTML = []

    for (var i = 0; i < this.list.array.length; i++) {
      aStringOfHTML.push("<li><div>" + this.textTruncate(this.list.array[i] + "") + "</div></li>")
    };

    aStringOfHTML.unshift("<ul>")
    aStringOfHTML.push("</ul>")

    return aStringOfHTML.join("");
  }


  exports.NoteView = NoteView;
})(this);
