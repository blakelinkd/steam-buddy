import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() text: string;
  @Input() btn_mode: string;
  @Output() public btnClick = new EventEmitter();


  constructor() {
    this.text = "Assign Me Some Text";
    this.btn_mode = "primary";
   }

  ngOnInit(): void {
  }

  onClick() {
    this.btnClick.emit();
  }

}
