import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public canEdit: boolean = false;
  todo = [
    {
      id: 1,
      sizeMin: '600px'
    },
    {
      id: 2,
      sizeMin: '600px'
    },
    {
      id: 3,
      sizeMin: '600px'
    }
  ];

  done = [
    {
      id: 4,
      sizeMin: '275px'
    },
    {
      id: 5,
      sizeMin: '275px'
    }
  ];

  something = [
    {
      id: 6,
      sizeMin: '600px'
    },
    {
      id: 7,
      sizeMin: '600px'
    }
  ]
  
  addWidget() {
    this.something.push({id: 8, sizeMin: '600px'});
  }
  
  setCanEdit() {
    this.canEdit = !this.canEdit;
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
