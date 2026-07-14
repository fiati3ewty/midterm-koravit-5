import { z } from 'zod';

export const newTaskSchemas = z.object({
  content: z.string().min(1, 'Please Enter Content new task'),
});
