import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { MiniWordComponent } from "./directives/mini-word/mini-word.component";
import { ColorComponent } from "./components/color/color.component";
import { FrontComponent } from "./templates/front/front.component";
import { AdminComponent } from "./templates/admin/admin.component";
import { LoginComponent } from "./auth/login/login.component";
import { NF404Component } from "./components/nf404/nf404.component";
import { AuthGuard } from "./auth/guards/auth.guard";
import { AddCvComponent } from "./cv/add-cv/add-cv.component";
import { CvComponent } from "./cv/cv/cv.component";
import { DetailsCvComponent } from "./cv/details-cv/details-cv.component";
import { MasterListeComponent } from "./cv/master-liste/master-liste.component";
import { DetailCvResolverResolver } from "./cv/resolvers/detail-cv-resolver.resolver";
/* cv/add */

/* /todo */
const routes: Route[] = [
  { path: "login", component: LoginComponent },
  {
    path: "cv",
    children: [
      {
        path: "",
        component: CvComponent,
      },
      {
        path: "all",
        component: MasterListeComponent,
        children: [{ path: ":id", component: DetailsCvComponent }],
      },
      { path: "add", component: AddCvComponent, canActivate: [AuthGuard] },
      {
        path: ":id",
        component: DetailsCvComponent,
        resolve: {
          cv: DetailCvResolverResolver,
        },
      },
    ],
  },
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
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "color/:defaultColor/:color", component: ColorComponent },
    ],
  },
  /*   { path: "**", component: NF404Component }, */
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
      /*    {
      enableTracing: true,
    } */
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
