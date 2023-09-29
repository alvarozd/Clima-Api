import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.scss']
})
export class CartaComponent {
  ubicacion: any;
  informacion: any;
  clima: any;
  ciudad: string = 'Bogota';
  dia:any = ''
  clasetarjeta: string = 'dia';

  constructor(private weatherService: ApiService) {}

  buscar() {
    this.weatherService.getWeatherData(this.ciudad).subscribe(data => {
      const { current, request } = data;
      this.ubicacion = request;
      this.informacion = current;
      this.clima = current.weather_descriptions[0];
      this.dia = current.is_day
      
       console.log(this.informacion);
       console.log(this.dia)

    });
  }
}