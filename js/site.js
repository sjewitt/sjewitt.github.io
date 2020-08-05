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
	
	/**
	start stuff
	*/
	init : function(){
		console.log('starting global functions');
		let page = $('body').attr('data-page');
		switch(page){
			case "home":
			console.log('homepage');
				let _index = this.splashImageIndex();
				console.log(this.splashscreen);
				console.log(_index);
				/**
				run splash routine to build this:
				<a href=".." title="Click to view fullsize image" target="_blank">
					<img src=".." alt="Doom maps" />
				</a>
				 */
				let _img = document.createElement("img");
				_img.setAttribute('src',this.splashscreen[this.splashImageIndex()]);
				_img.setAttribute('alt','Random Doom map image');
				let _a = document.createElement("a");
				_a.setAttribute('href',this.splashscreen[this.splashImageIndex()]);
				_a.setAttribute('title','Click to view fullsize image');
				_a.setAttribute('target','_blank');
				_a.appendChild(_img);
				console.log(_a);				
				/**
				empty the target element:
				 */
				$('#splash').empty().append(_a);
			
			break;
		}
	},
	/**
	See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
	 */
	splashImageIndex : function(){
		return Math.floor(Math.random() * Math.floor(this.splashscreen.length));
	},
	
}

/**
load pages
 */
$(function(){
	engine.init();
});


