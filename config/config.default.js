'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1504252356337_1029';

  // 公共api
  config.api = 'http://www.phonegap100.com/';

  // git api
  config.gitAPI = 'https://api.github.com/';

  // 配置模版引擎
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks',
    },
  };

  return config;
};
