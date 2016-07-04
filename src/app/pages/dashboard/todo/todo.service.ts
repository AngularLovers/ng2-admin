import {Injectable} from '@angular/core';

@Injectable()
export class TodoService {

  private todoList = [
    { text: '检出项目' },
    { text: '学npm命令' },
    { text: '会使用git' },
    { text: '让项目正常运行.' },
    { text: '这周要做logo和吉祥物' },
    { text: '后台人手要尽快掌握angular2技术开发' },
    { text: '有空的时候多用一用github' },
    { text: '今天的任务是项目目录结构 ' },
    { text: '整理相关需求文档' },
    { text: '备案完成后尽快部署服务器环境' },
  ];

  getTodoList() {
    return this.todoList;
  }
}
