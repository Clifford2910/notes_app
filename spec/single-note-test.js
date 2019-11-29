function testReturnSingleHTML() {
  var note = new Note("Hello")
  var singleNoteView = new SingleNoteView(note)
  assert.isTrue(singleNoteView.returnSingleHTML() === "<div>" + note.text + "</div>");
};
testReturnSingleHTML();
