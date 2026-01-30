---
title: கணநாயகனே கருணாகரனே
artist: K.Veeramani
date: 2026-01-30
---

# கணநாயகனே கருணாகரனே

<style>
:root{
  --bg:#ffffff; --fg:#111827; --muted:#6b7280; --accent:#0ea5a4; --maxw:900px;
}
[data-theme="dark"]{ --bg:#0b1220; --fg:#e6eef6; --muted:#9aa4b2; --accent:#38bdf8 }
body.song-page{ background:var(--bg); color:var(--fg); margin:0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; }
.container{ max-width:var(--maxw); margin:1.5rem auto; padding:1rem; }
.toolbar{ display:flex; gap:.5rem; align-items:center; justify-content:flex-end; margin-bottom:.75rem; }
.btn{ background:transparent; border:1px solid var(--muted); color:var(--fg); padding:.35rem .6rem; border-radius:6px; cursor:pointer; font-size:0.95rem }
.title{ text-align:center; margin-top:0.2rem; margin-bottom:0.8rem }
.lyrics{ white-space:pre-line; line-height:1.8; font-size:1rem; padding:1rem; border-radius:8px; background:rgba(0,0,0,0.02); }
@media (max-width:600px){ .lyrics{ font-size:1.05rem; padding:.75rem } .toolbar{ justify-content:space-between } }
.small{ font-size:0.9rem }
.large{ font-size:1.2rem }
</style>

<div class="container" id="song-root">
  <div class="toolbar">
    <div style="display:flex;gap:.5rem;align-items:center;">
      <button class="btn" id="dec">A-</button>
      <button class="btn" id="reset">A</button>
      <button class="btn" id="inc">A+</button>
    </div>
    <div style="display:flex;gap:.5rem;align-items:center;">
      <button class="btn" id="light">Light</button>
      <button class="btn" id="dark">Dark</button>
    </div>
  </div>

  <h1 class="title">கணநாயகனே கருணாகரனே</h1>

  <article class="lyrics" id="lyrics">

கணநாயகனே கருணாகரனே

சங்கரன் புதல்வா சக்தி விநாயகா
சங்கடங்கள் தீர்க்கும் சண்முக சகோதரா
மங்கள நாயக மலர் அடி பணிதேன்
கணநாயகனே கருணாகரனே
குணுவர்ணிதியே குருவே சரணம்
கணநாயகனே கருணாகரனே

மணியும் நீயே ஒளியும் நீயே
மனமும் நீயே மலரும் நீயே
மணியும் நீயே ஒளியும் நீயே
மனமும் நீயே மலரும் நீயே

கணநாயகனே கருணாகரனே
குணுவர்ணிதியே குருவே சரணம்
கணநாயகனே கருணாகரனே

அரசும் வேம்பும் அமைந்த இடந்தனை
அமரும் இடமைக் கொண்டவனே
அரசும் வேம்பும் அமைந்த இடந்தனை
அமரும் இடமைக் கொண்டவனே
அனுதினம் பணிதேன், ஆடியேர் இடர் தீர்ப்பாய்
அமரர் நாயகனே அரணின் மைந்தனே
அனுதினம் பணிதேன், ஆடியேர் இடர் தீர்ப்பாய்
அமரர் நாயகனே அரணின் மைந்தனே

கணநாயகனே கருணாகரனே
குணுவர்ணிதியே குருவே சரணம்
கணநாயகனே கருணாகரனே

  </article>
</div>

<script>
(function(){
  const root = document.documentElement;
  const songRoot = document.getElementById('song-root');
  const lyrics = document.getElementById('lyrics');
  const inc = document.getElementById('inc');
  const dec = document.getElementById('dec');
  const reset = document.getElementById('reset');
  const light = document.getElementById('light');
  const dark = document.getElementById('dark');

  // initialize theme from localStorage or prefers-color-scheme
  const savedTheme = localStorage.getItem('devotional-theme');
  const initialTheme = savedTheme || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark':'light');
  if(initialTheme==='dark') document.documentElement.setAttribute('data-theme','dark');

  // font size state (class on lyrics)
  const savedSize = localStorage.getItem('lyrics-size') || 'normal';
  function applySize(size){
    lyrics.classList.remove('small','large');
    if(size==='small') lyrics.classList.add('small');
    if(size==='large') lyrics.classList.add('large');
    localStorage.setItem('lyrics-size', size);
  }
  applySize(savedSize);

  inc.addEventListener('click', ()=>{ applySize('large'); });
  dec.addEventListener('click', ()=>{ applySize('small'); });
  reset.addEventListener('click', ()=>{ applySize('normal'); });
  light.addEventListener('click', ()=>{ document.documentElement.removeAttribute('data-theme'); localStorage.setItem('devotional-theme','light'); });
  dark.addEventListener('click', ()=>{ document.documentElement.setAttribute('data-theme','dark'); localStorage.setItem('devotional-theme','dark'); });

  // make body class for consistent background
  document.body.classList.add('song-page');
})();
</script>
