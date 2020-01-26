import { NoteModel } from '../models';
import { StorageService } from './storage.service';

export class NoteService {
  public notes: NoteModel[] = [];

  constructor(private storageService: StorageService) {}

  public addNote(note: NoteModel) {
    this.notes.push(note);
  }

  public deleteNote(index: number) {}
}
