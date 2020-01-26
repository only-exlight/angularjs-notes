import { INoteAction } from '../interfaces';

export enum E_NOTE_ACTION {
  EDIT,
  REMOVE,
}

export const NOTE_ACTIONS: INoteAction[] = [
  {
    action: E_NOTE_ACTION.REMOVE,
    ico: 'la-trash',
    title: 'Remove note',
  },
  {
    action: E_NOTE_ACTION.EDIT,
    ico: 'la-edit',
    title: 'Edit note',
  },
];

export const COLORS: string[] = [
  '#CB0018',
  '#721033',
  '#F04300',
  '#FF6A00',
  '#3C1B1C',
  '#DBC798',
  '#FF6DA5',
  '#EF0070',
  '#CE89C9',
  '#3D0073',
  '#7D519E',
  '#0E0C53',
  '#184191',
  '#196FC2',
  '#11A9D5',
  '#00848C',
  '#00C6A9',
  '#10A926',
  '#008136',
  '#004031',
  '#FDE02C',
  '#FFA111',
  '#6E7D84',
  '#B5911C',
  '#A3A5A2',
  '#A8653A',
];

export const NOTES_STORE_KEY = 'notes';
