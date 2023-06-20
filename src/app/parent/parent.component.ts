import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../service/shared-data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  public myText = "Data from Parent Component";
  public childData : any;

  constructor(private dataService : SharedDataService) { }

  ngOnInit(): void {
  }

  receiveData(data : any) {
    this.childData = data;
  }

  updateData() {
    this.dataService.sendData("New Data From Parent");
  }

}
