(function(window) {

    var NotesController = function() {
        this.counter = 0;
        this.notes = {};
    };

    NotesController.prototype.createNote = function(text) {
        return {
            id: ++this.counter,
            text: text
        };
    };

    NotesController.prototype.saveNote = function(note) {
        this.notes[note.id] = note;
    };

    NotesController.prototype.removeNote = function(id) {
        delete this.notes[id];
    };

    window.NotesController = NotesController;

})(window);