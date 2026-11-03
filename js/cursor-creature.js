// Jellyfish cursor: eased follow, tilts and stretches with speed. Touch devices get an ambient CSS drift.
(function(){
const el=document.getElementById('creature'),b=document.body;
if(!matchMedia('(hover:hover) and (pointer:fine)').matches){b.classList.add('touch');return}
if(matchMedia('(prefers-reduced-motion:reduce)').matches){el.style.display='none';return}
b.classList.add('has-creature');
let tx=innerWidth/2,ty=innerHeight/2,x=tx,y=ty,tilt=0;
addEventListener('pointermove',e=>{tx=e.clientX;ty=e.clientY},{passive:true});
(function tick(t){requestAnimationFrame(tick);
const px=x,py=y;x+=(tx-x)*.08;y+=(ty-y)*.08;const vx=x-px,vy=y-py;
const sp=Math.min(Math.hypot(vx,vy),30);
tilt+=(Math.max(-35,Math.min(35,vx*3))-tilt)*.1;
el.style.transform=`translate(${x}px,${y+Math.sin(t/700)*4}px) rotate(${tilt}deg) scale(${1-sp*.004},${1+sp*.012})`})(0);
})();
