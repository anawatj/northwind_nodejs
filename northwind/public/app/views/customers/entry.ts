import {Component, bootstrap,FORM_DIRECTIVES,CORE_DIRECTIVES} from 'angular2/angular2';
import {Http, HTTP_PROVIDERS,Headers} from 'angular2/http';
import {UrlParams} from '../../directives/urlParams.ts';
import {CustomersListPage} from './list.ts'
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
	demoGraphics=[];
	model=
	{
		id:0,
		companyName:"",
		contactName:"",
		contactTitle:"",
		address:"",
		city:"",
		region:"",
		postalCode:"",
		country:"",
		phone:"",
		fax:"",
		demographics:[]
	}
	constructor(http:Http)
	{
		this.http=http;
		this.http.get("northwind/masters/demographics/all")
		.map(r=>r.json())
		.subscribe(demoGraphics=>this.demoGraphics=demoGraphics);
	}
	save()
	{
		this.http.post("northwind/customers/save", JSON.stringify(this.model), {
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      	}).map(r => r.json()).subscribe((res:Response)=>this.success(res));
	}
	clear()
	{

	}

}
bootstrap(CustomersEntryPage);