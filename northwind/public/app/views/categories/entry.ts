import {Component, bootstrap,FORM_DIRECTIVES,CORE_DIRECTIVES} from 'angular2/angular2';
import {Http, HTTP_PROVIDERS,Headers} from 'angular2/http';
import {UrlParams} from '../../directives/urlParams.ts';
import {CategoriesListPage} from './list.ts'
@Component(
	{
		selector:"categories-entry",
		directives:[FORM_DIRECTIVES,CORE_DIRECTIVES],
		viewProviders: [HTTP_PROVIDERS],
		templateUrl:"../../northwind/public/app/views/categories/entry.html"
	}
)
export class CategoriesEntryPage
{
	model=
	{
		id:0,
		categoryName:"",
		description:"",
		createAt:new Date(),
		updateAt:new Date()
	};
	constructor(http:Http)
	{
		this.http= http;

		
		var key = UrlParams.getUrl().id;
		if(key==undefined)
		{
			key=0;
		}
		
		this.http.get("northwind/categories/single?id="+key).map(r=>r.json()).subscribe(res=>this.model=res);


	}
	save()
	{
		this.http.post("northwind/categories/save", JSON.stringify(this.model), {
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }).map(r => r.json()).subscribe((res:Response)=>this.success(res));

 		


	}
	success(res)
	{
			window.location = "northwind/categories/entry?id="+res.id;
	}
}
bootstrap(CategoriesEntryPage);