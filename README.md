# Memory Turbo Monorepo

这是一个基于 [Turborepo](https://turbo.build/) 的 **Memory** 项目大仓（Monorepo）。

## 📂 目录结构

### 🏠 应用（Apps）
- `api` - 基于 [NestJS](https://nestjs.com/) 的后端服务
- `web` - 基于 [Next.js](https://nextjs.org/) 的前端应用

### 📦 包（Packages）
- `ui` - 共享的 React 组件库
- `eslint-config` - 统一的 ESLint 配置
- `typescript-config` - 统一的 TypeScript 配置
- `shared` - 共享的工具库或类型定义

## 🚀 技术栈

- [Turborepo](https://turbo.build/) - 高效的 Monorepo 构建工具
- [TypeScript](https://www.typescriptlang.org/) - 类型安全的 JavaScript 超集
- [ESLint](https://eslint.org/) - 代码质量检查工具
- [Prettier](https://prettier.io/) - 代码格式化工具
- [NestJS](https://nestjs.com/) - 现代化的 Node.js 框架（后端）
- [Next.js](https://nextjs.org/) - React 服务器渲染框架（前端）

## 📌 使用方法
### 拉取仓库
```sh
git clone --recurse-submodules https://github.com/LinMoQC/Memory-Turbo.git
```

### 📥 安装依赖
```sh
pnpm install
```
### 💻 启动开发环境
```sh
pnpm run dev
```
### 🏗️ 构建项目
```sh
pnpm run build
```

### ⚡ Turbo 任务管理

> 该项目使用 Turborepo 来优化构建和任务运行，主要的 turbo 命令包括：
```sh
pnpm turbo run build           # 构建所有应用和包
pnpm turbo run dev --filter=web   # 仅启动 web 应用
pnpm turbo run dev --filter=api   # 仅启动 api 服务
```
### ☁️ 远程缓存（Remote Caching）

```sh
Turborepo 提供了 远程缓存 功能，以加速 CI/CD 过程。如果你希望启用远程缓存，可以使用 Vercel 进行托管：

npx turbo login
npx turbo link
```