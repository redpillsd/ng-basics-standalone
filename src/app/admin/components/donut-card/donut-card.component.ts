import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CurrencyPipe, NgClass, NgSwitch, NgSwitchCase } from '@angular/common';

import { Donut } from '../../models/donut.model';
@Component({
  standalone: true,
  imports: [RouterModule, NgClass, NgSwitch, NgSwitchCase, CurrencyPipe],
  selector: 'app-donut-card',
  template: `
  <!--
    [style.border]="donut.promo ? '2px solid #eee' : 'none'"
    [ngStyle]="{
      border: donut.promo ? '2px solid #eee' : 'none'
    }"
    to use this we need to define a class!
    [class.donut-card-promo]="donut.promo"
    [ngClass]"{'donut-card-promo': donut.promo}"
  -->
    <a
      class="donut-card"
      [routerLink]="donut.id"
      [ngClass]="{'donut-card-promo': donut.promo}">
      <img
        src="/assets/img/{{ donut.icon }}.svg"
        [alt]="donut.name"
        class="donut-card-icon"
      />
      <div>
        <p class="donut-card-name">
          {{ donut.name }}
          <ng-container [ngSwitch]="donut.promo">
            <!-- <span class="donut-card-label">
              <ng-template [ngSwitchCase]="'new'">NEW</ng-template>
              <ng-template [ngSwitchCase]="'limited'">LIMITED</ng-template>
              <ng-template ngSwitchDefault>nothing</ng-template>
            </span> -->
            <span *ngSwitchCase="'new'" class="donut-card-label">NEW</span>
            <span *ngSwitchCase="'limited'" class="donut-card-label">LIMITED</span>
          </ng-container>
        </p>
        <p class="donut-card-price">
          {{ donut.price / 100 | currency: 'USD' }}
        </p>
      </div>
    </a>
  `,
  styles: [
    `
    /* used when you want to avoid the wrapping div of the component, also its a cleaner way*/
    /* :host {
      display: flex;
      align-items: center;
      background: #f7f7f7;
      border-radius: 5px;
      margin-bottom: 5px;
      padding: 5px 15px;
      transition: transform 0.2s ease-in-out;
      &:hover {
        transform: translateY(-3px)
      }
    } */
    .donut-card {
      display: flex;
      align-items: center;
      background: #f7f7f7;
      border-radius: 5px;
      margin-bottom: 5px;
      padding: 5px 15px;
      transition: transform 0.2s ease-in-out;
      &:hover {
        transform: translateY(-3px);
      }
      &-name {
        font-size: 16px;
      }
      &-label {
        border: 1px solid #c14583;
        border-radius: 4px;
        padding: 0 4px;
        margin-left: 5px;
        font-size: 12px;
        color: #c14583;
      }
      &-price {
        font-size: 14px;
        color: #c14583;
      }
      &-icon {
        width: 50px;
        margin-right: 10px;
      }
      &-promo {
        border: 2px solid #eee;
      }
    }
    `
  ]
})
export class DonutCardComponent {
  @Input() donut!: Donut;

}
