import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators'

@Component({
    selector: 'amg-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit, OnDestroy {

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onTyping = new EventEmitter<string>();
  @Input() value = '';
  debounce: Subject<string> = new Subject<string>();

  ngOnInit(): void {
    this.debounce
    .pipe(debounceTime(420))
    .subscribe(filter => this.onTyping.emit(filter));
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

}
