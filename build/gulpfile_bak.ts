import { series, parallel, src, dest } from "gulp";
// 串行打包、并行打包
import { run, withTaskName } from "./utils";
import gulpLess from "gulp-less";
import dartLess from "less";
import autoprefixer from "gulp-autoprefixer";
import cleanCss from "gulp-clean-css";
import path from "path";

// gulp不叫打包，做代码转换 vite
export default series(
  withTaskName("clean", async () => run("rm -rf ./dist")) // 删除dist目录
);

/**
 * 打包样式
 * 安装相关依赖
 * pnpm install gulp-sass @types/gulp-sass @types/sass gulp-autoprefixer @types/gulp-autoprefixer @types/gulp-clean-css gulp-clean-css -w -D
 * gulp-autoprefixer:添加样式前缀  gulp-clean-css：压缩css
 */

/**
 * gulp是类似一个管道的方式执行，从入口开始到出口，中间一步步执行
 */

/**
 * 对sass文件做处理
 */
function compile() {
  // const less = gulpLess(dartLess);
  // less=>编译成css=>添加前缀=>压缩=>最终输出到当前目录下dist下的css目录
  return src(path.resolve(__dirname, "./src/*.less"))
    .pipe(gulpLess())
    .pipe(autoprefixer())
    .pipe(cleanCss())
    .pipe(dest("./dist/css"));
}

/**
 * 处理font文件
 */
function copyfont() {
  // 从src下单fonts文件夹下的所有文件开始=>压缩=>最终输出到当前目录下dist下的font目录
  return src(path.resolve(__dirname, "./src/fonts/**"))
    .pipe(cleanCss())
    .pipe(dest("./dist/fonts"));
}

/**
 * 把打包好的css输出到根目录的dist
 */
function copyfullstyle() {
  const rootDistPath = path.resolve(__dirname, "../../dist/theme-chalk");
  return src(path.resolve(__dirname, "./dist/**")).pipe(dest(rootDistPath));
}

// export default series(compile, copyfont, copyfullstyle);
