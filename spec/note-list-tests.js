function testReturnNoteList() {
  var list = new NoteList;
  assert.isTrue(list.returnList() === list.array);
};
testReturnNoteList();

function testCreateAndStoreList() {
  var list = new NoteList;
  var note = new Note("Hello");
  var note1 = new Note("Goodbye");
  list.createAndStore(note);
  list.createAndStore(note1);
  assert.isTrue(list.returnList()[0] === "Hello");
  assert.isTrue(list.returnList()[1] === "Goodbye");
};
testCreateAndStoreList();
