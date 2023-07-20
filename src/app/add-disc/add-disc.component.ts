import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-disc',
  templateUrl: './add-disc.component.html',
  styleUrls: ['./add-disc.component.css']
})
export class AddDiscComponent {

  addDiscForm = new FormGroup(
    {
      discName: new FormControl(),
      discType: new FormControl(),
      discPlastic: new FormControl(),
      discSpeed: new FormControl(),
      discGlide: new FormControl(),
      discTurn: new FormControl(),
      discFade: new FormControl()
    }
  )

  addDisc() {
    
  }

}
