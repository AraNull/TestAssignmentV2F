import { Component, OnInit } from '@angular/core';
import { TeamMember } from './team-member';
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})

export class TeamComponent implements OnInit {
  teamMembers: TeamMember[] = [
    {
      name: 'Julian Jameson',
      profession: 'Profession',
      imageUrl: "../../assets/user-cover-1.png",
      socialLinks: {
        facebook: 'facebook-link-1',
        instagram: 'instagram-link-1',
        twitter: 'twitter-link-1'
      }
    },
    {
      name: 'Julian Jameson',
      profession: 'Profession',
      imageUrl: "../../assets/user-cover-2.png",
      socialLinks: {
        facebook: 'facebook-link-2',
        instagram: 'instagram-link-2',
        twitter: 'twitter-link-2'
      }
    },
    {
      name: 'Julian Jameson',
      profession: 'Profession',
      imageUrl: "../../assets/user-cover-3.png",
      socialLinks: {
        facebook: 'facebook-link-3',
        instagram: 'instagram-link-3',
        twitter: 'twitter-link-3'
      }
    },
    {
      name: 'Julian Jameson',
      profession: 'Profession',
      imageUrl: "../../assets/user-cover-4.png",
      socialLinks: {
        facebook: 'facebook-link-4',
        instagram: 'instagram-link-4',
        twitter: 'twitter-link-4'
      }
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}