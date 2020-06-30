import { Component, OnInit } from '@angular/core';
import { DomainType } from '../card/card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public domainSvcTypes: DomainType[] = [];

  constructor() { }

  public ngOnInit(): void {
    this.domainSvcTypes = [
      {
        title: 'Introduction',
        body: ' Our organization is an assembly of hardworking, experience, dynamic and dedicated professional working to provide quality and superior business solutions. ',
        imageUrl: '/assets/images/introduction.JPG',
      },
      {
        title: 'Business Profile',
        body: '',
        imageUrl: '/assets/images/business.JPG',
      },
      {
        title: 'Goals',
        body: '',
        imageUrl: '/assets/images/goal.JPG',
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
