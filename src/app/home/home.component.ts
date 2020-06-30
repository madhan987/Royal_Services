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
        // tslint:disable-next-line: max-line-length
        body: ' Our organization is an assembly of hardworking, experience, dynamic and dedicated professional working to provide quality and superior business solutions. ',
        imageUrl: '/assets/images/introduction.JPG',
        bodyTitle: 'Dear Well Wishers'
      },
      {
        title: 'Business Profile',
        // tslint:disable-next-line: max-line-length
        body: 'M/S Royal Value Services is committed to helping organizations to increase their productivity through better use of their human resources and to enable companies to achive real competitive advantages',
        imageUrl: '/assets/images/business.JPG',
        bodyTitle: 'Royal Value Services'
      },
      {
        title: 'Goals',
        body: 'Our mission at Royal Value Services is simple as we dream to be the best source in the manpower industry and help the people achieve their desired success.',
        imageUrl: '/assets/images/goal.JPG',
        bodyTitle: 'Royal Value Services'
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
