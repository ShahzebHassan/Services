import { Component, OnInit ,Input} from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

   infoReceived = '';
  
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  this.dataService.share.subscribe(msg => this.infoReceived =msg);
  }
}
