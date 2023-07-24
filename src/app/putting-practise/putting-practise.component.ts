import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { PuttingPractiseService } from '../services/putting-practise.service';

@Component({
  selector: 'app-putting-practise',
  templateUrl: './putting-practise.component.html',
  styleUrls: ['./putting-practise.component.css'],
  standalone: true,
  imports: [MatSliderModule, MatCardModule, MatInputModule, FormsModule],
})
export class PuttingPractiseComponent {
  constructor(private puttingPractiseService: PuttingPractiseService) {}
  //disabled = false;
  max = 5;
  min = 0;
  showTicks = true;
  step = 1;
  //thumbLabel = true;
  c1Short: number = 0;
  c1Medium: number = 0;
  c1Long: number = 0;
  c2Short: number = 0;
  c2Medium: number = 0;
  c2Long: number = 0;

  addPuttingPractise() {
    let puttingPractiseData = {
      c1Short: this.c1Short,
      c1Medium: this.c1Medium,
      c1Long: this.c1Long,
      c2Short: this.c2Short,
      c2Medium: this.c2Medium,
      c2Long: this.c1Long,
    };
    this.puttingPractiseService.addPuttingPractise(puttingPractiseData).subscribe(r =>{
      console.log(r)
    })
  }
}
