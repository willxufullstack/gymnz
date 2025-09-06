#!/bin/bash
set -e

echo "=== 修复前端构建问题 ==="

# 1. 清理现有的 node_modules 和构建文件
echo "1. 清理现有文件..."
rm -rf node_modules
rm -rf public/js
rm -rf public/css
rm -rf public/mix-manifest.json
rm -f package-lock.json

# 2. 设置 Node.js 为兼容版本 (16.x)
echo "2. 检查 Node.js 版本..."
if command -v nvm &> /dev/null; then
    echo "使用 nvm 切换到 Node.js 16..."
    nvm use 16 2>/dev/null || nvm install 16
elif command -v n &> /dev/null; then
    echo "使用 n 切换到 Node.js 16..."
    n 16
else
    echo "警告: 当前 Node.js 版本可能过新，建议安装 nvm 或 n 来管理版本"
fi

# 3. 重新安装依赖（使用 legacy peer deps 避免版本冲突）
echo "3. 重新安装 npm 依赖..."
npm install --legacy-peer-deps

# 4. 创建必要的目录
mkdir -p public/js
mkdir -p public/css

# 5. 构建前端资源
echo "4. 构建前端资源..."
npm run development

# 6. 验证构建结果
echo "5. 验证构建结果..."
if [ -f "public/js/app.js" ]; then
    echo "✅ app.js 构建成功"
else
    echo "❌ app.js 构建失败"
fi

if [ -f "public/js/manifest.js" ]; then
    echo "✅ manifest.js 构建成功"
else
    echo "❌ manifest.js 构建失败"
fi

if [ -f "public/mix-manifest.json" ]; then
    echo "✅ mix-manifest.json 生成成功"
    cat public/mix-manifest.json
else
    echo "❌ mix-manifest.json 生成失败"
fi

echo "6. 前端修复完成！请重新启动 Laravel 服务器测试。"