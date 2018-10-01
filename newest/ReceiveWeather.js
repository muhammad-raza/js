function Weather(){
	this.address= "https://www.metaweather.com/api/";
	
	console.log(this.address);
}
Weather.prototype.getTextboxVal= function(searched_city){
							var l =this;

			$.ajax({
                    url: l.address +'location/search/?query='+searched_city,
					success:function(data){
					$.each(data,function(i,v){
						if(i===0){
							var woeid=v.woeid;
							return woeid;
						}
						});
					}
					});
}
Weather.prototype.getWoeid= function(allData){
					var l =this;

	return $.ajax({
		 url: l.address+'location/'+allData+'/',
		});



}
