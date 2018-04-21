import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherService } from './weather.service';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { TestAppNavbarComponent } from './test-app-navbar/test-app-navbar.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WeatherComponent } from './weather/weather.component';
import { PostsComponent } from './posts/posts.component';



const routes: Routes=[
  {path: 'home', component: HomeComponent},
  {path: 'employees', component: EmployeeListComponent},
  {path: 'about', component: AboutComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'weather', component: WeatherComponent},
  {path: 'contact', component: ContactComponent},  
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
  
];


@NgModule({
  declarations: [
    AppComponent,
    TestAppNavbarComponent,
    EmployeeListComponent,
    PageNotFoundComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    WeatherComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      routes,
      {enableTracing:true}
    )
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
