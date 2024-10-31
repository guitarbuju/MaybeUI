// lib/getSidebarLinks.ts
import fs from 'fs';
import path from 'path';

export const getSidebarLinks = () => {
  const appDir = path.join(process.cwd(),'src', 'app','pages');
  const files = fs.readdirSync(appDir, { withFileTypes: true });

  return files
    .filter((file) => file.isDirectory() && !file.name.startsWith('_'))
    .map((file) => ({
      name: file.name,
      path: `/pages/${file.name}`,
    }));
};
