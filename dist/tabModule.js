//Tab Module

(function($,window){
	'use-strict';

	var elements = {};

	//View

	var constructTab = function(tabContainer){
		var tabContentEl = $(tabContainer).find('.tab-content > li');
		$.each(tabContentEl,function(){
			hideTabs(this);
		});
		var activeTab = ($('.tab-legend .active').length)? $('.tab-legend .active') : $('.tab-legend > li:first-child');
		showTab(activeTab);
	};

	var hideTabs = function(tab,callback){
		$(tab).hide().removeClass('active');
		if(callback){
			callback();
		}
	};

	var showTab = function(tab){
		var index = tab.index();

		hideTabs($('.tab-content .active'));
		$('.tab-legend .active').removeClass('active').addClass('inactive');
		$('.tab-legend > li').eq(index).removeClass('inactive').addClass('active');
		$('.tab-content > li').eq(index).show().addClass('active');
	};


	//Controller
	var tabController = function(tabContainer){
		var tabLegendEl = $(tabContainer).find('.tab-legend li');
		$.each(tabLegendEl,function(){
			$(this).on('click', function(){
				var tabElement = $(this);
				showTab(tabElement);
			});
		});
	};

	var init = function(){
		console.log('Initiating Tab Module');
		var self = this;
		var tabElement = $('.tab');

		$.each(tabElement, function(){
			constructTab(this);
			tabController(this);
		});
	};

	//public
	var tabModule = {
		init: init
	};

	//transport
	if(typeof(define)==='function' && define.amd){
		define(tabModule);
	} else if (typeof(exports)==='object'){
		module.tabModule = tabModule;
	} else {
		window.tabModule = tabModule;
	}

}(jQuery,window));
