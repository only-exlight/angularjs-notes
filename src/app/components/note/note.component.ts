import { IComponentOptions } from 'angular';
import { NoteModel } from 'src/app/models/note';
import { NOTE_ACTIONS, E_NOTE_ACTION } from 'src/app/constants';
class NoteComponent {
  public model = new NoteModel();
  public readonly ACTIONS = NOTE_ACTIONS;
  public readonly onAction: (arg: { action: E_NOTE_ACTION }) => void;

  constructor() {}

  get color() {
    return {
      background: `linear-gradient(30deg, ${this.model.color}, #eee)`,
    };
  }

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
