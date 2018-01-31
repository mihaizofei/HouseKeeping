import { Component, Output, EventEmitter } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'search-bar',
  templateUrl: 'search-bar.html'
})
export class SearchBarComponent {

  city: string;
  @Output() searchEvent = new EventEmitter<string>();

  constructor() {
  }

  public searchCity() {
    if (!_.isEmpty(this.city)) {
      console.log(`You've searched: ${this.city}`);
      this.searchEvent.emit(this.city);
    }
  }

}
