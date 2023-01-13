import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditacercadeComponent } from './components/acerca-de/editacercade.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { NewProyectoComponent } from './components/proyecto/new_proyecto.component';
import { EditProyectoComponent } from './components/proyecto/edit_proyecto.component';
import { HomeComponent } from './components/home/home.component';
import { EditSkillComponent } from './components/hys/edit-skill.component';
import { NewSkillComponent } from './components/hys/new-skill.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'nuevaexp',component : NewExperienciaComponent},
  {path: 'editexp/:id', component :EditExperienciaComponent},
  {path: 'nuevaedu', component: NeweducacionComponent},
  {path:'editedu/:id',component: EditeducacionComponent},
  {path:'newskill',component: NewSkillComponent},
  {path: 'editskill/:id', component :EditSkillComponent},
  {path: 'editacercade/:id', component :EditacercadeComponent},
  {path:'newproyect',component: NewProyectoComponent},
  {path:'editproyect',component: EditProyectoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
