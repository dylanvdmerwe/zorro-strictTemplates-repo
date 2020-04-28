import { Component, Input, OnInit } from '@angular/core';
import { NgModel } from "@angular/forms";

@Component({
  selector: 'app-test-wrapper',
  templateUrl: './test-wrapper.component.html',
  styleUrls: ['./test-wrapper.component.scss']
})
export class TestWrapperComponent implements OnInit {

  @Input() control: NgModel;

  constructor() { }

  ngOnInit(): void {
  }

}
