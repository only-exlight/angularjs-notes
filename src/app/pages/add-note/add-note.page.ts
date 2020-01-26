import { IComponentOptions } from 'angular';
import { NoteModel } from 'src/app/models';
import { NoteService } from 'src/app/services/note.service';

class AddNote {
  public note: NoteModel = new NoteModel();

  constructor(private noteService: NoteService) {}

  public saveNote() {
    this.noteService.addNote(this.note);
  }
}

export const AddNotePage: IComponentOptions = {
  template: require('./add-note.page.html'),
  controller: AddNote,
  controllerAs: '$ctrl',
};
