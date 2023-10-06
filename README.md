# Using Angular Nested Child Routes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code

```javascript
const routes: Routes = [
  {path: '', redirectTo: "home", pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  {
    path: 'products/:id', component: ProductsComponent, children: [
      {path: '', redirectTo: 'overview', pathMatch: 'full'},
      {path: 'spec', component: ProductDetailsSpecComponent},
      {path: 'overview', component: ProductDetailsOverviewComponent},
    ]
  },
];
```
