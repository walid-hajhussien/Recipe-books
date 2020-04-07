import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RequestService} from '../../services/request/request.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  @Output() selectedTab = new EventEmitter<string>();

  constructor(private requestService: RequestService) {
  }

  ngOnInit(): void {
  }

  onSaveRecipes() {
    this.requestService.storeRecipes().subscribe((result) => {
      console.log('recipes saved : ', result);
    });
  }

  onFetchRecipes() {
    this.requestService.fetchRecipes().subscribe((result)=>{
      console.log(result)
    })
  }

  onSelect(name: string) {
    this.selectedTab.emit(name);
  }
}
