import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {  MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatNativeDateModule } from '@angular/material/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSliderModule} from '@angular/material/slider';


const MaterialComponents=[
  MatCardModule, MatButtonModule,MatInputModule,MatRadioModule,MatCheckboxModule,FormsModule,MatFormFieldModule,MatDatepickerModule,MatSelectModule,MatTooltipModule,MatNativeDateModule,MatExpansionModule,MatSliderModule

];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
