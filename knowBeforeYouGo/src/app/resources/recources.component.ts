import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  @Input()
  public home: any;

  constructor() { }

  ngOnInit() {

  }
}
