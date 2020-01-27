import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {
  @Input() testingItemId: any;
  public currentWidget: any = {};
  allWidgets:any = [
    {
      id: 1,
      name: 'widget 1',
      description: 'some type of description in here. some type of description in here. some type of description in here. some type of description in here. some type of description in here. some type of description in here. some type of description in here. some type of description in here. some type of description in here. some type of description in here. some type of description in here. some type of description in here. some type of description in here. '
    },
    {
      id: 2,
      name: 'widget 2',
      description: 'some type of description in here.'
    },
    {
      id: 3,
      name: 'widget 3',
      description: 'some type of description in here.'
    },
    {
      id: 4,
      name: 'widget 4',
      description: 'some type of description in here.'
    },
    {
      id: 5,
      name: 'widget 5',
      description: 'some type of description in here.'
    },
    {
      id: 6,
      name: 'widget 6',
      description: 'some type of description in here.'
    },
    {
      id: 7,
      name: 'widget 7',
      description: 'some type of description in here.'
    },
  ]
  constructor() { }

  ngOnInit() {
    this.setCurrentWidget();
  }

  setCurrentWidget() {
    this.currentWidget = this.allWidgets.filter(x => x.id === this.testingItemId.id)[0];
  }
}
