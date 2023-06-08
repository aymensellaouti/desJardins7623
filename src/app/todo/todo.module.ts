import { NgModule } from "@angular/core";
import { TodoComponent } from "./todo/todo.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: "", component: TodoComponent }]),
  ],
  providers: [],
  exports: [],
})
export class TodoModule {}
