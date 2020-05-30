import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
    selector : "app-header",
    templateUrl: "./header.component.html",
    providers :[LoggingService]
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();

    constructor(private loggingService:LoggingService){}

  onSelect(feature: string){
        this.loggingService.logChanges("change by select event");
        this.featureSelected.emit(feature);
  }
}