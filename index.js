requirejs.config({
	// module name mapped to CDN url
	paths: {
		'react': 'https://unpkg.com/react@15.3.2/dist/react',
		'react-dom': 'https://unpkg.com/react-dom@15.3.2/dist/react-dom',
		'components': 'scripts/dist/components'
	}
});

require(['scripts/dist/index.r']);