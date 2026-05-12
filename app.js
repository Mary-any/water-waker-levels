function src(){
  return `<svg viewBox="0 0 36 36">
    <rect x="6" y="1" width="20" height="20" rx="3" fill="#b8d8f8" stroke="#5590d0" stroke-width="1.5"/>
    <rect x="9" y="5" width="14" height="12" rx="1" fill="#70b8f0" opacity="0.7"/>
    <rect x="4" y="20" width="24" height="5" rx="2" fill="#5590d0"/>
    <rect x="13" y="25" width="8" height="8" rx="1" fill="#4488cc"/>
  </svg>`;
}

function goal(){
  return `<svg viewBox="0 0 36 36">
    <rect x="9" y="2" width="18" height="28" rx="3" fill="#eeeeee" stroke="#aaaaaa" stroke-width="1.5"/>
    <rect x="11" y="18" width="14" height="10" rx="1" fill="#80c0f0" opacity="0.85"/>
    <line x1="11" y1="14" x2="25" y2="14" stroke="#ccc" stroke-width="1"/>
    <line x1="11" y1="9" x2="25" y2="9" stroke="#ccc" stroke-width="1"/>
    <rect x="27" y="8" width="4" height="3" rx="1" fill="#bbb"/>
    <rect x="27" y="14" width="4" height="3" rx="1" fill="#bbb"/>
    <rect x="27" y="20" width="4" height="3" rx="1" fill="#bbb"/>
  </svg>`;
}


function obs(){
  return `<svg viewBox="0 0 36 36">
    <circle cx="18" cy="18" r="14" fill="#555555" stroke="#222222" stroke-width="2"/>
    <line x1="9" y1="27" x2="27" y2="9" stroke="white" stroke-width="4" stroke-linecap="round"/>
  </svg>`;
}

function freeze(){
  return `<svg viewBox="0 0 36 36">
    <rect x="2" y="2" width="32" height="32" rx="5" fill="#5aaee8" stroke="#2288cc" stroke-width="1.5"/>
    <text x="18" y="25" text-anchor="middle" font-size="20" fill="white">❄</text>
  </svg>`;
}

function heat(){
  return `<svg viewBox="0 0 36 36">
    <rect x="2" y="2" width="32" height="32" rx="5" fill="#dd2211" stroke="#aa1100" stroke-width="1.5"/>
    <text x="18" y="25" text-anchor="middle" font-size="18">🔥</text>
  </svg>`;
}

function steamFan(){
  return `<svg viewBox="0 0 36 36">
    <circle cx="18" cy="18" r="14" fill="#cccccc" stroke="#888" stroke-width="1.5"/>
    <circle cx="18" cy="18" r="4" fill="#888"/>
    <line x1="18" y1="4" x2="18" y2="11" stroke="#666" stroke-width="2.5"/>
    <line x1="18" y1="25" x2="18" y2="32" stroke="#666" stroke-width="2.5"/>
    <line x1="4" y1="18" x2="11" y2="18" stroke="#666" stroke-width="2.5"/>
    <line x1="25" y1="18" x2="32" y2="18" stroke="#666" stroke-width="2.5"/>
    <line x1="8" y1="8" x2="13" y2="13" stroke="#666" stroke-width="2"/>
    <line x1="23" y1="23" x2="28" y2="28" stroke="#666" stroke-width="2"/>
    <line x1="28" y1="8" x2="23" y2="13" stroke="#666" stroke-width="2"/>
    <line x1="8" y1="28" x2="13" y2="23" stroke="#666" stroke-width="2"/>
  </svg>`;
}

function wisps(){
  return `<svg viewBox="0 0 36 12" width="36" height="12" style="position:absolute;top:0;left:0">
    <path d="M9,11 Q11,6 9,1" stroke="#999" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <path d="M18,11 Q20,6 18,1" stroke="#999" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    <path d="M27,11 Q29,6 27,1" stroke="#999" stroke-width="1.5" fill="none" stroke-linecap="round"/>
  </svg>`;
}

function crossPipe(){
  return `<svg viewBox="0 0 36 36">
    <rect x="0" y="13" width="36" height="10" fill="#8dc63f"/>
    <rect x="13" y="0" width="10" height="36" fill="#8dc63f"/>
  </svg>`;
}

function cellHTML(t){
  if(t === 'src') return `<div class="pcell c-src">${src()}</div>`;
  if(t === 'goal') return `<div class="pcell c-goal">${goal()}</div>`;
  if(t === 'obs') return `<div class="pcell c-obs">${obs()}</div>`;
  if(t === 'freeze') return `<div class="pcell c-freeze">${freeze()}</div>`;
  if(t === 'heat') return `<div class="pcell c-heat">${heat()}</div>`;
  if(t === 'steam') return `<div class="pcell c-steam">${wisps()}${steamFan()}</div>`;
  if(t === 'cross') return `<div class="pcell">${crossPipe()}</div>`;
  return `<div class="pcell"></div>`;
}

const P = {
  S: () => `<div class="pp">
    <svg viewBox="0 0 36 36">
    <rect x="0" y="13" width="36" height="10" rx="2" fill="#8dc63f"/>
    </svg>
  </div>`,
};

const levels = [
  {
    title:'1. FIRST FLOW',
    stars:1,
    hint:'Guide the water directly to the goal.',
    cells:['src','','','','', '','','','goal','', '','','','','', '','','','',''],
    tray:[P.S]
  },
 {
    title:'2. BLOCKED ROUTE',
    stars:2,
    hint:'Avoid the obstacles and reach the goal.',
    cells:['src','','','','', '','','','obs','', '','','','','', '','','obs','goal',''],
    tray:[P.S]
  },
  {
    title:'3. FORCED DETOUR',
    stars:2,
    hint:'Go around the obstacles to reach the goal.',
    cells:['src','','','','', '','','obs','','', '','','','obs','', '','','','goal',''],
    tray:[P.S]
  },
  {
    title:'4. ROUTE PLANNING',
    stars:3,
    hint:'Plan a longer route around the obstacles.',
    cells:['','','','src','', '','obs','obs','','', '','','','','', 'goal','','','',''],
    tray:[P.S]
  },
  {
    title:'5. FROZEN START',
    stars:1,
    hint:'Freeze the water in the middle.',
    cells:['src','','','','', '','','freeze','','', '','','','','', '','','','goal',''],
    tray:[P.S]
  },
  {
    title:'6. COLD ROUTE',
    stars:2,
    hint:'Use ice to take the upper route.',
    cells:['src','','','','', '','','','','', '','freeze','obs','','goal', '','','','',''],
    tray:[P.S]
  },
  {
    title:'7. FROZEN CHOICE',
    stars:2,
    hint:'Top stays water, bottom uses ice.',
    cells:['','','src','obs','', '','','freeze','','', '','','obs','','', '','','goal','',''],
    tray:[P.S]
  },
  {
    title:'8. MELT PATH',
    stars:3,
    hint:'Freeze, then melt, then reach goal.',
    cells:['src','','','','steam', '','freeze','','heat','', '','','','','', '','','','',''],
    tray:[P.S]
  },
  {
    title:'9. FIRST STEAM',
    stars:2,
    hint:'Heat turns water into steam and guides it upward to the steam goal.',
    cells:['src','','','','steam', '','','heat','','', '','','','','', '','','','',''],
    tray:[P.S]
  },
  {
    title:'10. RISING PATH',
    stars:3,
    hint:'Use steam to navigate around obstacles and reach the upper steam goal.',
    cells:['','steam','','','src', 'obs','','heat','obs','', '','','','','', '','','','',''],
    tray:[P.S]
  },
  {
    title:'11. HOT CHOICE',
    stars:3,
    hint:'Use steam mechanics and careful route planning to reach the upper steam goal.',
    cells:['src','','','','steam', '','','obs','','', '','obs','heat','obs','', '','','obs','',''],
    tray:[P.S]
  },
  {
    title:'12. FINAL SYSTEM',
    stars:3,
    hint:'Water → Ice → Steam → Goal!',
    cells:['src','','','','steam', '','freeze','obs','heat','', '','','','','', '','','','',''],
    tray:[P.S]
  }
];

function starHTML(n){
  let s = '';
  for(let i = 0; i < 3; i++){
    s += i < n ? '<span class="sf">★</span>' : '<span class="se">☆</span>';
  }
  return s;
}

const container = document.getElementById('cards');

levels.forEach(lv => {
  const card = document.createElement('div');
  card.className = 'card';

  card.innerHTML = `
    <div class="card-header">
      <span class="lname">${lv.title}</span>
      <span class="stars">${starHTML(lv.stars)}</span>
    </div>

    <div class="card-body">
      <div class="pgrid">${lv.cells.map(c => cellHTML(c)).join('')}</div>
      <div class="pipe-tray">${lv.tray.map(fn => fn()).join('')}</div>
    </div>

    <div class="hint">${lv.hint}</div>
  `;

  container.appendChild(card);
});

document.getElementById('legend').innerHTML = `
  <div class="li">
    <div class="lic" style="background:#6aaee8;border-color:#4488cc">${src()}</div>
    <span>Water Start<br>(Down)</span>
  </div>

  <div class="li">
    <div class="lic" style="background:#e8e8e8;border-color:#aaa">${goal()}</div>
    <span>Maatbeker<br>Goal (Water)</span>
  </div>

  <div class="li">
    <div class="lic" style="background:#d0d0d0;border-color:#999">${steamFan()}</div>
    <span>Steam Goal<br>(Fan/Suction)</span>
  </div>

  <div class="li">
    <div class="lic" style="background:#f5e020;border-color:#c0a010;font-size:20px">⭐</div>
    <span>Final Goal</span>
  </div>

  <div class="li">
    <div class="lic" style="background:#555;border-color:#222">${obs()}</div>
    <span>Obstacle<br>(Blocked)</span>
  </div>

  <div class="li">${P.S()}<span>Straight Pipe</span></div>

  <div class="li">
    <div class="lic" style="background:#5aaee8;border-color:#2288cc">${freeze()}</div>
    <span>Freeze Tile<br>(Water→Ice)</span>
  </div>

  <div class="li">
    <div class="lic" style="background:#dd2211;border-color:#aa1100">${heat()}</div>
    <span>Heat Tile<br>(Water→Steam)</span>
  </div>
`;