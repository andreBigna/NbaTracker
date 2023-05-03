import {
  Directive,
  HostBinding,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { GameResult } from '../types/game-result.type';

@Directive({
  selector: '[appResultHighlighter]',
})
export class ResultHighlighterDirective implements OnChanges {
  @Input() appResultHighlighter: GameResult = 'L';

  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.backgroundColor = this.appResultHighlighter === 'L' ? 'red' : 'green';
  }
}
