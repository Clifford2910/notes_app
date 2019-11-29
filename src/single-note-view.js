(function(exports) {
  function SingleNoteView(note) {
    singleNote = note
  };

  SingleNoteView.prototype.returnSingleHTML = function () {
    return "<div>" + singleNote.text + "</div>"
  };

  exports.SingleNoteView = SingleNoteView
})(this);
