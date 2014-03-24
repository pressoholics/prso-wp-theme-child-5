<?php
/******************************************************************
 * 	Text Domain
 *
 *****************************************************************/
 define( 'PRSOTHEMEFRAMEWORK__DOMAIN', 'prso-child-theme-domain' );

/**
* ADD CUSTOM THEME FUNCTIONS HERE -----
*
*/

/**
* prso_theme_localize
* 
* Add all localized script vars here.
* 
* @access 	public
* @author	Ben Moody
*/
function prso_theme_localize() {
	
	//Init vars
	$handle 	= 'prso-theme-app';
	$obj_name	= 'prsoThemeLocalVars';
	$data_array = array();
	
	/** Cache data for localization **/
	
	
	wp_localize_script( $handle, $obj_name, $data_array );
	
}
//add_action( 'wp_print_scripts', 'prso_theme_localize', 100 );