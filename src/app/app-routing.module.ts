import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecieverComponent } from './reciever/reciever.component';
import { SenderComponent } from './sender/sender.component';

const routes: Routes = [
  {
    path:'sender',
    component: SenderComponent
  },
  {
    path:'rec',
    component: RecieverComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
