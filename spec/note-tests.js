function testNoteEqualsReturnNote() {
  var note = new Note(this.text);
  assert.isTrue(note.text === this.text);
};
testNoteEqualsReturnNote();
