function testAddHTMLToApp() {
  var note = new Note(this.text)
  var note1 = new Note(this.text)
  var noteList = new NoteList
  noteList.createAndStore(note)
  noteList.createAndStore(note1)
  var noteView = new NoteView(noteList)
  var noteController = new NoteController(noteList)
  noteController.addHTML()
  assert.isTrue(element.innerHTML === "<ul><li><div>" + note.text + "</div></li><li><div>" + note1.text + "</div></li></ul>");
};
testAddHTMLToApp();
