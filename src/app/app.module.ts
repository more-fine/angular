import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
// StoreModule.forRoot({})
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { 
    path: 'second-component', 
    component: SecondComponent, 
    children: [
      {
        path: 'child-a', 
        component: ChildAComponent, 
      },
      {
        path: 'child-b',
        component: ChildBComponent,
      },
    ]
  },
  { path: '',   redirectTo: '/first-component', pathMatch: 'full' },
  {path: 'product', component: ProductComponent} ,
  { path: '**', component: PageNotFoundComponent },  // 输入以上没有的路由path会到404页面
];
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    PageNotFoundComponent,
    ChildAComponent,
    ChildBComponent
  ],
  imports: [BrowserModule,AppRoutingModule , RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
