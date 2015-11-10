import {Component, bootstrap,FORM_DIRECTIVES,CORE_DIRECTIVES} from 'angular2/angular2';
import {Http, HTTP_PROVIDERS,Headers} from 'angular2/http';
import {UrlParams} from '../../directives/urlParams.ts';
import {CheckListBox} from '../../directives/checklistbox.ts';

@Component
(
	{
		selector:"territories-entry",
		directives:[FORM_DIRECTIVES,CORE_DIRECTIVES,CheckListBox],
		viewProviders: [HTTP_PROVIDERS],
		templateUrl:"../../northwind/public/app/views/territories/entry.html"
	}
)
export class TerritoriesEntryPage
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
bootstrap(TerritoriesEntryPage);