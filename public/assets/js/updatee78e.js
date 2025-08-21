jQuery(document).ready(function () {	
	jQuery(".nav-search form#search-block-form").addClass("hide");
	jQuery(".bg-image-section").each(function(){
		var image_url_background = jQuery(this).attr('data-gutter-class');
		jQuery(this).css('background-image','url("' + image_url_background + '")');
	});
	
	/*jQuery(".tab-area .nav-link").click(function(){
		jQuery(".tab-area .tab-pane").hide();
		var data_bs_target = jQuery(this).attr('data-bs-target');
		jQuery(".tab-area .tab-pane").hide();
		//jQuery("#"+data_bs_target).show();	
		jQuery(".tab-area " + data_bs_target).show();
		return false;
	});
	
	jQuery(".tab-area-two .nav-link").click(function(){
		jQuery(".tab-area-two .tab-pane").hide();
		var data_bs_target = jQuery(this).attr('data-bs-target');
		jQuery(".tab-area-two .tab-pane").hide();
		//jQuery("#"+data_bs_target).show();	
		jQuery(".tab-area-two " + data_bs_target).show();
		return false;
	});*/
	
//	jQuery(".nav-search form#search-block-form").addClass("hide");
	//jQuery("#block-drupalet-optech-main-menu li.menu-item--expanded a").append('<i class="ri-arrow-down-s-fill"></i>');
	jQuery("#block-drupalet-optech-main-menu li.menu-item--expanded a").eq( 0 ).append('<i class="ri-arrow-down-s-fill"></i>');
	jQuery("ul.sub-menu li.menu-item--expanded a").eq( 0 ).append('<i class="ri-arrow-down-s-fill"></i>');
	
	
	jQuery("a.nav-subdropdown-link").click(function(event) {
	  event.preventDefault(); // Prevent the default link behavior
	  // Your custom code here
	  console.log("Link clicked!");
	  window.location.href = $(this).attr("href"); // Navigate to the link
	});
	
});