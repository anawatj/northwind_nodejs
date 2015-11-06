import {Component, bootstrap,FORM_DIRECTIVES,CORE_DIRECTIVES} from 'angular2/angular2';
import {Http, HTTP_PROVIDERS,Headers} from 'angular2/http';
import {CategoriesListPage} from './list.ts'
@Component(
	{
		selector:"categories-entry",
		directives:[FORM_DIRECTIVES,CORE_DIRECTIVES],
		templateUrl:"./entry.html"
	}
)
export class CategoriesEntryPage
{
	constructor()
	{
		
	}
}
