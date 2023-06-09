import { NgModule } from "@angular/core";
import { RouterModule, Route, PreloadAllModules } from "@angular/router";
import { MiniWordComponent } from "./directives/mini-word/mini-word.component";
import { ColorComponent } from "./components/color/color.component";
import { FrontComponent } from "./templates/front/front.component";
import { AdminComponent } from "./templates/admin/admin.component";
import { LoginComponent } from "./auth/login/login.component";
import { NF404Component } from "./components/nf404/nf404.component";
import { CustomPreloadingStrategy } from "./preloading strategies/custom.preloading-strategy";
/* cv/add */

/* /todo */
const routes: Route[] = [
  { path: "login", component: LoginComponent },

  {
    path: "",
    component: FrontComponent,
    children: [
      { path: "word", component: MiniWordComponent },
      {
        path: "todo",
        loadChildren: () =>
          import("./todo/todo.module").then((m) => m.TodoModule),
      },
    ],
  },
  {
    path: "cv",
    data: {
      preload: true,
    },
    loadChildren: () => import("./cv/cv.module").then((m) => m.CvModule),
  },
  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "color/:defaultColor/:color", component: ColorComponent },
    ],
  },
  { path: "**", component: NF404Component },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        preloadingStrategy: CustomPreloadingStrategy,
      }
      /*    {
      enableTracing: true,
    } */
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
