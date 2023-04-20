import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainLayoutComponent} from "./main-layout.component";
import {RouterModule, RouterOutlet, Routes} from "@angular/router";
import {FirstTabComponent} from "./tabs/first-tab/first-tab.component";
import {SecondTabComponent} from "./tabs/second-tab/second-tab.component";
import {ThirdTabComponent} from "./tabs/third-tab/third-tab.component";


const routes: Routes = [{
  path: '',
  component: MainLayoutComponent,
  children: [
    { path: '', redirectTo: 'first-tab', pathMatch: 'full' },
    {
    path: 'first-tab',
    component: FirstTabComponent
  },{
    path: 'second-tab',
    component: SecondTabComponent
    },
    {
      path: 'third-tab',
      component: ThirdTabComponent
    }

  ]
}
]
@NgModule({
  declarations: [
    MainLayoutComponent,
    FirstTabComponent,
    SecondTabComponent,
    ThirdTabComponent],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    RouterOutlet,
    RouterModule
  ],
  exports: [RouterModule, MainLayoutComponent]
})
export class MainLayoutModule { }
