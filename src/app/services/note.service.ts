import { NoteModel } from '../models';
import { StorageService } from './storage.service';
import { NOTES_STORE_KEY } from '../constants';
import { INote } from '../interfaces';

export class NoteService {
  public notes: NoteModel[] = [];

  constructor(private storageService: StorageService) {
    this.readFromStore();
  }

  public addNote(note: NoteModel) {
    this.notes.push(note);
    this.writeToStore();
  }

  public deleteNote(index: number) {
    this.notes.splice(index, 1);
    this.writeToStore();
  }

  public saveEditedItem(id: number, note: NoteModel) {
    this.notes[id] = note;
    this.writeToStore();
  }

  private writeToStore() {
    this.storageService.setItem(
      NOTES_STORE_KEY,
      JSON.stringify(this.notes.map(n => n.toJSON())),
    );
  }

  private readFromStore() {
    const notesData: string = this.storageService.getItem(NOTES_STORE_KEY);
    if (notesData) {
      try {
        const notesItems: INote[] = JSON.parse(notesData);
        this.notes = notesItems.map(n => new NoteModel(n));
      } catch (error) {
        console.warn('Application: error parse data from store!');
      }
    }
  }
}
