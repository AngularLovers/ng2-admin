import {Component, ViewEncapsulation} from '@angular/core';

import {BaCard} from '../../../theme/components';
import {PieChartService} from './pieChart.service';

import './pieChart.loader.ts';

@Component({
  selector: 'pie-chart',
  encapsulation: ViewEncapsulation.None,
  directives: [BaCard],
  providers: [PieChartService],
  styles: [require('./pieChart.scss')],
  template: require('./pieChart.html')
})
// TODO: move easypiechart to component
export class PieChart {

  public charts: Array<Object>;
  private init = false;

  constructor(private pieChartService: PieChartService) {
    this.charts = this.pieChartService.getData();
  }

  ngAfterViewInit() {
    if (!this.init) {
      this.loadPieCharts();
      this.updatePieCharts();
      this.init = true;
    }
  }

  private loadPieCharts() {

    jQuery('.chart').each(function () {
      let chart = jQuery(this);
      chart.easyPieChart({
        easing: 'easeOutBounce',
        onStep: function (from, to, percent) {
          jQuery(this.el).find('.percent').text(Math.round(percent));
        },
        barColor: jQuery(this).attr('data-rel'),
        trackColor: 'rgba(0,0,0,0)',
        size: 84,
        scaleLength: 0,
        animation: 2000,
        lineWidth: 9,
        lineCap: 'round',
      });
    });
  }

  private updatePieCharts() {
    let getRandomArbitrary = (min, max) => { return Math.random() * (max - min) + min };

    jQuery('.pie-charts .chart').each(function(index, chart) {
      jQuery(chart).data('easyPieChart').update(getRandomArbitrary(55, 90));
    });
  }
}
