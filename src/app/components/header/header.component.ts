import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  @Output() selectedTab = new EventEmitter<string>();

  constructor() {
  }
  ngOnInit(): void {
  }

  onSaveRecipes(){}

  onSelect(name: string) {
    this.selectedTab.emit(name);
  }
}
