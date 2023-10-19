import { Component } from '@angular/core';

@Component({
  selector: 'app-second-project',
  templateUrl: './second-project.component.html',
  styleUrls: ['./second-project.component.scss']
})
export class SecondProjectComponent {

name="Our Products";
arr=[
{
  "img":"./assets/firstimg.png",
  "name":"LoRaWAN Indoor gateway",
  "paragraph":"Macnman LoRaWAn inddor gateway is a high-performing, ready-t-ise device with multiple LoRaWAN network servers. it conncects to any LSN, and is cost-effective solution."
},
{
  "img":"./assets/firstimg.png",
  "name":"LoRaWAN Outdoor gateway",
  "paragraph":"Macnan's Outdoor LoraWAN Gateway is ideal for loT commercial deployment, compliant with Class A and C. Its modularity and customization options offer deployment flexibility."
},
{
  "img":"./assets/secondimg.png",
  "name":"RS485 to LoRaWAn vonverter/datalogger",
  "paragraph":"Macnman's Data logger can connect to MODBUS-RTU RS485;/ analoog/GPIO sensors and transit data from sensrors to the LoraWAN Netwsork. This device features stability and reliability."
},
{
  "img":"./assets/firstimg.png",
  "name":"LoRaWAn Contollers",
  "paragraph":"Macnman Lorewan controllers are built for integrationg multiple and various kinds various kinds of industrial interfaces like monitroing and controlling field sensors or devices."
},
]

}
