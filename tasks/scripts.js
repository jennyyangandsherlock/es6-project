import gulp from 'gulp';//任务管理
import gulpif from 'gulp-if';//gulp语句做if判断
import concat from 'gulp-concat';//gulp做文件拼接
import webpack from 'webpack';//打包
import gulpWebpack from 'webpack-stream';//文件流处理
import named from 'vinyl-named';//文件重命名和标志
import livereload from 'gulp-livereload';//文件修改以后浏览器自动刷新  --热更新
import plumber from 'gulp-plumber';//处理文件信息流的包
import rename from 'gulp-rename';//对文件重命名的包
import uglify from 'gulp-uglify';//压缩css。js的包
import {log,colors} from 'gulp-util';//log和色彩的输出
import args from './util/args.js';//解析args

gulp.task('scripts',() => {
	return gulp.src(['app/js/index.js'])
		.pipe(plumber({
			errorHandle : function(){
				
			}
		}))
		.pipe(named())
		.pipe(gulpWebpack({
			module : {
				rules : [{
					test:/\.js$/,
					loader : 'babel-loader'
				}]
			}
		}),null,(err,stats) => {
			log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
				chunks : false
			}))
		})
		.pipe(gulp.dest('server/public/js'))
		.pipe(rename({
			basename : 'cp',
			extname : '.min.js'
		}))
		.pipe(uglify({
			compress : {properties : false},
			output : {'quote_keys' : true}
		}))
		.pipe(gulp.dest('server/public/js'))
		.pipe(gulpif(args.watch,livereload()))
})