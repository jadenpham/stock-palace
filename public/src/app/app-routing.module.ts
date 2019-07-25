import { BuyComponent } from './buy/buy.component';
import { ViewComponent } from './view/view.component';
import { AllComponent } from './all/all.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { SellComponent } from './sell/sell.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: "", component: HomeComponent},
  {path: "sell", component: SellComponent},
  {path: "browse", component: AllComponent},
  {path: "browse/view/:id", component: ViewComponent},
  {path: "browse/view/:id/buy", component: BuyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
