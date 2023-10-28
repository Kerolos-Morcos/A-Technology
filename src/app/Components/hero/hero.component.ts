import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  imageUrl: string = '../../../assets/images/avatarMan.png';
  selectedImage: File | null = null;
  isFixedTimeSelected: boolean = false;
  isMoreThanOneSelected: boolean = false;
  time: number = 30;

  handleFileInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      this.selectedImage = file;
      this.displayImage(file);
    }
  }

  displayImage(file: File): void {
    const reader = new FileReader();
    reader.onload = () => {
      this.imageUrl = reader.result as string;
    };
    reader.readAsDataURL(file);
  }


  handleRadioSelected(isSelected: boolean){
    this.isFixedTimeSelected = isSelected;
  }

  handleMoreThanSelected(isMore: boolean){
    this.isMoreThanOneSelected = isMore;
  }

  incrementTime() {
    this.time+=10;
  }

  decrementTime() {
    if (this.time > 30) {
      this.time-=10;
    }
  }
}
