const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, '..', 'public');
const dest = path.join(__dirname, '..', 'dist');

function copyDir(s, d) {
  for (const f of fs.readdirSync(s)) {
    const sp = path.join(s, f);
    const dp = path.join(d, f);
    if (fs.statSync(sp).isDirectory()) {
      fs.mkdirSync(dp, { recursive: true });
      copyDir(sp, dp);
    } else {
      fs.copyFileSync(sp, dp);
    }
  }
}

if (fs.existsSync(src)) {
  copyDir(src, dest);
  console.log('copy-public: copied public/ → dist/');
}
