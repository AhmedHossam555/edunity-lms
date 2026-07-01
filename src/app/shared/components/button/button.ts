import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Button {
  readonly text = input.required<string>();
  readonly background = input('#2FC7A1');
  readonly backgroundIcon = input('#35d7ae');
  readonly textColor = input('#ffffff');
  readonly disabled = input(false);

}
