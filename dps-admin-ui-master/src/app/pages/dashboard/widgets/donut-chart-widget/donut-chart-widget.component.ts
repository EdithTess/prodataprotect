import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';
import { ChartData, ChartOptions } from 'chart.js';
import * as ChartJSPieceLabelPlugin from 'chart.piecelabel.js';
import defaultsDeep from 'lodash-es/defaultsDeep';
import { defaultChartOptions } from '../../../../../@fury/shared/chart-widget/chart-widget-defaults';
import { ChartWidgetOptions } from '../../../../../@fury/shared/chart-widget/chart-widget-options.interface';

@Component({
  selector: 'fury-donut-chart-widget',
  templateUrl: './donut-chart-widget.component.html',
  styleUrls: ['./donut-chart-widget.component.scss']
})
export class DonutChartWidgetComponent {

  @Input() data: ChartData;
  @Input() options: ChartWidgetOptions;
  @Input() chartOptions: ChartOptions = defaultsDeep({
    layout: {
      padding: {
        left: 5,
        right: 5,
        top: 5
      }
    },
    pieceLabel: {
      render: 'label',
      arc: true,
      position: 'border',
      fontColor: '#FFFFFF'
    }
  }, defaultChartOptions);

  @Input() chartPlugins = [ChartJSPieceLabelPlugin];
  isLoading = false;

  @ViewChild('canvas', { read: ElementRef, static: true }) canvas: ElementRef;

  chart: Chart;

  @Output('reload') reloadEvent = new EventEmitter();

  constructor() {
  }

  reload() {
    this.options.isLoading = true;
    this.reloadEvent.emit(true);
  }
}
