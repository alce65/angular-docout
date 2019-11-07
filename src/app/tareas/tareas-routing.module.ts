import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TareasSimpleComponent } from './tareas-simple/tareas-simple.component';
import { TareasPlusComponent } from './tareas-plus/tareas-plus.component';


const routes: Routes = [
  { path: '',
  component: MainComponent,
  children: [
        {path: 'simple', component: TareasSimpleComponent}, 
        {path: 'plus', component: TareasPlusComponent}
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TareasRoutingModule { }
