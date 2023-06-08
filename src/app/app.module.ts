import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";

import { NgxUiLoaderModule } from "ngx-ui-loader";
import { ToastrModule } from "ngx-toastr";

import { AppComponent } from "./app.component";
import { FirstComponent } from "./components/first/first.component";
import { SecondComponent } from "./components/second.component";
import { ColorComponent } from "./components/color/color.component";
import { TwoComponent } from "./components/two/two.component";
import { CardProfilComponent } from "./components/card-profil/card-profil.component";
import { PereComponent } from "./components/pere/pere.component";
import { FilsComponent } from "./components/fils/fils.component";

import { AddCvComponent } from "./cv/add-cv/add-cv.component";
import { CvComponent } from "./cv/cv/cv.component";
import { DetailsCvComponent } from "./cv/details-cv/details-cv.component";

import { NgstyleComponent } from "./directives/ngstyle/ngstyle.component";
import { MiniWordComponent } from "./directives/mini-word/mini-word.component";
import { NgclassComponent } from "./directives/ngclass/ngclass.component";
import { TodoComponent } from "./todo/todo/todo.component";

import { HighlightDirective } from "./directives/highlight.directive";
import { RainbowDirective } from "./directives/rainbow.directive";

import { Btc2usdPipe } from "./pipes/btc2usd.pipe";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FrontComponent } from "./templates/front/front.component";
import { AdminComponent } from "./templates/admin/admin.component";
import { NF404Component } from "./components/nf404/nf404.component";
import { TestFormComponent } from "./components/test-form/test-form.component";
import { LoginComponent } from "./auth/login/login.component";
import { TestObservableComponent } from "./components/test-observable/test-observable.component";
import { TestHttpComponent } from "./components/test-http/test-http.component";
import { AuthInterceptorProvider } from "./auth/interceptors/auth.interceptor";
import { ListComponent } from "./cv/list/list.component";
import { ItemComponent } from "./cv/item/item.component";
import { DefaultImagePipe } from "./cv/pipes/default-image.pipe";
import { EmbaucheComponent } from "./cv/embauche/embauche.component";
import { CvCardComponent } from "./cv/cv-card/cv-card.component";
import {
  LOGGER_SERVICE_TOKEN,
  UUID_PROVIDER,
} from "./injectionTokens/inject.tokens";
import {
  createLogger2ServiceFactory,
  createLoggerServiceFactory,
} from "./factories/logger.provider-factory";
import { LoggerService } from "./services/logger.service";
import { UtilsService } from "./services/utils.service";
import {
  createMathServiceFactory,
  createUtilsServiceFactory,
} from "./factories/utils.provider-factory";
import { MathematiqueService } from "./services/mathematique.service";

import { v4 as uuidv4 } from "uuid";
import { MasterListeComponent } from "./cv/master-liste/master-liste.component";
import { CvService } from "./cv/services/cv.service";
import { SliderComponent } from './rxjs/slider/slider.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent,
    TwoComponent,
    CardProfilComponent,
    PereComponent,
    FilsComponent,
    AddCvComponent,
    CvComponent,
    ListComponent,
    ItemComponent,
    DetailsCvComponent,
    CvCardComponent,
    CardProfilComponent,
    EmbaucheComponent,
    DefaultImagePipe,
    NgstyleComponent,
    MiniWordComponent,
    NgclassComponent,
    HighlightDirective,
    RainbowDirective,
    Btc2usdPipe,
    TodoComponent,
    NavbarComponent,
    FrontComponent,
    AdminComponent,
    NF404Component,
    TestFormComponent,
    LoginComponent,
    TestObservableComponent,
    TestHttpComponent,
    MasterListeComponent,
    SliderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    AppRoutingModule,
    HttpClientModule,
    NgxUiLoaderModule,
  ],
  providers: [
    AuthInterceptorProvider,
    {
      provide: LoggerService,
      useFactory: createLoggerServiceFactory,
      multi: true,
    },
    {
      provide: LoggerService,
      useFactory: createLogger2ServiceFactory,
      multi: true,
    },
    {
      provide: UUID_PROVIDER,
      useValue: uuidv4,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
