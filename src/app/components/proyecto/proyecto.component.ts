import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';
@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  proy: Proyecto[]=[];
  constructor(private proyecto: ProyectoService, private tokenService: TokenService) { }

  isLogged =false;

  ngOnInit(): void {
    this.cargarProyecto();
    if(this.tokenService.getToken()){
      this.isLogged =true;
    }else{
      this.isLogged=false;
    }
  }
  cargarProyecto():void{
    this.proyecto.lista().subscribe(
      data=>{this.proy= data; })
  }
  delete(id?:number){
    if(id!= undefined){
      this.proyecto.delete(id).subscribe(
        data=>{
          this.cargarProyecto();
        },err=>{
          alert("No se pudo eliminar el proyecto");
        }
      )
    }
  }

}
