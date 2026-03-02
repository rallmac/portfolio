const puppeteer = require('puppeteer');
const fs = require('fs');
(async () => {
  const url = process.env.URL || 'http://localhost:3001/';
  const outDir = 'screenshots';
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const browser = await puppeteer.launch({ args: ['--no-sandbox','--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 548, height: 800 });
  try {
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
  } catch (e) {
    console.error('Failed to load page:', e.message);
  }

  // Wait a little for any layout JS
  await page.waitForTimeout(500);

  const screenshotPath = `${outDir}/548.png`;
  await page.screenshot({ path: screenshotPath, fullPage: true });

  const stats = await page.evaluate(() => {
    function getEl(selector) {
      return document.querySelector(selector) || null;
    }
    const content = getEl('[data-slot="carousel-content"]');
    const track = content ? content.querySelector('.flex') : null;
    const firstItem = content ? content.querySelector('[data-slot="carousel-item"]') : null;

    function serializeRect(el) {
      if (!el) return null;
      const r = el.getBoundingClientRect();
      const cs = window.getComputedStyle(el);
      return {
        tag: el.tagName,
        className: el.className,
        rect: { x: r.x, y: r.y, width: r.width, height: r.height, top: r.top, left: r.left, right: r.right, bottom: r.bottom },
        computed: {
          marginLeft: cs.marginLeft,
          marginRight: cs.marginRight,
          paddingLeft: cs.paddingLeft,
          paddingRight: cs.paddingRight,
          transform: cs.transform,
          width: cs.width,
          boxSizing: cs.boxSizing,
          flex: cs.flexBasis ? cs.flexBasis : cs.flex,
        },
      };
    }

    return {
      url: location.href,
      viewport: { width: window.innerWidth, height: window.innerHeight, devicePixelRatio: window.devicePixelRatio },
      content: serializeRect(content),
      track: serializeRect(track),
      firstItem: serializeRect(firstItem),
      bodyStyle: (function(){ const b=window.getComputedStyle(document.body); return { margin: b.margin, padding: b.padding } })(),
    };
  });

  const statsPath = `${outDir}/548-stats.json`;
  fs.writeFileSync(statsPath, JSON.stringify(stats, null, 2), 'utf8');
  console.log('Screenshot saved to', screenshotPath);
  console.log('Stats saved to', statsPath);

  await browser.close();
})();
