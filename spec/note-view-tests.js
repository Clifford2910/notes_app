function testReturnOneHTML() {
  var list = new NoteList;
  var note = new Note("Hello");
  list.createAndStore(note);
  var notelist = new NoteListView(note)
  assert.isTrue(list.returnHTML() === "<ul><li><div>Hello</div></li></ul>");
};
testReturnOneHTML();
