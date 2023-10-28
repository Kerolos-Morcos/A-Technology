import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css'],
})
export class ToggleComponent{
  @Output() toggleChange = new EventEmitter<boolean>();
  isToggled = true;

  toggleSwitch() {
    this.isToggled = !this.isToggled;
    this.toggleChange.emit(this.isToggled);
  }

}
