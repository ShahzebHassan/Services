import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-grand-parent',
  templateUrl: './grand-parent.component.html',
  styleUrls: ['./grand-parent.component.css'],
  
})
export class GrandParentComponent implements OnInit {

  infoReceived= '';

  constructor(public dataService:DataService) { }

  ngOnInit(): void {}
  
  updateText(infoReceived: string){
    this.dataService.updateData(infoReceived);
  }

}
