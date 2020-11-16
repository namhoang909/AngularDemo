import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { AdminModule } from './admin/admin.module';
import { AdminGuard } from './core/guards/admin.guard'

const routes: Routes = [
  { path: '', loadChildren: () => HomeModule },
  { path: 'admin', loadChildren: () => AdminModule, canActivate: [AdminGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
