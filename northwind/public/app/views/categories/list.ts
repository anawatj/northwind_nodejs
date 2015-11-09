import {Component, bootstrap,FORM_DIRECTIVES,CORE_DIRECTIVES} from 'angular2/angular2';
import {Http, HTTP_PROVIDERS,Headers} from 'angular2/http';
import {CategoriesEntryPage} from './entry.ts'
@Component(
	{
		selector:"categories-list",
		directives:[FORM_DIRECTIVES,CORE_DIRECTIVES],
		viewProviders: [HTTP_PROVIDERS],
		templateUrl:"../../northwind/public/app/views/categories/list.html"
	}
)
export class CategoriesListPage
{
	model=
	{
		categoryName:""
	};
	results=[];
	constructor(http:Http)
	{
		this.http = http;
	}
	create()
	{
		window.location="northwind/categories/entry";
	}
	search()
	{
			if(this.model.categoryName==undefined)
			{
				this.model.categoryName="";
			}
			this.http.post('northwind/categories/search',JSON.stringify(this.model))
			.map(r=>r.json())
			.subscribe(results=>this.results=results);
	}
	edit(item)
	{
			window.location="northwind/categories/entry?id="+item.id;
	}
	remove(item)
	{
			this.http.delete('northwind/categories/delete?id='+item.id)
			.map(r=>r.json())
			.subscribe((res:Response)=>this.success(res));
	}
	success(res)
	{
		window.location="northwind/categories/list";
	}
}
bootstrap(CategoriesListPage);