import { TestBed } from '@angular/core/testing';
import { TasksService } from './tasks.service';

describe('TasksService', () => {
  let service: TasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TasksService);
  });

  describe('createTask', () => {
    it('appends a task built from the creation DTO', () => {
      const before = service.tasks().length;

      const created = service.createTask({
        title: 'Water the plants',
        description: 'Only the ferns',
        priority: 'low',
      });

      expect(service.tasks().length).toBe(before + 1);
      expect(service.tasks().at(-1)).toBe(created);
    });

    it('generates id, timestamps, empty notes and todo status', () => {
      const created = service.createTask({
        title: 'Water the plants',
        description: '',
        priority: 'high',
      });

      expect(created.id).toBeTruthy();
      expect(created.status).toBe('todo');
      expect(created.notes).toEqual([]);
      expect(created.createdAt).toBe(created.updatedAt);
      expect(() => new Date(created.createdAt).toISOString()).not.toThrow();
    });

    it('normalizes an empty description to undefined', () => {
      const created = service.createTask({
        title: 'No details',
        description: '',
        priority: 'medium',
      });
      expect(created.description).toBeUndefined();
    });
  });

  describe('complete', () => {
    it('marks a task done and records its previous status', () => {
      const task = service.tasks().find((t) => t.status === 'in-progress')!;

      service.complete(task.id);

      const updated = service.tasks().find((t) => t.id === task.id)!;
      expect(updated.status).toBe('done');
      expect(updated.previousStatus).toBe('in-progress');
      expect(updated.completedAt).toBeTruthy();
    });

    it('throws for an unknown id', () => {
      expect(() => service.complete('does-not-exist')).toThrow();
    });
  });

  describe('reopen', () => {
    it('restores the previous status of a completed task', () => {
      const done = service.tasks().find((t) => t.status === 'done' && t.previousStatus)!;

      service.reopen(done.id);

      const updated = service.tasks().find((t) => t.id === done.id)!;
      expect(updated.status).toBe(done.previousStatus);
      expect(updated.previousStatus).toBeUndefined();
      expect(updated.completedAt).toBeUndefined();
    });

    it('falls back to todo when there is no previous status', () => {
      const created = service.createTask({ title: 'Fresh', description: '', priority: 'low' });
      service.complete(created.id);

      service.reopen(created.id);

      expect(service.tasks().find((t) => t.id === created.id)!.status).toBe('todo');
    });

    it('throws for an unknown id', () => {
      expect(() => service.reopen('does-not-exist')).toThrow();
    });
  });
});
