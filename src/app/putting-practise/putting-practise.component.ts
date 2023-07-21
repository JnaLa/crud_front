import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-putting-practise',
  templateUrl: './putting-practise.component.html',
  styleUrls: ['./putting-practise.component.css'],
})
export class PuttingPractiseComponent {
  puttingPractiseForm = new FormGroup({
    inlineCircle1ShortRadioOptions: new FormControl()
  });
  addPuttingPractise() {
    let puttingData = this.puttingPractiseForm.getRawValue();
    console.log(puttingData)
  }
}
