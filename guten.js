function addBlockRel( props, blockType ) {
	if(blockType.name === 'core/button') {
		var host = document.location.host;
		var href = props.children.props.href;
		if(href.indexOf(host) > 0) {
			// Local link
			Object.assign( props.children.props, { rel: '' } )
		} else {
			// Not our host
			Object.assign( props.children.props, { rel: 'nofollow' } )
		}
		return props;
	}
	return props;
}

wp.hooks.addFilter(
	'blocks.getSaveContent.extraProps',
	'button-rel-nofollow/add-block-rel',
	addBlockRel
);