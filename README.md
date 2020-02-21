# Запуск проекта

Для запуска проекта требуется установленный nodejs `>=8.11.4` и npm `>=5.6.0`. Если эти пакеты не установленны на вашей системе воспользуйтесь инструкцией с [nodejs.org](https://nodejs.org/) для их установки.

Перейдите в директорию проекта. Выполните в командной строке или в терминале команду и дождитесь окончания ее работы:

`npm install` - установит зависимости проекта

Для запуска проекта в режиме разработки выполните команду:

`npm run dev` - запустит локальный http-сервер для разработки. Дождитесь окночания сборки. Теперь проект доступен по адресу https://0.0.0.0:8080/

Для сборки исходников запустите команду:

`npm run build` - создает сборку проекта в директории `build`, которую впоследствии можно выложить на http сервер.

Для запуска собронного проекта запустите команду:

`npm start` - запуск локального сервера, приложение будет доступно по адресу http://localhost:5000

# Структура проекта

`src` - директория исходных кодов

`src/app` - исходные коды модуля `app`

`src/assets` - вложения

`src/styles` - общие стили проекта

`src/app/components` - angularjs компоненты модуля `app`

`src/app/constants` - константы модуля `app`

`src/app/functions` - вспомогательные функции

`src/app/interfaces` - интерфейсы используемые в в модуле `app`

`src/app/models` - классы моделей данных

`src/app/pages` - angularjs компоненты используемые в качестве страниц

`src/app/services` - классы сервисов модуля `app`

# Рефлексия

Дабы не было слишком скучно изучать эти исходные тексты решил описать нектороый полученый опыт при создании этого маленького приложения на AngularJS, поскольку до этого момента не сталкивался с ним.

Довольно сложно сложно воспринимать AngularJS вне контекста последующих версий, с учетом того что с Angular 2+ провелось немало как рабочего так и свободного времени. Именно поэтому получившаяся структура проекта так сильно напоминает типичный Angular 2+ проект. Так же в нем я использовал TypeScript, поскольку привык к нему и все свои поделки сразу начинаю писать на нем. Конфиг webpack почти полностью стянут с других моих поделок, единственно что добавилось `html-loader` для более удобного импорта шаблонов. Не смотря на то что в документации предлагают создавать контроллеры/компоненты через функции, поскольку
```typescript
function MyClass {
  this.prop = ''
}
const m = new MyClass();
```
примерно равно

```typescript
class MyClass {
  constructor() {
    this.prop = ''
  }
}
const m = new MyClass();
```
решил что буду везде использовать привычные мне в Angular 2+ классы. Ну и очивидно это работает. В целом при знакомстве с первой версией замечается такая вещь - дизайн следущей версии фреймворка более продуман. Беглое вникание в особенности работы AngularJS не дает понимания зачем нужен `$scope` если работает `this`, где мне может пригодится использование `ng-controller` и другие подобные вещи. В целом вникать долго не пришлось, знакомые директивы и термины позволили быстро освоиться. Не знаю принято ли использовать RxJs с AngularJS. Поэтому в этом проекте он не использовался. Очивидно что подобную ернунду в Angular 2+

```typescript
class NoteListComponent {
  public notes: NoteModel[];

  constructor(private noteService: NoteService, private $location: any) {
    this.notes = this.noteService.notes;
  }
```
я бы не написал. Скорее всего это было бы реализованно так:

```typescript
class NoteService {
  private notes: NoteModel[] = [];
  private $notes = new BehaviorSubject([]);

  get notes$() {
    return this.$notes.asObservable();
  }

  public addNote(note: NoteModel): void {
    this.notes = [note, ...this.notes];
    this.$notes.next(this.notes);
  }
  // ...
}

class NoteListComponent {
  public notes: NoteModel[];

  constructor(private noteService: NoteService, private $location: any) {
    this.noteService.notes$.subscribe((notes) => this.notes = notes);
  }

  // ...
```

Далего не сразу было очивидно как создовать события и пробрасывать данные в AngularJS компоненты, поскольку здесь отличная от следущий версий система и синтаксис для реализации подобныйх вещей. Выглядит это необычно, декораторы свойств выглядят явно лучше. `'<'` - входящие данные. `'&'` - исходящие события. Все это как бы инжектится в компонет (контроллер).

```typescript
// ...
  bindings: {
    model: '<',
    onAction: '&',
  },
};
```

Скорее всего люди писавшие на AngularJS писали шаблон в том же файле. После Angular 2+ выглядит это странно, поэтому поднастроил webpack что бы имортировать шаблоны из html файлов.

После всего веселья решил проверить минифицированную сборку. DI - поломался... Все потому что все завязано на названии внедряемых в качестве зависимостей объектов, которые меняются при обработке исходников webpack'ом. Начались танцы с бубном. Танцы закончелись, DI починился. Результаты на [heroku](https://angularjs-notes-app.herokuapp.com/).

Как итог по первому впечатлению AngularJS не так плох, некоторые концепции несмотря на свои отличия дастаточно просты для освоения. Много деректив которых нет в будущих версиях, однако основные на месте, выглядят и работают так же.
