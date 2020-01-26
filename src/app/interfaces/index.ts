import { E_NOTE_ACTION } from '../constants';

export interface INoteAction {
  ico: string;
  action: E_NOTE_ACTION;
  title: string;
}

export interface INote {
  title: string;
  content: string;
  color: string;
}
