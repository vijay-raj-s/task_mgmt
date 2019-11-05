import { Task } from './task';

export class TaskGroup {
    id: number;
    name: string;
    priority: number;
    tasks?: Task[];
}
