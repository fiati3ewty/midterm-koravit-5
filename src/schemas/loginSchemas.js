import { z } from 'zod';

export const loginSchemas = z.object({
  username: z.string().min(1, 'Please Enter Username'),
  password: z.string().min(1, 'Please Enter Password'),
});
