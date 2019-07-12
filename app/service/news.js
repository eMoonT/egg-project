'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async getNewList() {
    const api = this.config.api + 'appapi.php?a=getPortalList&catid=20&page=1';
    const response = await this.ctx.curl(api);

    const data = JSON.parse(response.data);

    return data.result;
  }

  async getContent(aid) {
    const api = this.config.api + 'appapi.php?a=getPortalArticle&aid=' + aid;

    const response = await this.ctx.curl(api);

    const data = JSON.parse(response.data);
    return data.result;
  }

  async getGit(id) {
    const api = this.config.gitAPI + `users/${id}?id=${id}`;
    const response = await this.ctx.curl(api);

    // 返回数据
    const data = JSON.parse(response.data);
    return data;
  }
}

module.exports = NewsService;
