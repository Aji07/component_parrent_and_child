import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// child component Course Dtails
import { CdetailComponent } from 'src/app/@components/cdetail/cdetail.component';
@NgModule({
  declarations: [CdetailComponent],
  imports: [
    CommonModule,

  ],
  exports:[
    CdetailComponent
  ]
})
export class HomeModule { }
