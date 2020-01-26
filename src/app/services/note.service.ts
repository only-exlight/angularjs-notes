import { NoteModel } from '../models';
import { StorageService } from './storage.service';
import { NOTES_STORE_KEY, DEFAULT_NOTE } from '../constants';
import { INote } from '../interfaces';

export class NoteService {
  public notes: NoteModel[] = [];
  public query: string;
  private allNotes: NoteModel[] = [];

  constructor(private storageService: StorageService) {
    this.readFromStore();
  }

  public getByTimeStamp(timestamp: number) {
    return this.allNotes.find(n => n.date === timestamp);
  }

  public addNote(note: NoteModel) {
    note.date = Date.now();
    this.allNotes = [note, ...this.allNotes];
    this.allNotes.forEach((n, i) => (this.notes[i] = n));
    this.filterNotes(this.query);
    this.writeToStore();
  }

  public deleteNote(timestamp: number) {
    this.allNotes = this.allNotes.filter((n, i) => n.date !== timestamp);
    this.allNotes.forEach((n, i) => (this.notes[i] = n));
    this.notes.splice(
      this.allNotes.length - 1 < 0 ? 0 : this.allNotes.length - 1,
      1,
    );
    this.writeToStore();
  }

  public saveEditedItem(timestamp: number, note: NoteModel) {
    const editedNoteIndex = this.notes.findIndex(n => n.date === timestamp);
    this.notes[editedNoteIndex] = note;
    const allEditedNoteIndex = this.allNotes.findIndex(
      n => n.date === timestamp,
    );
    this.allNotes[allEditedNoteIndex] = note;
    this.filterNotes(this.query);
    this.writeToStore();
  }

  public filterNotes(query: string) {
    if (query) {
      this.query = query;
      const regexp = new RegExp(`.*(${this.query}).*`, 'i');
      const notes = this.allNotes.filter(
        n => regexp.test(n.title) || regexp.test(n.content),
      );
      this.notes.length = notes.length;
      notes.forEach((n, i) => (this.notes[i] = n));
    } else {
      this.allNotes.forEach((n, index) => (this.notes[index] = n));
      this.query = undefined;
    }
  }

  private writeToStore() {
    this.storageService.setItem(
      NOTES_STORE_KEY,
      JSON.stringify(this.allNotes.map(n => n.toJSON())),
    );
  }

  private readFromStore() {
    const notesData: string = this.storageService.getItem(NOTES_STORE_KEY);
    if (notesData) {
      try {
        const notesItems: INote[] = JSON.parse(notesData);
        const notes = notesItems.map(n => new NoteModel(n));
        this.notes = notes;
        this.allNotes = notes;
      } catch (error) {
        console.warn('Application: error parse data from store!');
      }
    } else {
      const defNote = new NoteModel(DEFAULT_NOTE);
      this.notes.push(defNote);
      this.allNotes.push(defNote);
      this.writeToStore();
    }
  }
}
