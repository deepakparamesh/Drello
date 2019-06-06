import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { DashboardComponent } from './dashboard/dashboard.component';


import { DashboardService } from './dashboard/dashboard.service';
import { BoardService } from './board/board.service';
import { HttpClient } from './httpclient.service';

const appRoutes: Routes = [
  {path: 'b/:id', component: BoardComponent},
  {path: '', component: DashboardComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DashboardService, BoardService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
