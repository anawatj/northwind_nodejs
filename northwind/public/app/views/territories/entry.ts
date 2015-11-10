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
	regions=[];
	model=
	{
		id:0,
		territoryName:"",
		regionId:undefined
	}
	constructor(http:Http)
	{
		this.http=http;
		this.http.get("northwind/masters/regions/all").map(r=>r.json()).subscribe(regions=>this.regions=regions);
	}
	save()
	{
		this.http.post("northwind/territories/save",JSON.stringify(this.model), {
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      	}).map(r => r.json()).subscribe((res:Response)=>this.success(res));
	}
	clear()
	{
	
	}
}
bootstrap(TerritoriesEntryPage);