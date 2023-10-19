import { Component } from '@angular/core';

@Component({
  selector: 'app-four-project',
  templateUrl: './four-project.component.html',
  styleUrls: ['./four-project.component.scss']
})
export class FourProjectComponent {
  title = 'assignment';
  name='Progress';
 arr=[
  {
    "icon":"fa-solid fa-file",
    "number":"89+",
    "name":"Finished Projects"
  },
  {
    "icon":"fa-solid fa-rocket",
    "number":"12352+",
    "name":"Sensors Deployed"
  },
  {
    "icon":"fa-solid fa-jar",
    "number":"25+",
    "name":"Products"
  },
  {
    "icon":"fa-solid fa-file-lines",
    "number":"100+",
    "name":"Projects"
  },
 ] 

}
