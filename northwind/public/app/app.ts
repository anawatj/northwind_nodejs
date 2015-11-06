import {Component, bootstrap,FORM_DIRECTIVES,CORE_DIRECTIVES} from 'angular2/angular2';
import {Http, HTTP_PROVIDERS,Headers} from 'angular2/http';

@Component({
  selector: 'app'
  templateUrl:"../northwind/public/app//app.html"

})

export class App
{
	constructor()
	{

	}
}
bootstrap(App);
