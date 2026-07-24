import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TasksService } from '../tasks.service';
import { TasksCreate } from './tasks-create';

describe('TasksCreate', () => {
  let fixture: ComponentFixture<TasksCreate>;
  let service: TasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    fixture = TestBed.createComponent(TasksCreate);
    service = TestBed.inject(TasksService);
  });

  function setValue(selector: string, value: string) {
    const input = fixture.nativeElement.querySelector(selector) as HTMLInputElement;
    input.value = value;
    input.dispatchEvent(new Event('input'));
  }

  it('creates a task from the form and emits close on submit', async () => {
    await fixture.whenStable();
    const before = service.tasks().length;
    let closed = false;
    fixture.componentInstance.close.subscribe(() => (closed = true));

    setValue('#title', 'Buy milk');
    setValue('#description', 'Semi-skimmed');
    await fixture.whenStable();

    (fixture.nativeElement.querySelector('form') as HTMLFormElement).requestSubmit();
    await fixture.whenStable();

    expect(service.tasks().length).toBe(before + 1);
    const created = service.tasks().at(-1)!;
    expect(created.title).toBe('Buy milk');
    expect(created.description).toBe('Semi-skimmed');
    expect(created.status).toBe('todo');
    expect(closed).toBe(true);
  });

  it('does not create a task when the title is blank', async () => {
    await fixture.whenStable();
    const before = service.tasks().length;
    let closed = false;
    fixture.componentInstance.close.subscribe(() => (closed = true));

    (fixture.nativeElement.querySelector('form') as HTMLFormElement).requestSubmit();
    await fixture.whenStable();

    expect(service.tasks().length).toBe(before);
    expect(closed).toBe(false);
  });
});
