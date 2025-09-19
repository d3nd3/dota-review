#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const dataDir = path.resolve(__dirname, '..', 'data');
function isJsonFile(f){ return f.endsWith('.json') && f !== 'index.json'; }

async function main(){
  const files = fs.readdirSync(dataDir).filter(isJsonFile);
  const entries = [];
  for(const f of files){
    try{
      const p = path.join(dataDir, f);
      const s = fs.readFileSync(p, 'utf8');
      const j = JSON.parse(s);
      entries.push({ matchId: j.matchId || path.basename(f, '.json'), hero: j.hero || '', image: (j.slides && j.slides[0] && j.slides[0].image) || '', ts: j.ts || fs.statSync(p).mtime.toISOString() });
    }catch(err){ console.error('skip', f, err.message); }
  }
  // sort by ts desc
  entries.sort((a,b) => String(b.ts).localeCompare(String(a.ts)));
  const out = { published: entries };
  fs.writeFileSync(path.join(dataDir, 'index.json'), JSON.stringify(out, null, 2));
  console.log('Wrote data/index.json with', entries.length, 'entries');
}

main().catch(err => { console.error(err); process.exit(1); });


