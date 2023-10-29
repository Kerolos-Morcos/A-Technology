import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})

export class ApplicationFormComponent {
  isButtonSelected: boolean = false;
  weekDays: string[] = ['السبت', 'الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة'];
  timePickerVisibility: boolean[] = [];
  
  selectButton() {
    this.isButtonSelected = true;
  }

  selectOtherButton() {
    this.isButtonSelected = false;
  }
  


toggleTimePicker(index: number) {
  this.timePickerVisibility[index] = !this.timePickerVisibility[index];
}

isTimePickerVisible(index: number) {
  return this.timePickerVisibility[index];
}



  
}
