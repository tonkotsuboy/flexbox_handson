// gulpプラグインの読みこみ
const gulp = require("gulp");
// gulp-renameの読み込み
const rename = require("gulp-rename");
// browser-syncのプラグインの読み込み
const browserSync = require("browser-sync");
// Autoprefixerの読み込み
const autoprefixer = require("gulp-autoprefixer");
//
const runSequence = require("run-sequence");


// watchタスクの設定
gulp.task("watch", function () {
  browserSync({
    server: {
      baseDir: "./" // ルートとなるディレクトリを指定
    }
  });

  // srcフォルダ以下のファイルを監視
  gulp.watch("**/*", function() {
    browserSync.reload();
  });
});

// ベンダープレフィックス処理の設定
gulp.task("prefix", function () {
  return gulp.src(["src/css/style.css"])
    .pipe(autoprefixer({
      // ☆IEは9以上、Androidは4以上、iOS Safariは8以上
      // その他は最新2バージョンで必要なベンダープレフィックスを付与する設定
      browsers: ["chrome >= 30", "ie >= 9", "Android >= 4", "ios_saf >= 8"],
      cascade: false
    }))
    .pipe(rename("style_dist.css"))
    .pipe(gulp.dest("src/css/"))
});