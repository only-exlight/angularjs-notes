import { IComponentOptions } from 'angular';
import { NoteModel } from 'src/app/models/note';
import { NoteService } from 'src/app/services/note.service';
import { NOTE_ACTIONS, E_NOTE_ACTION } from 'src/app/constants';
class NoteComponent {
  public model = new NoteModel();
  public readonly ACTIONS = NOTE_ACTIONS;
  public readonly onAction: (arg: { action: E_NOTE_ACTION }) => void;

  constructor() {}

  public $onInit() {}

  public emitAction(action: E_NOTE_ACTION) {
    this.onAction({ action: action });
  }
}

export const Note: IComponentOptions = {
  controller: NoteComponent,
  template: require('./note.component.html'),
  bindings: {
    model: '<',
    onAction: '&',
  },
};
