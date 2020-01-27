import { module } from 'angular';
import 'angular-route';
// Components
import { MenuComponent } from './components/menu/menu.component';
import { NoteList } from './components/note-list/note-list.component';
import { Note } from './components/note/note.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { ColorsComponent } from './components/colors/colors.component';
// Services
import { StorageService } from './services/storage.service';
import { NoteService } from './services/note.service';
// Routes
import { Config } from './routes';

module('app', ['ngRoute'])
  .component('appNote', Note)
  .component('appMenu', MenuComponent)
  .component('appNoteList', NoteList)
  .component('appCreateNote', CreateNoteComponent)
  .component('appColors', ColorsComponent)
  .service('noteService', NoteService)
  .service('storageService', StorageService)
  .config(Config);
