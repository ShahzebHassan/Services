import { Component, OnInit,Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

   infoReceived = '';
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.share.subscribe(msg => this.infoReceived = msg);
  }

}
