/**
 * Created by jtongay on 11/21/17.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'collapsible-well',
  template: `
<div (click)="toggleContent()" class="well pointable">
  <h4>
    <ng-content select="[well-title]"></ng-content>
  </h4>
   <!--content goes heere-->
  <ng-content *ngIf="visible" select="[well-body]"></ng-content> 
</div>
`
})

export class CollapsibleWellComponent {
  visible: boolean = true;

  toggleContent() {
    this.visible = !this.visible;
  }



}

