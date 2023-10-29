import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { ToggleComponent } from './Components/toggle/toggle.component';
import { PrimaryButtonComponent } from './Components/primaryButton/primaryButton.component';
import { SecondaryButtonComponent } from './Components/secondaryButton/secondaryButton.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HeroComponent } from './Components/hero/hero.component';
import { ApplicationFormComponent } from './Components/application-form/application-form.component';
import { TimePickerComponent } from './Components/time-picker/time-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToggleComponent,
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    HeroComponent,
    ApplicationFormComponent,
    TimePickerComponent
  ],
  imports: [BrowserModule, MatSlideToggleModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
