'use strict';

module.exports = appInfo => {
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1544862304952_8142';

    // add your config here 中间件的配置
    config.middleware = [];
    // 增加验证
    exports.jwt = {
        secret: "123456"
    };
    // 增加数据库连接
    config.sequelize = {
        dialect: 'mysql',
        host: '127.0.0.1',
        port: 3306,
        password: "123456",
        database: 'egg-sequelize-doc-default',
    };

    // 使用swaggerdoc测试
    exports.swaggerdoc = {
        dirScanner: './app/controller',
        apiInfo: {
            title: 'egg-swagger',
            description: 'swagger-ui for egg',
            version: '1.0.0',
        },
        schemes: ['http', 'https'],
        consumes: ['application/json'],
        produces: ['application/json'],
        enable: true,
        securityDefinitions: {
            APIKey: {
                type: "apiKey",
                name: "Authorization",
                in: "header",
                description: "Bearer {token}"
            }
        }
    };
    return config;
};