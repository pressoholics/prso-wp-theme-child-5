jQuery.noConflict();
(function($) {
	
	/*** Init Zurb Foundation **/
	$(document).ready(function(){
		
		$(document).foundation(
			function(response){
				//console.log(response);
			}
		);
		
		/*** Init Zurb Foundation Orbit **/
		if( $(".slideshow-wrapper").length > 0 ) {
			$(document).foundation(
				'orbit', {
				  animation: 'fade',
				  timer_speed: 10000,
				  pause_on_hover: true,
				  resume_on_mouseout: false,
				  animation_speed: 500,
				  stack_on_small: false,
				  navigation_arrows: true,
				  slide_number: true,
				  container_class: 'orbit-container',
				  stack_on_small_class: 'orbit-stack-on-small',
				  next_class: 'orbit-next',
				  prev_class: 'orbit-prev',
				  timer_container_class: 'orbit-timer',
				  timer_paused_class: 'paused',
				  timer_progress_class: 'orbit-progress',
				  slides_container_class: 'orbit-slides-container',
				  bullets_container_class: 'orbit-bullets',
				  bullets_active_class: 'active',
				  slide_number_class: 'orbit-slide-number',
				  caption_class: 'orbit-caption',
				  active_slide_class: 'active',
				  orbit_transition_class: 'orbit-transitioning',
				  bullets: true,
				  timer: true,
				  variable_height: false,
				  before_slide_change: function(){},
				  after_slide_change: function(){}
				}
			);
		}
		
		// Add animation effects to content images on scroll - Except IE6,7,8 (see feature detect logic)
		if( $.support.cssFloat ) {
		  
			$("#main img").css( 'visibility', 'hidden' );
			$("#main img").waypoint( function() {
			                                    
				$(this).delay(100).queue(function(next){
				    
				    if( !$(this).hasClass("animated") ) {
				    	//See _app-animate.scss for animation options
				        $(this).addClass("animated fadeIn");
				    }
				    
				    next();
				
				});                                    
			
			}, { offset: "99%" });
		  
		}
		
		//Add 'active' class to navigation elements
		function activate_nav_items() {
			
			//Init vars
			var currentPostID = prsoParentThemeLocalVars['currentPostID'];
			
			//Add active class to any nav li elements for this post
			$('.active-for-post-' + currentPostID).addClass('active');
			
			//Add active class to all the nav item's parents
			$('.active-for-post-' + currentPostID).parents('li.menu-item').addClass('active');
			
		}
		activate_nav_items();
		
		/*** Use this js doc for all application specific JS ***/
		
		// Input placeholder text fix for IE
		$('[placeholder]').focus(function() {
		  var input = $(this);
		  if (input.val() == input.attr('placeholder')) {
			input.val('');
			input.removeClass('placeholder');
		  }
		}).blur(function() {
		  var input = $(this);
		  if (input.val() == '' || input.val() == input.attr('placeholder')) {
			input.addClass('placeholder');
			input.val(input.attr('placeholder'));
		  }
		}).blur();
		
		// Prevent submission of empty form
		$('[placeholder]').parents('form').submit(function() {
		  $(this).find('[placeholder]').each(function() {
			var input = $(this);
			if (input.val() == input.attr('placeholder')) {
			  input.val('');
			}
		  })
		});
		
	});
	
})(jQuery);