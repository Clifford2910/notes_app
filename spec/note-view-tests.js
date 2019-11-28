function testReturnOneHTML() {
  var noteList = new NoteList;
  var note = new Note("Hello");
  noteList.createAndStore(note);
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.returnHTML() === "<ul><li><div>Hello</div></li></ul>");
};
testReturnOneHTML();

function testReturnMultipleHTML() {
  var noteList = new NoteList;
  var note = new Note("Hello");
  var note1 = new Note("Goodbye");
  noteList.createAndStore(note);
  noteList.createAndStore(note1);
  var noteListView = new NoteListView(noteList)
  assert.isTrue(noteListView.returnHTML() === "<ul><li><div>Hello</div></li><li><div>Goodbye</div></li></ul>");
};
testReturnMultipleHTML();

function testReturnNoHTML() {
  var noteList = new NoteList;
  var noteListView = new NoteListView(noteList)
  assert.isTrue(noteListView.returnHTML() === "<ul></ul>");
};
testReturnNoHTML();
