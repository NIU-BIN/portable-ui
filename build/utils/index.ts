import { spawn } from "child_process";
import { projectRoot } from "./paths";
import { TaskFunction } from "gulp";
import path from "path";

export const withTaskName = (name: string, fn: TaskFunction) =>
  Object.assign(fn, { displayName: name });

// 在node中使用子进程来运行脚本
export const run = async (command: string) => {
  return new Promise((resolve) => {
    const [cmd, ...args] = command.split(" ");
    const app = spawn(cmd, args, {
      cwd: projectRoot,
      stdio: "inherit", // 直接将这个子进程的结果输出
      shell: true, // 默认情况下 linux才支持rm -rf windows安装git bash
    });
    // 在进程已结束并且子进程的标准输入输出流已关闭之后，则触发 'close' 事件
    app.on("close", resolve);
  });
};

export const buildConfig = {
  esm: {
    module: "ESNext", // tsconfig输出的结果es6模块
    format: "esm", // 需要配置格式化化后的模块规范
    input: path.resolve(projectRoot, "/packages/components/index.ts"), // 你的入口文件
    output: {
      name: "es", // 打包到dist目录下的那个目录
      path: path.resolve(projectRoot, "/dist/es"),
    },
    bundle: {
      path: "portable-ui/es",
    },
  },
  cjs: {
    module: "CommonJS",
    format: "cjs",
    input: path.resolve(projectRoot, "/packages/components/index.ts"), // 你的入口文件
    output: {
      name: "lib",
      path: path.resolve(projectRoot, "/dist/lib"),
    },
    bundle: {
      path: "portable-ui/lib",
    },
  },
};
export type BuildConfig = typeof buildConfig;
