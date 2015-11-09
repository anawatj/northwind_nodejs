export class UrlParams
{
	
	static getUrl()
	{
			var params = {};
			var url = document.URL;
			var arr = url.split('?');
			if(arr.length<2)
			{
				return "0";
			}
			var str = arr[1];
			var query = str.split('&');
			for(var index=0;index<query.length;index++)
			{
				var item = query[index];
				var field = item.split('=')[0];
				var value = item.split('=')[1];
				item[field]=value;
			
				params[field]=value;


			}
			return params;
	}
}