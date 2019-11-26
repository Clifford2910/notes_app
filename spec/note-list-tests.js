function testReturnNoteList() {
  var list = new NoteList();
  var note = new Note("Hello");
  list.createAndStore(note);
  assert.isTrue(list.returnList === ["Hello"]);
};
testReturnNoteList();

function testCreateAndStoreNote() {
  var
}
