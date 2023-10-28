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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToggleComponent,
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    HeroComponent
  ],
  imports: [BrowserModule, MatSlideToggleModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
