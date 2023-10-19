import { Component } from '@angular/core';

@Component({
  selector: 'app-first-project',
  templateUrl: './first-project.component.html',
  styleUrls: ['./first-project.component.scss']
})
export class FirstProjectComponent {

  arr1=[
    {
      "icon":"fa-solid fa-star",
      "name":"Experience Professionals",
      "paragrap":"Our team of professionals effortlessly navigates the challenges and delivers exceptional results."
    },
    {
      "icon":"fa-solid fa-award",
      "name":"High-Quality Work",
      "paragrap":"We pay meticulous attention to detail, whether it's a minor task or a multifaceted project."
    },
    {
      "icon":"fa-solid fa-headphones",
      "name":"24*7 Support",
      "paragrap":"Our company offers 24*7 support, and ensure that we are available for our valued customers."
    }
  ]
  
}
