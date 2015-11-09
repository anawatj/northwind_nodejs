import {Component, bootstrap,FORM_DIRECTIVES,CORE_DIRECTIVES} from 'angular2/angular2';
import {Http, HTTP_PROVIDERS,Headers} from 'angular2/http';
import {UrlParams} from '../../directives/urlParams.ts';
//import {CustomersListPage} from './list.ts'
import {CheckListBox} from '../../directives/checklistbox.ts';

@Component
(
	{
		selector:"customers-entry",
		directives:[FORM_DIRECTIVES,CORE_DIRECTIVES,CheckListBox],
		viewProviders: [HTTP_PROVIDERS],
		templateUrl:"../../northwind/public/app/views/customers/entry.html"
	}
)
export class CustomersEntryPage
{
	constructor(http:Http)
	{

	}
	save()
	{

	}
	clear()
	{

	}

}
bootstrap(CustomersEntryPage);