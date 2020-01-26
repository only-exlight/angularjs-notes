import { INote } from 'src/app/interfaces';
import { randomInteger } from 'src/app/functions';

export class NoteModel implements INote {
  title = '';
  content = '';
  color = '';
  rotate = randomInteger(-10, 10);

  constructor(note?: INote) {
    if (note) {
      this.title = note.title;
      this.content = note.content;
      this.color = note.color;
      this.rotate = note.rotate;
    }
  }

  public toJSON(): INote {
    return {
      title: this.title,
      content: this.content,
      color: this.color,
      rotate: this.rotate,
    };
  }
}
