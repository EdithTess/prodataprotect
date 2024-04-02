import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material-components.module';
import { ListComponent } from './list.component';
import {FinderModule} from '../finder/finder.module';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FinderModule,

  ],
  declarations: [ListComponent],
  exports: [ListComponent]
})
export class ListModule {
}
