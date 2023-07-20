import { Component } from '@angular/core';
import { DiscService } from '../services/disc.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-discs',
  templateUrl: './discs.component.html',
  styleUrls: ['./discs.component.css']
})
export class DiscsComponent {
  constructor(
    private discService: DiscService,
    private http: HttpClient

    ) {}

  discList: any = []

  ngOnInit() {
    this.discService.returnDiscs().subscribe(r => {
      console.log(r)
      this.discList = r
    })


  }



}
