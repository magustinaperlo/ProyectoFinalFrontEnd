import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new_proyecto.component.html',
  styleUrls: ['./new_proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  nombreP : string = ''
  descripcionP: string = ''
  constructor(private proyecto: ProyectoService, private router: Router) { }

  ngOnInit(): void {
  }
  onCreate():void{
    const proy = new Proyecto(this.nombreP,this.descripcionP);
    this.proyecto.save(proy).subscribe(data=> {
      alert("Proyecto añadido");
      this.router.navigate(['']);
    },err =>{
      alert("Falló la carga");
      this.router.navigate(['']);
        })
  }

}
