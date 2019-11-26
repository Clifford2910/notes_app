function testNoteEqualsReturnNote() {
  var note = new Note("Hello");
  assert.isTrue(note.text === "Hello");
};
testNoteEqualsReturnNote();
