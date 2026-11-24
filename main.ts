// The Funniest Toaster Error Message: the error a kitchen toaster would
// show its owner, in 120 characters or fewer.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE = "ERROR: Bread in, charcoal out. I have done this 400 times and I would do it again. The dial is decorative.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE);
