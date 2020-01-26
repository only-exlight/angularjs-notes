import { INote } from 'src/app/interfaces';

export class NoteModel implements INote {
  title = '';
  content = '';
  color = '';

  constructor(note?: INote) {
    if (note) {
      this.title = note.title;
      this.content = note.content;
      this.color = note.color;
    }
  }

  public toJSON(): INote {
    return {
      title: this.title,
      content: this.content,
      color: this.color,
    };
  }
}
