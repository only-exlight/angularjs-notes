import { IComponentOptions } from 'angular';
import { NoteModel } from 'src/app/models';

class CreateNote {
  public model: NoteModel;
  public onSave: () => void;
  public onCancel: () => void;

  public changeColor(color: string) {
    this.model.color = color;
  }
}

export const CreateNoteComponent: IComponentOptions = {
  controller: CreateNote,
  template: require('./create-note.component.html'),
  bindings: {
    model: '<',
    onSave: '&',
    onCancel: '&',
  },
};
