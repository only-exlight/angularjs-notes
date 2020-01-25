import { IComponentOptions } from 'angular';
import { NoteModel } from 'src/app/models/note';

class NoteComponent {
  public note: NoteModel;

  constructor() {
    this.note = new NoteModel();
  }

  public deleteNote() {

  }
}

export const Note: IComponentOptions = {
  controller: NoteComponent,
  template: require('./note.component.html'),
};
