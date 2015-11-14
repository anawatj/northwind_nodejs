import {Component, bootstrap,FORM_DIRECTIVES,CORE_DIRECTIVES} from 'angular2/angular2';
import {Http, HTTP_PROVIDERS,Headers} from 'angular2/http';
import {UrlParams} from '../../directives/urlParams.ts';

import {CustomersEntryPage} from './entry.ts';

@Component(
{
	selector:'customers-list',
	directives:[FORM_DIRECTIVES,CORE_DIRECTIVES],
	viewProviders: [HTTP_PROVIDERS],
	templateUrl:"../../northwind/public/app/views/customers/list.html"
})
export class CustomersListPage
{
	model=
	{
		companyName:"",
		contactName:"",
		contactTitle:"",
		city:"",
		region:"",
		country:""
	};
	results=[];
	constructor(http:Http)
	{
		this.http=http;
	}
	search()
	{
		if(this.model.companyName==undefined)
		{
			this.model.companyName="";
		}
		if(this.model.contactName==undefined)
		{
			this.model.contactName="";
		}
		if(this.model.contactTitle==undefined)
		{
			this.model.contactTitle="";
		}
		if(this.model.city==undefined)
		{
			this.model.city="";
		}
		if(this.model.region==undefined)
		{
			this.model.region="";
		}
		if(this.model.country==undefined)
		{
			this.model.country="";
		}
		this.http.post('northwind/customers/search',JSON.stringify(this.model), {
        headers: new Headers({
          'Content-Type': 'application/json'
        })})
		.map(r=>r.json())
		.subscribe(results=>this.results=results);
	}
	edit(item)
	{
		window.location= "northwind/customers/entry?id="+item.id;
	}
	remove(item)
	{

	}
}
bootstrap(CustomersListPage);