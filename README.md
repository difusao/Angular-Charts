# CHARTS

## DESCRITIONS

Charts

- https://www.npmjs.com/package/ng2-charts
- https://valor-software.com/ng2-charts/

## CREATE PROJECT ANGULAR
Angular version with `ng version`.
```  _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 13.2.0
Node: 16.14.2
Package Manager: npm 8.5.0
OS: win32 x64

Angular:
...

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.1302.0 (cli-only)
@angular-devkit/core         13.2.0 (cli-only)
@angular-devkit/schematics   13.2.0 (cli-only)
@schematics/angular          13.2.0 (cli-only)
```
Create Angular Project
```
ng new frontend
cd frontend
ng serve
```
## PACKAGES CHARTS INSTALL
Install packages to Charts.
```
npm i ng2-charts@3.1.2 --save
npm i chart.js --save
```
Install packages to BootStrap.
```
npm i @ng-bootstrap/ng-bootstrap@^12.0.2 --save
npm i @popperjs/core@^2.10.2 --save
npm i bootstrap@^5.1.3 --save
```
File `package.json`:
```
"@ng-bootstrap/ng-bootstrap": "^12.0.2",
"@popperjs/core": "^2.10.2",
"bootstrap": "^5.1.3",
"chart.js": "^3.8.2",
"ng2-charts": "^3.1.2",
```
File `angular.json`:
```
"styles": [
    "node_modules/bootstrap/dist/css/bootstrap.min.css",
    "src/styles.css"
],
```
## PREPARE ROUTER ANGULAR TO COMPONENTS
Create component
```
ng g c component/chartline
```
Change main router file `app-routing.module.ts`:
```
const routes: Routes = [
  {
    path: 'chartline',
    component: ChartlineComponent
  },
  {
    path: '',
    component: AppComponent
  },
  {
    path: '**',
    redirectTo: '',
  }
];
```
Change file `app.component.ts`:
```
@Component({
    selector: 'app-root',
    template: `<router-outlet></router-outlet>`,
    // templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
```