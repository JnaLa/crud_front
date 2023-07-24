import { Component } from '@angular/core';
import { DiscService } from '../services/disc.service';
import { HttpClient } from '@angular/common/http';
import {
  faCheck,
  faTrashCan,
  faCross,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-discs',
  templateUrl: './discs.component.html',
  styleUrls: ['./discs.component.css'],
})
export class DiscsComponent {
  constructor(private discService: DiscService) {}

  faTrashCan = faTrashCan;
  faCheck = faCheck;
  faCross = faCross;

  discList: any = [];
  discInBag: Boolean = false;

  ngOnInit() {
    this.discService.returnDiscs().subscribe((r) => {
      console.log(r);
      this.discList = r;
    });
  }

  deleteDisc(discId: number) {
    this.discService.deleteDisc(discId).subscribe((r) => {
      this.ngOnInit();
    });
  }

  addDiscInBag(discData: any) {
    let discParsedData = {
      id: discData.id,
      name: discData.name,
      type: discData.type,
      plastic: discData.plastic,
      speed: discData.speed,
      glide: discData.glide,
      turn: discData.turn,
      fade: discData.fade,
      isInBag: (discData.isInBag = true),
    };

    this.discService.toggleDiscInBag(discParsedData).subscribe((r) => {
      console.log(r);
      this.ngOnInit();
    });
  }

  removeDiscFromBag(discData: any) {
    let discParsedData = {
      id: discData.id,
      name: discData.name,
      type: discData.type,
      plastic: discData.plastic,
      speed: discData.speed,
      glide: discData.glide,
      turn: discData.turn,
      fade: discData.fade,
      isInBag: (discData.isInBag = false),
    };

    this.discService.toggleDiscInBag(discParsedData).subscribe((r) => {
      console.log(r);
      this.ngOnInit();
    });
  }
}
