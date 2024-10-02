/*
 * https://github.com/umarwebdeveloper/jquery-css-skills-bar
 * devsdesign: @umarwebdeveloper
 * Licensed under the MIT license
 */
(function(a){a.fn.skillBars=function(b){var c=a.extend({from:0,to:false,speed:1000,interval:100,decimals:0,onUpdate:null,onComplete:null,classes:{skillBarBar:".skillbar-bar",skillBarPercent:".skill-bar-percent",}},b);return this.each(function(){var i=a(this),j=(c.to!=false)?c.to:parseInt(i.attr("data-percent"));if(j>100){j=100}var d=c.from,h=Math.ceil(c.speed/c.interval),e=(j-d)/h,g=0,f=setInterval(k,c.interval);i.find(c.classes.skillBarBar).animate({width:parseInt(i.attr("data-percent"))+"%"},c.speed);function k(){d+=e;g++;a(i).find(c.classes.skillBarPercent).text(d.toFixed(c.decimals)+"%");if(typeof(c.onUpdate)=="function"){c.onUpdate.call(i,d)}if(g>=h){clearInterval(f);d=j;if(typeof(c.onComplete)=="function"){c.onComplete.call(i,d)}}}})}}(jQuery));