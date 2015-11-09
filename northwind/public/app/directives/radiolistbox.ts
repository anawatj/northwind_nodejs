import {Component, bootstrap,FORM_DIRECTIVES,CORE_DIRECTIVES} from 'angular2/angular2';
@Component(
{
	selector:'radiolistbox',
	template:`
			
		<div class="radio" *ng-for="#item of list">

			<div *ng-if="display==null||display==undefined||display==''">
					<input type="radio" name="{{name}}" [checked]="model==item"  (click)="selectedItem(item)"  [(ng-model)]="model"    value="{{item}}"  />
					<label >{{item}}</label>
			</div>
			 <div *ng-if="display!=null && display!=undefined && display!=''">
			 		<input type="radio" name="{{name}}" [checked]="model==item[value]" (click)="selectedItem(item)" [(ng-model)]="model"  value="{{item[value]}}"  />
					<label >{{item[display]}}</label>
			</div>

		</div>
	`,
	properties:['list:cb-list','display:cb-display','value:cb-value','model:cb-model','name:cb-name'],
	directives:[FORM_DIRECTIVES,CORE_DIRECTIVES]

})
export class RadioListBox
{
	list:[];
	display:string;
	value:string;
	model:Object;
	name:string;
	constructure()
	{

	}
	selectedItem(item)
	{
	
		if(this.value==null || this.value==undefined||this.value=="")
		{
			this.model = item;
		}else
		{
			this.model=item[this.value];
		}
	}
}