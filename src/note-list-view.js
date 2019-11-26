(function(exports) {
  function NoteListView(noteList) {
    this.list = noteList
  };

  NoteList.prototype.returnHTML = function() {
    return "<ul><li><div>" + list.array[0] + "</div></li></ul>"
  };

  exports.NoteListView = NoteListView;
})(this);

var list = new NoteList;
var note = new Note("Hello");
list.createAndStore(note);
var notelist = new NoteListView(note)
