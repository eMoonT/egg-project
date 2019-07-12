'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async index() {
    //  获取数据
    const ret = await this.service.news.getNewList();

    await this.ctx.render('new', {
      title: 'test',
      ret,
    });
  }

  async content() {
    const aID = await this.ctx.query.aid;
    const content = await this.service.news.getContent(aID);

    // 渲染到页面
    await this.ctx.render('content', {
      content: content[0],
    });
  }

  async git() {
    const id = await this.ctx.query.id;
    const content = await this.service.news.getGit(id);

    // 将数据渲染到页面
    // console.log(content);
    await this.ctx.render('git', {
      content,
    });
  }
}

module.exports = NewsService;
