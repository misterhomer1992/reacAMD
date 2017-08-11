const gulp = require("gulp");
const babel = require("gulp-babel");
const jsx = require('gulp-jsx');
const filter = require('gulp-filter');

gulp.task("default", function () {
	const es6Filter = filter(['**/*.js', '!**/*.r.js'], {restore: true});
	const es6_reactFilter = filter(['**/*.r.js'], {restore: true});

	return gulp.src("scripts/src/**")

		.pipe(es6Filter)
		.pipe(babel({
			presets: ['env']
		}))
		.pipe(es6Filter.restore)

		.pipe(es6_reactFilter)
		.pipe(
			babel({
				presets: [
					["env", {
						modules: 'amd'
					}]
				],
				"plugins": [
					"transform-react-jsx"
				]
			})
		)
		.pipe(
			jsx({
				factory: 'React.createClass'
			})
		)
		.pipe(es6_reactFilter.restore)

		.pipe(gulp.dest("scripts/dist"));
});