import { Component, OnInit } from '@angular/core';
import { DomainType } from '../card/card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  domainSvcTypes: DomainType[] = [];

  constructor() { }

  ngOnInit(): void {
    this.domainSvcTypes = [
      {
        title: "Introduction",
        body: "",
        imageUrl: "/assets/images/BESCOM.jpg",
      },
      {
        title: "Business Profile",
        body: "",
        imageUrl: "/assets/images/HT_LT_Electrification.jpg",
      },
      {
        title: "Goals",
        body: "",
        imageUrl: "/assets/images/Aerial_Bundled_Conductor.png",
      },
      // {
      //   title: "New Electrical poles",
      //   body: "",
      //   imageUrl: "/assets/images/Electrical_Pole.jpg",
      // },
    ];
  }

  public executeSelectedChange = (event) => {
    console.log(event);
  }

}
