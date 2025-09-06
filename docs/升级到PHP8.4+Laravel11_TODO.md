# 升级到 PHP 8.4 + Laravel 11 执行手册

本手册列出项目在升级到 PHP 8.4 与 Laravel 11 时的操作命令与核对步骤，确保最小可运行。

## 1. 依赖升级（composer）

1) 升级 composer 依赖（需要本地/CI 可联网）

```
composer update --no-interaction --prefer-dist
composer check-platform-reqs
```

2) 如遇冲突，按错误信息微调版本：
- jwt-auth 使用 ^2.0（Laravel 11 兼容）
- spatie/laravel-permission 使用 ^5.0
- guzzle ^7.8|^8.0，doctrine/dbal ^3.6

3) 如需保留 predis：
```
composer require predis/predis:^2.2
```
并在 config/database.php 将 redis.client 改回 predis。

## 2. 认证脚手架选择

方案 A（保留现有 Auth::routes()）：
```
composer require laravel/ui:^4.4 --dev
php artisan ui:auth
```
- 保留 Blade 登录/注册视图（当前项目已有视图，可按需忽略 ui:auth 生成的视图）

方案 B（升级到 Breeze/Jetstream）：改动较大，暂不推荐作为过渡方案。

## 3. Redis 客户端

- 推荐使用 phpredis 扩展（已在 config/database.php 设置默认 phpredis）
- 检查扩展：
```
php -m | grep redis
```

## 4. 清理缓存 & 基础检查

```
php artisan config:clear
php artisan cache:clear
php artisan route:clear
php artisan view:clear
php artisan route:list
php artisan about
php artisan test
```

## 5. 已完成的代码改造摘要
- 路由：全量改为 [Controller::class, 'method']
- Eloquent 表名：统一使用 protected $table
- Redis 过期写法：Redis::setex
- 外部 HTTP：AuthController 改为 Http 门面 + 错误处理
- 逻辑修复：Gym::crawlTrafficDay 条件与 count→first
- Carbon 解析：规范化使用 Carbon::parse
- 表单验证：DocumentsController 使用 $request->validate

## 6. 常见问题
- Symfony/组件冲突：执行 composer why-not 分析依赖链
- Jwt-auth 配置：升级后若中间件/guard 名称变化，按文档更新 config/auth.php
- 认证视图：若不使用 laravel/ui，需要自行保持 Blade 视图和路由

## 7. 后续改进（阶段 C 建议）
- 时区转换：实现 Gym::convert* 方法
- FormRequest 校验：补齐订单/排课相关输入校验
- 权限策略：细化 Spatie Permission/Policy
- 事件解耦：订单 booked 刷新通过事件监听统一处理
