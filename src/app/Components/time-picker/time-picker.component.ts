import { Component, OnInit } from '@angular/core';
import { ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.css']
})

export class TimePickerComponent {
  timePickers: any[] = [];
  dynamicComponentRefs: any[] = [];
  
  constructor (private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef) {
    
  }

  pushDynamicComponent() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(TimePickerComponent);
    const componentRef = factory.create(this.viewContainerRef.parentInjector);
  
    // Insert the component below the existing ones
    this.viewContainerRef.insert(componentRef.hostView, this.timePickers.length);
  
    // Store a reference to the dynamically added component
    this.dynamicComponentRefs.push(componentRef);
  }

  decrementDateTimePicker(index: number) {
    if (index >= 0 && index < this.dynamicComponentRefs.length) {
      // Remove the component from the view container
      this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.dynamicComponentRefs[index].hostView));

      // Also, remove the component reference from the array
      this.dynamicComponentRefs.splice(index, 1);
    }
  
  }

  
}

// addTimePicker() {
//   this.timePickers.push({});
// }

// removeTimePicker() {
//   this.timePickers.pop();
// }