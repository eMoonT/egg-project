'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    // const ret = this.service.news.getNewList();
    // console.log(ret);
    this.ctx.body = 'home';
  }
}

module.exports = HomeController;
