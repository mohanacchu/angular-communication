import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() message: any;
  @Output() dataEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  sendData() {
    this.dataEvent.emit("Data From Child");
  }

}
