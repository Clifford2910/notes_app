(function(exports) {
  function NoteList() {
    this.array = []
  };

  NoteList.prototype.returnList = function() {
    return this.array;
  };

  NoteList.prototype.createAndStore = function(note) {
    this.array.push(note.text);
  };

  exports.NoteList = NoteList;
})(this);
