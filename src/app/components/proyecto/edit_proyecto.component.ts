import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-edit_proyecto',
  templateUrl: './edit_proyecto.component.html',
  styleUrls: ['./edit_proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {
  proyecto :Proyecto = null;
  constructor(private Proyecto : ProyectoService, private activatedRouter: ActivatedRoute,
    private router :Router) { }

  ngOnInit(): void {
    const id= this.activatedRouter.snapshot.params['id'];
    this.Proyecto.detail(id).subscribe(
      data=>{
          this.proyecto =data;
      },err=>{
        alert("Error al modificar proyecto");
        this.router.navigate(['']);
      }
    )
  }
  onUpdate():void{
    const id= this.activatedRouter.snapshot.params['id'];
    this.Proyecto.update(id,this.proyecto).subscribe(
      data=>{
        this.router.navigate(['']);
      },err=>{
        alert("Error al modificar proyecto");
        this.router.navigate(['']);
      }
    )
  }

}