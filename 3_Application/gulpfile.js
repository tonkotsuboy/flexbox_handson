// 変換したいCSSファイルのパス
var cssFile = "src/css/style.css";
// 変換後のCSSファイルを保存するパス
var cssDistPath = "src/css/";
// 変換後のCSSファイルの名前
var cssDistFile = "style_dist.css";

/*
 * ここからタスク処理
 */
// gulpプラグインの読みこみ
var gulp = require("gulp");
// gulp-renameの読み込み
var rename = require("gulp-rename");
// Autoprefixerの読み込み
var autoprefixer = require("gulp-autoprefixer");

gulp.task("default", function () {
  return gulp.src(cssFile)
    .pipe(autoprefixer({
      // IEは10以上、Androidは4以上、iOS Safariは8以上
      browsers: ["ie >= 10", "Android >= 4", "ios_saf >= 8"],
      cascade:false
    }))
    .pipe(rename(cssDistFile))
    .pipe(gulp.dest(cssDistPath))
});