const fs = require('fs');
const path = require('path');

const distHtml = path.join(__dirname, '..', 'dist', 'index.html');
let html = fs.readFileSync(distHtml, 'utf8');

const seoMeta = `
    <meta name="keywords" content="戰鬥陀螺X, Beyblade X, 天梯, 配置, 零件, 攻略, tier list, combo guide" />
    <!-- Open Graph -->
    <meta property="og:title" content="戰鬥陀螺X配置指南 | Beyblade X Guide" />
    <meta property="og:description" content="阿土天梯排名、推薦配置、零件資料庫" />
    <meta property="og:type" content="website" />
    <!-- Google AdSense — 取得 ad-client ID 後替換 ca-pub-XXXXXXXXXXXXXXXX -->
    <!-- <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script> -->`;

html = html.replace('</head>', seoMeta + '\n  </head>');

html = html.replace(
  'You need to enable JavaScript to run this app.',
  '請啟用 JavaScript 來使用此應用程式。'
);

html = html.replace(
  '<body>',
  '<body style="background-color:#08090F;margin:0">'
);

fs.writeFileSync(distHtml, html, 'utf8');
console.log('postbuild-web: injected SEO meta + AdSense placeholder into dist/index.html');
