const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
let S={leaders:[],staff:[]};
const opts=sel=>'<option value="">Unassigned</option>'+S.leaders.map(l=>`<option value="${l.id}"${l.id===sel?' selected':''}>${esc(l.name)}</option>`).join('');
function li(s,ed){return `<li class="${s.on?'on':''}"><button class="dot" data-a="tog" data-id="${s.id}" ${ed?'':'disabled'} aria-label="Toggle in or out"></button><span class="nm">${esc(s.name)}</span>${ed?`<select data-a="mv" data-id="${s.id}">${opts(s.leader||'')}</select><button class="x" data-a="rm" data-id="${s.id}" aria-label="Remove">✕</button>`:''}</li>`}
function card(title,list,ed,lid){const n=list.filter(s=>s.on).length;return `<section class="card"><header><h2>${esc(title)}</h2><span class="cnt">${n}/${list.length} in</span>${ed&&lid?`<button class="x" data-a="dl" data-id="${lid}">Remove team</button>`:''}</header><ul>${list.map(s=>li(s,ed)).join('')||'<li class="emp">No staff allocated</li>'}</ul></section>`}
function summary(){const inn=S.staff.filter(s=>s.on).length;return `<p class="sum">${S.leaders.length} teams · ${S.staff.length} staff · ${inn} in</p>`}
function gridHtml(ed){const un=S.staff.filter(s=>!S.leaders.some(l=>l.id===s.leader));return '<main class="grid">'+S.leaders.map(l=>card(l.name,S.staff.filter(s=>s.leader===l.id),ed,l.id)).join('')+(un.length?card('Unassigned',un,ed,''):'')+'</main>'}
function tick(){const c=$('#clk');if(c){const n=new Date();c.textContent=n.toLocaleDateString([],{weekday:'long',day:'numeric',month:'long'})+' · '+n.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})}}
setInterval(tick,20000);
async function sha256(v){const b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(v));return [...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,'0')).join('')}
