import { IComponentOptions } from 'angular';
import { COLORS } from 'src/app/constants';

class Colors {
  public readonly COLORS = COLORS;
  public selectedColor: string;
  public readonly onChange: (event: { color: string }) => void;

  public $onInit() {
    if (!this.selectedColor) {
      this.selectColor(this.COLORS[0]);
    }
  }

  public selectColor(color: string) {
    this.selectedColor = color;
    this.onChange({ color });
  }
}

export const ColorsComponent: IComponentOptions = {
  controller: Colors,
  template: require('./colors.component.html'),
  bindings: {
    selectedColor: '<',
    onChange: '&',
  },
};
