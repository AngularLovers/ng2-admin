import {Injectable} from '@angular/core'

@Injectable()
export class BaMsgCenterService {

  private notifications = [
    {
      name: 'Vlad',
      text: '大家好，我是小莫.',
      time: '1 min ago'
    },
    {
      name: 'Kostya',
      text: '我是Alice,萌妹子.',
      time: '2 hrs ago'
    },
    {
      image: 'assets/img/shopping-cart.svg',
      text: 'New orders received.',
      time: '5 hrs ago'
    },
    {
      name: 'Andrey',
      text: '龙猫，UI设计师..',
      time: '1 day ago'
    },
    {
      name: 'Nasta',
      text: '牛茜，官网UI设计师',
      time: '2 days ago'
    },
    {
      image: 'assets/img/comments.svg',
      text: 'New comments on your post.',
      time: '3 days ago'
    },
    {
      name: 'Kostya',
      text: '胡旭，后端架构师.',
      time: '1 week ago'
    }
  ];

  private messages = [
    {
      name: 'Nasta',
      text: '当你启动之后，你可以看到Font Awesome的一些图标.',
      time: '1 min ago'
    },
    {
      name: 'Vlad',
      text: '现在最新的Font Awesome的版本是4.2.',
      time: '2 hrs ago'
    },
    {
      name: 'Kostya',
      text: '如果你想用新图标，你也可以去到Font Awesome官网找一找.',
      time: '10 hrs ago'
    },
    {
      name: 'Andrey',
      text: 'Explore your passions and discover new ones by getting involved. Stretch your...',
      time: '1 day ago'
    },
  ];

  public getMessages():Array<Object> {
    return this.messages;
  }

  public getNotifications():Array<Object> {
    return this.notifications;
  }
}
