import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ui-my-control-library',
  templateUrl: './my-control-library.component.html',
  styleUrls: ['./my-control-library.component.scss'],
})
export class MyControlLibraryComponent implements OnInit {

  @Input('title') title;
  @Input('subtitle') subtitle;
  @Input('content') content = '😄';

  @Output() btnClicked = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  handleBtnClick() {
    console.log('!!! === button clicked === !!!');
    this.btnClicked.emit(true);
  }
}
