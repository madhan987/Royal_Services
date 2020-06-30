import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input()
  public domain: DomainType;

  constructor() { }

  public ngOnInit(): void {
  }

}
export class DomainType {
  public title: string;
  public body: string;
  public imageUrl: string;
  public iconUrl?: string;
}
