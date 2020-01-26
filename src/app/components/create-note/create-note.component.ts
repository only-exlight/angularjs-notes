import { IComponentOptions } from 'angular';
import { NoteModel } from 'src/app/models';

class CreateNote {
  public model: NoteModel;
  public onSave: () => void;
  public onCancel: () => void;

  public $onInit() {
    // console.warn(this);
  }

  public changeColor(color: string) {
    this.model.color = color;
  }

  public saveNote() {
    this.onSave();
  }

  public cancel() {
    this.onCancel();
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
