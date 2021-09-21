import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { Dashboard } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() text: string;
  @Input() btn_mode!: string;
  @Input() btn_class!: string;
  @Output() public btnClick = new EventEmitter();


  constructor() {
    
    this.text = "Assign Me Some Text";
  }
  
  ngOnInit(): void {
    this.text = this.btn_mode;
    if (this.text == "login") {
      this.btn_class = "label-btn";
      
    }
    
  }

  onClick() {
    this.btnClick.emit();
  }

}
