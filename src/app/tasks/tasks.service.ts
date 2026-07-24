import { Service, signal } from '@angular/core';
import { CreateTodo, Todo } from './todo.model';

@Service()
export class TasksService {
  private readonly _tasks = signal<Todo[]>([
    {
      id: '019f83f2-4300-74f8-8afa-f3aca274a741',
      title: 'Chase invoice #2481',
      description: 'Sent 12 June, 30-day terms. Escalate to Marta if nothing by month end.',
      priority: 'high',
      status: 'in-progress',
      dueDate: '2026-07-31',
      notes: [
        {
          id: '019f83f4-17c0-7f69-bf5e-763375ca8b13',
          text: 'Emailed accounts@ — no auto-reply, so the address is probably still live.',
          createdAt: '2026-07-21T09:14:00.000Z',
        },
        {
          id: '019f897d-5440-7d3a-816a-abfa8de01766',
          text: 'Still nothing. Found a direct contact on the PO: j.reyes@.',
          createdAt: '2026-07-22T11:02:00.000Z',
        },
        {
          id: '019f8fe0-7600-7aa1-9bf3-4b95608c21c6',
          text: "Reyes replied — says it's queued for the 30th payment run. Nothing to do until then.",
          createdAt: '2026-07-23T16:48:00.000Z',
        },
      ],
      createdAt: '2026-07-21T09:12:00.000Z',
      updatedAt: '2026-07-23T16:48:00.000Z',
    },
    {
      id: '019f7ba4-6840-7185-b7a2-3ce5a805783a',
      title: 'Renew passport',
      description:
        "Expires 2026-11-02. Most airlines want 6 months' validity, so this is effectively urgent.",
      priority: 'high',
      status: 'in-progress',
      dueDate: '2026-07-10',
      notes: [
        {
          id: '019f7ba8-fc20-72fb-9d88-c1f9bf2b91cd',
          text: 'Booked the appointment slot — 4 August, earliest available.',
          createdAt: '2026-07-19T18:35:00.000Z',
        },
        {
          id: '019f7f05-94a0-7391-a3b3-cc0dc8e89de4',
          text: 'Need a certified copy of the birth certificate. Requested from the registry, they quote 10 working days.',
          createdAt: '2026-07-20T10:15:00.000Z',
        },
        {
          id: '019f8932-4180-7ee1-8189-93d24e757848',
          text: "Photos done. Rejected the first set — background wasn't plain enough.",
          createdAt: '2026-07-22T09:40:00.000Z',
        },
        {
          id: '019f9327-ffe0-7368-a788-72a79efcc566',
          text: 'Registry confirmed dispatch on the 21st. Waiting on post. Everything else is ready.',
          createdAt: '2026-07-24T08:05:00.000Z',
        },
      ],
      createdAt: '2026-07-19T18:30:00.000Z',
      updatedAt: '2026-07-24T08:05:00.000Z',
    },
    {
      id: '019f7599-2a80-7823-b0e2-d4f80b33a01a',
      title: 'Migrate analytics off the deprecated SDK',
      description:
        'v3 reaches end of support on 30 September. The new client is drop-in for everything except custom dimensions.',
      priority: 'high',
      status: 'todo',
      dueDate: '2026-08-14',
      notes: [],
      createdAt: '2026-07-18T14:20:00.000Z',
      updatedAt: '2026-07-18T14:20:00.000Z',
    },
    {
      id: '019f6abe-8a60-7446-9cc3-afba4dbe1b1d',
      title: 'Fix the flaky auth test in CI',
      description:
        'Fails roughly 1 run in 6, always on the token-refresh spec. Suspect a fake-timer leak between tests.',
      priority: 'medium',
      status: 'in-progress',
      notes: [
        {
          id: '019f6f52-6a60-7c97-9603-4091d9aa84dd',
          text: 'Reproduced locally with --runInBand and a seeded shuffle. Not a race in the app code.',
          createdAt: '2026-07-17T09:05:00.000Z',
        },
        {
          id: '019f801e-a5c0-7562-bb52-b5483195e9f4',
          text: "It's the shared clock mock — one suite never restores it. Fix is small; waiting on the CI queue to confirm across 20 runs.",
          createdAt: '2026-07-20T15:22:00.000Z',
        },
      ],
      createdAt: '2026-07-16T11:45:00.000Z',
      updatedAt: '2026-07-20T15:22:00.000Z',
    },
    {
      id: '019f6240-29c0-7671-b17b-0baffce186c9',
      title: 'Book dentist appointment',
      priority: 'low',
      status: 'todo',
      notes: [],
      createdAt: '2026-07-14T20:10:00.000Z',
      updatedAt: '2026-07-14T20:10:00.000Z',
    },
    {
      id: '019f5336-5ee0-70d7-aeaa-eae1b4d84ccc',
      title: 'Upgrade the home server to Debian 13',
      description:
        'Snapshot the ZFS pool first. The Plex container is the only thing likely to break.',
      priority: 'low',
      status: 'todo',
      notes: [
        {
          id: '019f5572-9340-7b98-97df-831fb34c9fa1',
          text: "Postponing until after the passport thing — don't want the NAS down while I need to print forms.",
          createdAt: '2026-07-12T08:30:00.000Z',
        },
      ],
      createdAt: '2026-07-11T22:05:00.000Z',
      updatedAt: '2026-07-12T08:30:00.000Z',
    },
    {
      id: '019f47f7-0980-7bea-974d-ffe91331d95b',
      title: 'Replace the kitchen tap washer',
      priority: 'low',
      status: 'todo',
      notes: [],
      createdAt: '2026-07-09T17:40:00.000Z',
      updatedAt: '2026-07-09T17:40:00.000Z',
    },
    {
      id: '019f3c05-2d00-7811-b055-1a6afd97f9ee',
      title: 'Write the ADR for the storage engine choice',
      description:
        'Dexie/IndexedDB over SQLite WASM. Include the revisit triggers, otherwise it reads as dogma.',
      priority: 'medium',
      status: 'done',
      notes: [
        {
          id: '019f65e7-d500-7a1a-b9eb-29972b0301ef',
          text: "Checked whether OPFS actually helps durability. It doesn't — same bucket, same eviction. That's the whole argument.",
          createdAt: '2026-07-15T13:12:00.000Z',
        },
        {
          id: '019f718a-f540-7398-b94f-21766cdfff35',
          text: 'Merged.',
          createdAt: '2026-07-17T19:26:00.000Z',
        },
      ],
      createdAt: '2026-07-07T10:00:00.000Z',
      updatedAt: '2026-07-17T19:26:00.000Z',
      completedAt: '2026-07-17T19:26:00.000Z',
      previousStatus: 'in-progress',
    },
    {
      id: '019f2730-3aa0-7652-a4e0-adb5d740075c',
      title: "Review Sofia's PR on the notifications service",
      description: 'Retry/backoff rewrite. Roughly 400 lines.',
      priority: 'medium',
      status: 'done',
      notes: [
        {
          id: '019f3759-7f40-7476-89d1-a34c8b5c00e6',
          text: 'Approved with two comments about the jitter calculation. Not blocking.',
          createdAt: '2026-07-06T12:14:00.000Z',
        },
      ],
      createdAt: '2026-07-03T08:55:00.000Z',
      updatedAt: '2026-07-06T12:14:00.000Z',
      completedAt: '2026-07-06T12:14:00.000Z',
      previousStatus: 'todo',
    },
    {
      id: '019f0f07-d780-71b9-877d-8bfcc84d6a61',
      title: 'Cancel the unused domain renewals',
      description: 'Three domains from the 2023 side project. Auto-renew was still on.',
      priority: 'medium',
      status: 'done',
      dueDate: '2026-07-05',
      notes: [],
      createdAt: '2026-06-28T16:20:00.000Z',
      updatedAt: '2026-07-02T09:30:00.000Z',
      completedAt: '2026-07-02T09:30:00.000Z',
      previousStatus: 'todo',
    },
  ]);

  readonly tasks = this._tasks.asReadonly();

  createTask(input: CreateTodo): Todo {
    const now = new Date().toISOString();
    const task: Todo = {
      id: crypto.randomUUID(),
      title: input.title,
      description: input.description || undefined,
      priority: input.priority,
      status: 'todo',
      notes: [],
      createdAt: now,
      updatedAt: now,
    };
    this._tasks.update((tasks) => [...tasks, task]);
    return task;
  }

  complete(id: string): void {
    this._tasks.update((tasks) => {
      const index = tasks.findIndex((task) => task.id === id);
      if (index === -1) {
        throw new Error(`No task found with id "${id}".`);
      }

      const task = tasks[index];
      const now = new Date().toISOString();
      const updated: Todo = {
        ...task,
        status: 'done',
        previousStatus: task.status,
        completedAt: now,
        updatedAt: now,
      };
      return [...tasks.slice(0, index), updated, ...tasks.slice(index + 1)];
    });
  }

  reopen(id: string): void {
    this._tasks.update((tasks) => {
      const index = tasks.findIndex((task) => task.id === id);
      if (index === -1) {
        throw new Error(`No task found with id "${id}".`);
      }

      const task = tasks[index];
      const now = new Date().toISOString();
      const updated: Todo = {
        ...task,
        status: task.previousStatus ?? 'todo',
        previousStatus: undefined,
        completedAt: undefined,
        updatedAt: now,
      };
      return [...tasks.slice(0, index), updated, ...tasks.slice(index + 1)];
    });
  }
}
