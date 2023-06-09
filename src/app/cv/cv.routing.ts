import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/guards/auth.guard";
import { AddCvComponent } from "./add-cv/add-cv.component";
import { CvComponent } from "./cv/cv.component";
import { DetailsCvComponent } from "./details-cv/details-cv.component";
import { MasterListeComponent } from "./master-liste/master-liste.component";
import { DetailCvResolverResolver } from "./resolvers/detail-cv-resolver.resolver";

const CV_ROUTES: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forChild(CV_ROUTES)],
  exports: [RouterModule],
})
export class CvRoutingModule {}
