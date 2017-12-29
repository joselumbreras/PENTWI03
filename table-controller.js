(function(window) {

    var TableController = function($noteTable, notesController) {
        this.$noteTable = $noteTable;
        this.notesController = notesController;
    };

    TableController.prototype.onRemoveNote = function() {
        var self = this;
        return function() {
            var row = $(this).parent().parent();
            var id = $(this).data().id;

            self.notesController.removeNote(id);

            row.fadeOut('normal', function() {
                $(this).remove();
            });
        };
    };

    TableController.prototype.appendRow = function(note) {
        var actions = '<td><button class="remove-note" data-id="' + note.id + '">Eliminar</button></td>';
        var row = $('<tr><td>' + note.id + '</td><td>' + note.text + '</td>' + actions + '</tr>');
        row.hide();
        this.$noteTable.find('tbody').append(row);
        row.show('slow');
    };

    window.TableController = TableController;

})(window);