import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todo = [
    {
      id: 1,
      sizeMin: '300px'
    },
    {
      id: 2,
      sizeMin: '500px'
    },
    {
      id: 3,
      sizeMin: '300px'
    }
  ];

  done = [
    {
      id: 4,
      sizeMin: '300px'
    },
    {
      id: 5,
      sizeMin: '500px'
    }
  ];

  something = [
    {
      id: 6,
      sizeMin: '300px'
    },
    {
      id: 7,
      sizeMin: '300px'
    }
  ]
  
  addWidget() {
    this.something.push({id: 8, sizeMin: '500px'});
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
