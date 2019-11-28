function testReturnNoteList() {
  var noteList = new NoteList;
  assert.isTrue(noteList.returnList() === noteList.array);
};
testReturnNoteList();

function testCreateAndStoreList() {
  var noteList = new NoteList;
  var note = new Note(this.text);
  var note1 = new Note(this.text);
  noteList.createAndStore(note);
  noteList.createAndStore(note1);
  assert.isTrue(noteList.returnList()[0] === note.text);
  assert.isTrue(noteList.returnList()[1] === note1.text);
};
testCreateAndStoreList();
