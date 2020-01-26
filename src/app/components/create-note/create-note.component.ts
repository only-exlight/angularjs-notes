import { IComponentOptions } from 'angular';
import { NoteModel } from 'src/app/models';

class CreateNote {
  public model: NoteModel;
  public onSave: () => void;

  public $onInit() {
    // console.warn(this);
  }

  public changeColor(color: string) {
    console.warn(color);
    this.model.color = color;
  }

  public saveNote() {
    this.onSave();
  }
}

export const CreateNoteComponent: IComponentOptions = {
  controller: CreateNote,
  template: require('./create-note.component.html'),
  bindings: {
    model: '<',
    onSave: '&',
  },
};
