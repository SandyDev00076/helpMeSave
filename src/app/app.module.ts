import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewItemComponent } from './new-item/new-item.component';
import { FormsModule } from '@angular/forms';
import { ItemCardComponent } from './item-card/item-card.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    pathMatch: 'full'
  },
  {
    path: 'new',
    component: NewItemComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NewItemComponent,
    ItemCardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
