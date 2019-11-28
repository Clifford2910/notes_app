(function(exports) {
  function NoteListView(noteList) {
    this.list = noteList
  };

  NoteListView.prototype.returnHTML = function() {
    return "<ul><li><div>" + this.list.array[0] + "</div></li></ul>"
  };

  exports.NoteListView = NoteListView;
})(this);
