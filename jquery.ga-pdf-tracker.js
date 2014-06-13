(function($){
	$.fn.ga_pdf_tracker = function(options) {
		var defaults = {
			delay : 100,
			extention : ['pdf']
		};
		var setting = $.extend(defaults,options);
		var s="";
		for(i=0;i<setting.extention.length;i++){
			if(i>0) s+='|';
			s+=setting.extention[i];
		}
		var reg =new RegExp("^(.+?)\.("+s+")$", "i");
		var t=this;
		var _set_tracking = function(){
			$(t).click(function(e){
				var ot=$(e.target);
				if(!ot.is("a")){ot=ot.parent("a");}
				var h="";
				if(ot.is("a")){
					h=ot.attr("href");
					if(h.match(reg)) {
						var u=RegExp.input;
						var idx=u.lastIndexOf("/")+1;
						if(idx>0) {
							mm=u.substr(idx,u.length);
						} else {
							mm=u;
						}
						pageTracker._trackPageview(mm);
					}
				} 
			});
		}
		setTimeout(_set_tracking,setting.delay);
		return(this);
		
	}
}(jQuery));
