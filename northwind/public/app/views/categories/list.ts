import {Component, bootstrap,FORM_DIRECTIVES,CORE_DIRECTIVES} from 'angular2/angular2';
import {Http, HTTP_PROVIDERS,Headers} from 'angular2/http';
import {CategoriesEntryPage} from './entry.ts'
@Component(
	{
		selector:"categories-list",
		directives:[FORM_DIRECTIVES,CORE_DIRECTIVES],
		templateUrl:"../../northwind/public/app/views/categories/list.html"
	}
)
export class CategoriesListPage
{
	constructor()
	{
		
	}
	create()
	{
		window.location="northwind/categories/entry";
	}
	search()
	{
	
	}
}
bootstrap(CategoriesListPage);