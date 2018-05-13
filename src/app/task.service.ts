import {Injectable} from '@angular/core';
import {Task} from './task';
import {TASKS} from './mock-data-tasks';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
    providedIn: 'root',
})
export class TaskService {

    constructor(private messageService: MessageService) {
    }

    getTasks(): Observable<Task[]> {
        this.messageService.add('TaskService: fetched Tasks');
        return of(TASKS);
    }

    getTask(id: number): Observable<Task> {
        this.messageService.add(`TaskService: fetched Task id=${id}`);
        return of(TASKS.find(task => task.id === id));
    }
}
