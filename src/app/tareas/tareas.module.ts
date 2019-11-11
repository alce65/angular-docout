import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TareasRoutingModule } from './tareas-routing.module';
import { MainComponent } from './main/main.component';
import { TareasSimpleComponent } from './tareas-simple/tareas-simple.component';
import { TareasPlusComponent } from './tareas-plus/tareas-plus.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { NewTareaComponent } from './new-tarea/new-tarea.component';
import { TareaComponent } from './tarea/tarea.component';


@NgModule({
  declarations: [MainComponent, TareasSimpleComponent, TareasPlusComponent, MenuComponent, NewTareaComponent, TareaComponent],
  imports: [
    CommonModule,
    FormsModule,
    TareasRoutingModule
  ]
})
export class TareasModule { }
