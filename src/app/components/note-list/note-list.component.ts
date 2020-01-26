import { IComponentOptions } from 'angular';
import { NoteModel } from 'src/app/models/note';
import { NoteService } from 'src/app/services/note.service';
import { E_NOTE_ACTION } from 'src/app/constants';

class NoteListComponent {
  public notes: NoteModel[];

  constructor(private noteService: NoteService, private $location: any) {
    this.notes = this.noteService.notes;
  }

  public doAction(action: E_NOTE_ACTION, index: number) {
    switch (action) {
      case E_NOTE_ACTION.EDIT: {
        this.$location.path(`/edit-note/${index}`);
        break;
      }
      case E_NOTE_ACTION.REMOVE: {
        this.noteService.deleteNote(index);
        break;
      }
      default: {
        console.warn('Application: Wrong note action!');
      }
    }
  }
}

export const NoteList: IComponentOptions = {
  controller: NoteListComponent,
  template: require('./note-list.component.html'),
};
