import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  @Output() selectTab = new EventEmitter<string>();

  constructor() {
  }
  ngOnInit(): void {
  }

  onClickHeader(name: string) {
    switch (name) {
      case 'recipe':
        this.selectTab.emit('recipe');
        break;
      case 'shopping':
        this.selectTab.emit('shopping');
        break;
    }
  }
}
