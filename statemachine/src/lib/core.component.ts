import { Component } from '@angular/core';
import { StatemachineviewComponent } from "./statemachineview/statemachineview.component";

@Component({
    selector: 'app-core',
    standalone: true,
    templateUrl: './core.component.html',
    styleUrl: './core.component.scss',
    imports: [StatemachineviewComponent]
})
export class CoreComponent {

}
