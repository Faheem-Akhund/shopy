import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApprovedComponent } from './approved/approved.component';
import { ChatComponent } from './chat/chat.component';
import { DetailsComponent } from './details/details.component';
import { DiscardedComponent } from './discarded/discarded.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './movie/movie.component';
import { OrderComponent } from './order/order.component';

import {  AuthGuard  as AuthGuard } from './services/Auth Guard';
const routes: Routes = [
  { path: '',redirectTo:'login',pathMatch:'full'},
{ path: 'login',component:LoginComponent},
{ path: 'home',component:HomeComponent},
{ path: 'movie',component:MovieComponent},
{ path: 'details',component:DetailsComponent},
{path:'approved',component:ApprovedComponent},
{path:'orders',component:OrderComponent},
{path:'footer',component:FooterComponent},
{path:'chat',component:ChatComponent},

{
  path:'discarded',
  component:DiscardedComponent

},

{path: '**',component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
