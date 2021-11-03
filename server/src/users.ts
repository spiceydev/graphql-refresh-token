const users: Record<
  string,
  {
    id: number;
    password: string;
    todos: string[];
  }
> = {
  sally: {
    id: 1,
    password: '123',
    todos: ['buy milk', 'buy eggs'],
  },
  jane: {
    id: 2,
    password: '456',
    todos: ['buy hamburgers', 'buy fries'],
  },
};

export default users;
