// Scroll depth, reveals, parallax, return to surface.
(function(){
const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
const root=document.documentElement,m=document.getElementById('meters');
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.reveal').forEach(n=>io.observe(n));
const par=[...document.querySelectorAll('[data-speed]')];let tick=false;
function update(){tick=false;
const max=root.scrollHeight-innerHeight,p=max>0?Math.min(scrollY/max,1):0;
root.style.setProperty('--depth',p.toFixed(3));m.textContent=fd(String(Math.round(p*2400)));
if(!reduce)for(const n of par){const r=n.parentElement.getBoundingClientRect();n.style.translate='0 '+((r.top+r.height/2-innerHeight/2)*parseFloat(n.dataset.speed))+'px'}}
addEventListener('scroll',()=>{if(!tick){tick=true;requestAnimationFrame(update)}},{passive:true});
addEventListener('resize',update);update();
document.getElementById('surfaceBtn').addEventListener('click',()=>scrollTo({top:0,behavior:reduce?'auto':'smooth'}));
})();
