let engine = {
	
	/**
	Array of homepage image sources:
	 */
	
	splashscreen : [
		"https://github.com/sjewitt/doom_snippets/blob/master/screenshots/Screenshot_Doom_20200523_223655.png?raw=true",
		"https://github.com/sjewitt/doom_snippets/blob/master/screenshots/Screenshot%20from%202020-07-25%2008-25-00.png?raw=true",
		"https://raw.githubusercontent.com/sjewitt/doom_snippets/master/screenshots/Screenshot%20from%202020-07-24%2020-41-02.png",
		"https://github.com/sjewitt/doom_snippets/blob/master/screenshots/slope.png?raw=true",
		"https://github.com/sjewitt/doom_snippets/blob/master/screenshots/Screenshot%20from%202020-07-24%2020-38-07.png?raw=true",
		"https://github.com/sjewitt/doom_snippets/blob/master/screenshots/Screenshot%20from%202020-07-12%2011-26-40.png?raw=true",
		"https://github.com/sjewitt/doom_snippets/blob/master/screenshots/Screenshot%20from%202020-07-05%2010-07-28.png?raw=true",
		"https://github.com/sjewitt/doom_snippets/blob/master/screenshots/Screenshot%20from%202020-06-14%2017-01-05.png?raw=true"
	],
	
	imagebase : 'https://github.com/sjewitt/doom_snippets/blob/master/screenshots/',
	suffix : '?raw=true',
	mapScreenshots : {
		breachContainment : [
			
			
		],
		breachScars :[
			'breach_scars_2020-04-29 10-08-53.png',
			'breach_scars_2020-04-29 10-08-59.png',
			'breach_scars_2020-05-11 10-59-14.png',
			'breach_scars_2020-05-11 11-00-17.png',
			'breach_scars_20200523_223655.png'
		],
		
		theGate : [
			
			
		]
	},
	
	/**
	start stuff
	*/
	init : function(){
		let page = $('body').attr('data-page');
		switch(page){
			case "home":
				$('#splash').empty().append(this.getImageDOM(this.splashscreen[this.splashImageIndex()]));
			
			break;
			case "maps":
				this.appendMapScreenshotHandlers();
				
				this.buildScreenshotImages();
			break;
		}
	},
	/**
	See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
	 */
	splashImageIndex : function(){
		return Math.floor(Math.random() * Math.floor(this.splashscreen.length));
	},
	
	/**
	Build simple DOM for image
	 */
	getImageDOM : function(imgUrl){
		let _img = document.createElement("img");
		_img.setAttribute('src',imgUrl);
		_img.setAttribute('alt','Random Doom map image');
		let _a = document.createElement("a");
		_a.setAttribute('href',imgUrl);
		_a.setAttribute('title','Click to view fullsize image');
		_a.setAttribute('target','_blank');
		_a.appendChild(_img);
		return(_a);
	},
	
	/**
	append click handlers to all screenshot togglers:
	 */
	appendMapScreenshotHandlers : function(){
		$("h4.screenshots").each(function(){
			$(this).off('click').click(function(){
				if($(this).next().css('display') === 'none'){
					$(this).next().css({'display':'block'});
				}
				else{
					$(this).next().css({'display':'none'});
				}
			});
		});
	},
	
	buildScreenshotImages : function(){
		for( prop in this.mapScreenshots){
			console.log(this.mapScreenshots[prop]);
			/* iterate over each sub-array, and append each to the corresponding DOM ID element, Remove first... */
			}
		}
	}
	
}

/**
load pages
 */
$(function(){
	engine.init();
});


