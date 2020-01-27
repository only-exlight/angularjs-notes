import { IComponentOptions } from 'angular';
import { NoteModel } from 'src/app/models';
import { NoteService } from 'src/app/services/note.service';

class AddNote {
  public note: NoteModel = new NoteModel();
  public title: string;

  constructor(
    private noteService: NoteService,
    private $location: any,
    private $routeParams: any,
  ) {
    const id = Number(this.$routeParams.id);
    const note = this.noteService.getByTimeStamp(id);
    if (!Number.isNaN(id) && note) {
      this.note = new NoteModel(note.toJSON());
      this.title = 'Edit note';
    } else {
      this.title = 'Add new note';
    }
  }

  public saveNote() {
    const id = Number(this.$routeParams.id);
    if (!Number.isNaN(id)) {
      this.noteService.saveEditedItem(id, this.note);
    } else {
      this.noteService.addNote(this.note);
    }
    this.$location.path('/');
  }

  public cancelEdit() {
    this.$location.path('/');
  }
}

AddNote.$inject = ['noteService', '$location', '$routeParams'];

export const AddNotePage: IComponentOptions = {
  template: require('./add-note.page.html'),
  controller: AddNote,
  controllerAs: '$ctrl',
};
