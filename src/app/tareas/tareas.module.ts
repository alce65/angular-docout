import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TareasRoutingModule } from './tareas-routing.module';
import { MainComponent } from './main/main.component';
import { TareasSimpleComponent } from './tareas-simple/tareas-simple.component';
import { TareasPlusComponent } from './tareas-plus/tareas-plus.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewTareaComponent } from './new-tarea/new-tarea.component';
import { TareaComponent } from './tarea/tarea.component';
import { TareasRxComponent } from './tareas-rx/tareas-rx.component';
import { TareaRxComponent } from './tarea-rx/tarea-rx.component';
import { NewTareaRxComponent } from './new-tarea-rx/new-tarea-rx.component';


@NgModule({
  declarations: [MainComponent, TareasSimpleComponent, TareasPlusComponent, MenuComponent, NewTareaComponent, TareaComponent, TareasRxComponent, TareaRxComponent, NewTareaRxComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TareasRoutingModule
  ]
})
export class TareasModule { }
