import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';

@Injectable()
export class PieChartService {

  constructor(private baConfig:BaThemeConfigProvider) {
  }

  getData() {
    let pieColor = this.baConfig.get().colors.custom.dashboardPieChart;
    return [
      {
        color: pieColor,
        description: '新用户',
        stats: '57,820',
        icon: 'person',
      }, {
        color: pieColor,
        description: '付费用户',
        stats: '89,745',
        icon: 'money',
      }, {
        color: pieColor,
        description: '活跃用户',
        stats: '178,391',
        icon: 'face',
      }, {
        color: pieColor,
        description: '回归用户',
        stats: '32,592',
        icon: 'refresh',
      }
    ];
  }
}
