import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DiscService } from '../services/disc.service';

@Component({
  selector: 'app-add-disc',
  templateUrl: './add-disc.component.html',
  styleUrls: ['./add-disc.component.css']
})
export class AddDiscComponent {

  constructor(
    private discService: DiscService
  ) {}

  addDiscForm = new FormGroup(
    {
      name: new FormControl(),
      type: new FormControl(),
      plastic: new FormControl(),
      speed: new FormControl(),
      glide: new FormControl(),
      turn: new FormControl(),
      fade: new FormControl()
    }
  )

  addDisc() {
    let discData = this.addDiscForm.getRawValue();

    this.discService.addDisc(discData).subscribe(r => {
      console.log(r)
    })
    
  }

}
