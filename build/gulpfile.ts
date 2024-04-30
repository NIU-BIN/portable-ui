import { series, src, dest, parallel } from "gulp";
import { buildConfig, run, withTaskName } from "./utils";
import gulpLess from "gulp-less";
import autoprefixer from "gulp-autoprefixer";
import cleanCss from "gulp-clean-css";
import path from "path";
// import { projectRoot } from "./utils/paths";
// import ts from "gulp-typescript";

function compile() {
  return src(path.resolve(__dirname, "../packages/theme-chalk/*.less"))
    .pipe(gulpLess())
    .pipe(autoprefixer()) // TODO
    .pipe(cleanCss())
    .pipe(dest(path.resolve(__dirname, "../dist/theme-chalk/css")));
}

function copyfont() {
  return src(path.resolve(__dirname, "../packages/theme-chalk/fonts/**"))
    .pipe(cleanCss())
    .pipe(dest("../dist/theme-chalk/fonts"));
}

// 打包处理
// const buildPackages = (dirname: string, name: string) => {
//   const tasks = Object.entries(buildConfig).map(([module, config]) => {
//     const output = path.resolve(dirname, config.output.name);
//     // 安装依赖gulp-typescript
//     return series(
//       // 处理ts文件
//       withTaskName(`build${dirname}`, () => {
//         const tsConfig = path.resolve(projectRoot, "tsconfig.json"); // ts配置文件路径
//         const inputs = ["**/*.ts", "!gulpfile.ts", "!node_modules"];
//         return src(inputs)
//           .pipe(
//             ts.createProject(tsConfig, {
//               declaration: true, // 需要生成声明文件
//               strict: false, // 关闭严格模式
//               module: config.module,
//             })()
//           )
//           .pipe(dest(output));
//       }),
//       withTaskName(`copy:${dirname}`, () => {
//         // 将打包好的文件放到 es=>utils 和 lib => utils
//         // 将utils模块拷贝到dist目录下的es和lib目录
//         return src(`${output}/**`).pipe(
//           dest(path.resolve(projectRoot, "/dist", config.output.name, name))
//         );
//       })
//     );
//   });

//   return parallel(...tasks);
// };

export default series(
  withTaskName("clean", async () => run("rm -rf ./dist")),
  compile,
  copyfont
  // withTaskName("clean", async () => buildPackages("pnpm"))
);
