import {NgModule} from '@angular/core';
import {DropdownDirective} from '../../directives/dropdown/dropdown.directive';
import {LoadingSpinnerComponent} from '../../components/loading-spinner/loading-spinner.component';
import {ErrorMessagePipe} from '../../pipes/errorMessage/error-message.pipe';
import {AlertComponent} from '../../DynamicComponents/alert/alert.component';
import {PlaceholderDirective} from '../../directives/placeholder/placeholder.directive';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    DropdownDirective,
    LoadingSpinnerComponent,
    ErrorMessagePipe,
    AlertComponent,
    PlaceholderDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DropdownDirective,
    LoadingSpinnerComponent,
    ErrorMessagePipe,
    AlertComponent,
    PlaceholderDirective,
    CommonModule
  ],
  entryComponents: [AlertComponent]
})
export class SharedModule {

}
