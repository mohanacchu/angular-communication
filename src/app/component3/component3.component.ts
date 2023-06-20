import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedDataService } from '../service/shared-data.service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit , OnDestroy {

  public sharedData : any;
  public result: any;
  constructor(private dataService : SharedDataService) { }

  ngOnInit(): void {
    this.result = this.dataService.receiveData().subscribe((data : any) => {
      this.sharedData = data;
    });
  }

  ngOnDestroy() {
    this.result.unSubscribe();
  }

}
