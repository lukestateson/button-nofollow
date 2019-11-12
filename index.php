<?php
/*
Plugin Name: Button rel=nofollow
Plugin URI: https://www.patreon.com/lukestateson
Description: Add rel=nofollow to Gutenberg Button Block
Author: Luke Stateson
Version: 1.1
*/

function button_rel_nofollow() {
	wp_enqueue_script(
		'myguten-script',
		plugins_url('guten.js', __FILE__),
		array('wp-blocks')
	);
}
add_action('enqueue_block_editor_assets', 'button_rel_nofollow');