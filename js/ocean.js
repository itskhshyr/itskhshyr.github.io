// Bubbles and drifting plankton on one canvas; pauses when hidden or reduced motion.
(function(){
const c=document.getElementById('ocean'),x=c.getContext('2d');
const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
const N=innerWidth<700?28:60;let w,h,p=[],raf,last=0;
function size(){const d=Math.min(devicePixelRatio||1,2);c.width=innerWidth*d;c.height=innerHeight*d;x.setTransform(d,0,0,d,0,0);w=innerWidth;h=innerHeight}
function mk(i){const b=Math.random()<.45;return{x:Math.random()*w,y:i?h+10:Math.random()*h,r:b?2+Math.random()*5:.8+Math.random()*1.4,v:b?18+Math.random()*30:4+Math.random()*8,s:Math.random()*6,b}}
function draw(t){raf=requestAnimationFrame(draw);const dt=Math.min((t-last)/1000,.05);last=t;x.clearRect(0,0,w,h);
for(const o of p){o.y-=o.v*dt;o.s+=dt;o.x+=Math.sin(o.s)*10*dt;if(o.y<-10)Object.assign(o,mk(1));
x.beginPath();x.arc(o.x,o.y,o.r,0,6.283);
if(o.b){x.strokeStyle='rgba(234,248,255,.45)';x.lineWidth=1;x.stroke()}else{x.fillStyle='rgba(38,230,208,.35)';x.fill()}}}
size();p=Array.from({length:N},()=>mk(0));
addEventListener('resize',size);
if(reduce){draw(0);cancelAnimationFrame(raf)}else{raf=requestAnimationFrame(draw);
document.addEventListener('visibilitychange',()=>{cancelAnimationFrame(raf);if(!document.hidden){last=performance.now();raf=requestAnimationFrame(draw)}})}
})();
