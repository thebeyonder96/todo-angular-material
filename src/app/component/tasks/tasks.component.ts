import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent {
  isShow: boolean = false;
  todos: string = '';
  favo: boolean = false;

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  toggle() {
    this.isShow = !this.isShow;
  }

  add() {
    this.todo.push(this.todos);
    this.isShow = !this.isShow;
  }

  onDelete(i: any) {

    this.done = this.done.filter((v, id) => i != id);
  }

  fav(i: any) {
    this.todo.map((v, id) => {
      if (i === id) {
        this.favo = !this.favo
      }
    });
  }
}
