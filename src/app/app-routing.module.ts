import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingViewComponent } from './landing-view/landing-view.component';
import { OrderViewComponent } from './order-view/order-view.component';
import { canLeaveViewGuard } from './guards/can-leave-view.guard';
import { LoginViewComponent } from './login-view/login-view.component';
import { DairyProductsRequestsComponent } from './dairy-products-requests/dairy-products-requests.component';
import { authGuard } from './guards/auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: LandingViewComponent },
  {
    path: 'order-view/:id',
    component: OrderViewComponent,
    canDeactivate: [canLeaveViewGuard],
  },
  { path: 'login', component: LoginViewComponent },
  {
    path: 'dairy-products-requests',
    component: DairyProductsRequestsComponent,
    canActivate: [authGuard],
  },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
