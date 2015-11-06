import {Component, bootstrap,FORM_DIRECTIVES,CORE_DIRECTIVES} from 'angular2/angular2';
import {Http, HTTP_PROVIDERS,Headers} from 'angular2/http';
import { routerInjectables,RouterOutlet, RouterLink,Router  } from 'angular2/router';

@Component(
	{
		selector:"main",
		templateUrl:"./main.html",
		 directives:[FORM_DIRECTIVES,CORE_DIRECTIVES,RouterOutlet, RouterLink,routerInjectables ],
	}
)
class MainPage
{
	
}