import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';
import { ChartData, ChartOptions } from 'chart.js';
import defaultsDeep from 'lodash-es/defaultsDeep';
import { defaultChartOptions } from '../../../../../@fury/shared/chart-widget/chart-widget-defaults';
import { BarChartWidgetOptions } from './bar-chart-widget-options.interface';

@Component({
  selector: 'fury-bar-chart-widget',
  templateUrl: './bar-chart-widget.component.html',
  styleUrls: ['./bar-chart-widget.component.scss']
})
export class BarChartWidgetComponent implements OnChanges {

  @Input() height: string = '150px';
  @Input() data: ChartData;
  @Input() options: BarChartWidgetOptions;
  @Input() chartOptions: ChartOptions = defaultsDeep({
    layout: {
      padding: {
        left: 24,
        right: 24,
        top: 0,
        bottom: 24
      }
    },
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      intersect: true
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }    
  }, defaultChartOptions);

  @ViewChild('canvas', { read: ElementRef, static: true }) canvas: ElementRef;

  @Output('reload') reloadEvent = new EventEmitter();  

  chart: Chart;

  isLoading: boolean;

  constructor() {
  }

  reload() {
    this.options.isLoading = true;
    this.reloadEvent.emit(true);
  }

  ngOnChanges(): void {
    console.log('data ......... :', this.data);
  }
}
