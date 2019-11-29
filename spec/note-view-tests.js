function testReturnOneHTML() {
  var noteList = new NoteList;
  var note = new Note(this.text);
  noteList.createAndStore(note);
  var noteListView = new NoteView(noteList);
  assert.isTrue(noteListView.returnHTML() === "<ul><li><div>" + note.text + "</div></li></ul>");
};
testReturnOneHTML();

function testReturnMultipleHTML() {
  var noteList = new NoteList;
  var note = new Note(this.text);
  var note1 = new Note(this.text);
  noteList.createAndStore(note);
  noteList.createAndStore(note1);
  var noteListView = new NoteView(noteList)
  assert.isTrue(noteListView.returnHTML() === "<ul><li><div>" + note.text + "</div></li><li><div>" + note1.text + "</div></li></ul>");
};
testReturnMultipleHTML();

function testReturnNoHTML() {
  var noteList = new NoteList;
  var noteListView = new NoteView(noteList)
  assert.isTrue(noteListView.returnHTML() === "<ul></ul>");
};
testReturnNoHTML();
