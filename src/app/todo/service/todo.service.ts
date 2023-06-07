import { Inject, Injectable } from "@angular/core";
import { Todo } from "../model/todo";
import { UUID_PROVIDER } from "src/app/injectionTokens/inject.tokens";

let n = 1;

@Injectable({
  providedIn: "root",
})
export class TodoService {
  private todos: Todo[] = [];
  constructor(
    @Inject(UUID_PROVIDER) private uuid: () => string
  ) /* private loggerService: LoggerService */ {}

  /**
   * elle retourne la liste des todos
   *
   * @returns Todo[]
   */
  getTodos(): Todo[] {
    return this.todos;
  }

  /**
   *Elle permet d'ajouter un todo
   *
   * @param todo: Todo
   *
   */
  addTodo(todo: Todo): void {
    todo.id = this.uuid();
    this.todos.push(todo);
  }

  /**
   * Delete le todo s'il existe
   *
   * @param todo: Todo
   * @returns boolean
   */
  deleteTodo(todo: Todo): boolean {
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
      return true;
    }
    return false;
  }

  /**
   * Logger la liste des todos
   */
  logTodos() {
    console.log(this.todos);
  }
}
