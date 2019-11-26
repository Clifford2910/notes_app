(function(exports) {
  function NoteList() {
    this.list = []
  };

  NoteList.prototype.returnList = function() {
    return this.list;
  };

  NoteList.prototype.createAndStore = function(note) {
    var myList = new NoteList;
    var note = new Note(note);
    this.list.push(note.text);
    return note.text
  };

  exports.NoteList = NoteList;
})(this);
