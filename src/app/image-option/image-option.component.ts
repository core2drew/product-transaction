import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-image-option',
  templateUrl: './image-option.component.html',
  styleUrls: ['./image-option.component.scss'],
})
export class ImageOptionComponent implements OnInit {
  @Input() items: string[];
  @Input() label: string;
  @Input() selectedIndex: number;
  @Output() onClick = new EventEmitter();

  constructor() {}
  ngOnInit(): void {}

  handleOnClick(index) {
    this.onClick.emit(index);
  }
}
