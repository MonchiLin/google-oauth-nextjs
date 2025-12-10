# 部署与配置指南（NextAuth + Google）

## 环境变量
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `NEXTAUTH_SECRET`：用 `openssl rand -base64 32` 生成。
- `NEXTAUTH_URL`：本地 `http://localhost:3000`，生产填你的域名 `https://your-domain`.

## 获取 Google 凭据
1. 打开 Google Cloud Console，选择/新建项目。  
2. “API 和服务” → “OAuth 同意屏幕”：选择 External，填写应用名和邮箱，Scopes 保留 email/profile，发布。  
3. “凭据” → “创建凭据” → “OAuth 客户端 ID”（Web 应用）：  
   - 授权的 JavaScript 来源：`http://localhost:3000`（加上你的生产域名）  
   - 授权的重定向 URI：`http://localhost:3000/api/auth/callback/google`（加上生产 `https://your-domain/api/auth/callback/google`）  
4. 复制生成的 Client ID 和 Client Secret，填入环境变量。

## 本地运行
1. 复制 `.env.example` 为 `.env.local`，按上面的变量填写。  
2. `npm install`  
3. `npm run dev`  
4. 打开 `http://localhost:3000` 测试登录。

## Vercel 部署
1. 新建 Vercel 项目，导入代码，Framework 选择 **Next.js**（输出目录保持 `.next`）。  
2. 在项目的 Environment Variables 添加上面四个变量，`NEXTAUTH_URL` 填线上域名。  
3. 部署后，在 Google 控制台为同一套凭据添加线上重定向 URI：`https://your-domain/api/auth/callback/google`。  
4. 如 Vercel 误识别为静态站点，可在根目录加 `vercel.json`：
   ```json
   {
     "buildCommand": "npm run build",
     "outputDirectory": ".next"
   }
   ```

## 接口说明
- 核心接口：`/api/auth/[...nextauth]`（NextAuth 自动处理）。  
- 文件位置：`app/api/auth/[...nextauth]/route.js`。  
- 已内置 Google 登录与 token 自动刷新，前端可从 `session.accessToken` 获取最新 access token。
