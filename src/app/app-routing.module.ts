import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainLayoutComponent} from "./main-layout/main-layout.component";
import {FirstTabComponent} from "./main-layout/tabs/first-tab/first-tab.component";
import {SecondTabComponent} from "./main-layout/tabs/second-tab/second-tab.component";
import {ThirdTabComponent} from "./main-layout/tabs/third-tab/third-tab.component";

const routes: Routes = [
  {
path: '',
component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'first-tab', pathMatch: 'full' },
      { path: 'first-tab', component: FirstTabComponent },
      { path: 'second-tab', component: SecondTabComponent },
      { path: 'third-tab', component: ThirdTabComponent }
    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
