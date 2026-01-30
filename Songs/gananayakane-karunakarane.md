<!DOCTYPE html>
<html lang="ta">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>கணநாயகனே கருணாகரனே - K.Veeramani Lyrics</title>
    <meta name="description" content="K.Veeramani - கணநாயகனே கருணாகரனே பாடல் வரிகள். Devotional Tamil lyrics for Gananayakane Karunakarane.">
    
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "MusicComposition",
      "name": "கணநாயகனே கருணாகரனே",
      "lyricist": "Traditional",
      "publisher": "K.Veeramani",
      "inLanguage": "ta"
    }
    </script>

    <style>
    :root {
        --bg: #ffffff; --fg: #111827; --muted: #6b7280; --accent: #0ea5e9; --maxw: 700px;
    }
    [data-theme="dark"] { 
        --bg: #0b1220; --fg: #e6eef6; --muted: #9aa4b2; --accent: #38bdf8; 
    }
    
    body.song-page { 
        background: var(--bg); color: var(--fg); margin: 0; 
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; 
        transition: background 0.3s ease;
    }
    
    .container { max-width: var(--maxw); margin: 0 auto; padding: 1.5rem; }
    
    /* Navigation & Toolbar */
    .nav-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; }
    .home-link { text-decoration: none; color: var(--accent); font-weight: 600; font-size: 0.95rem; }
    .toolbar { display: flex; gap: 0.5rem; flex-wrap: wrap; justify-content: flex-end; }
    
    .btn { 
        background: transparent; border: 1px solid var(--muted); color: var(--fg); 
        padding: 0.4rem 0.7rem; border-radius: 6px; cursor: pointer; font-size: 0.85rem;
        transition: all 0.2s;
    }
    .btn:hover { border-color: var(--accent); color: var(--accent); }
    .btn-copy { background: var(--accent); color: white; border: none; }
    .btn-copy:hover { opacity: 0.9; color: white; }

    /* Content Styling */
    .title { text-align: center; margin-bottom: 0.5rem; font-size: 1.75rem; color: var(--fg); }
    .artist { text-align: center; color: var(--muted); margin-bottom: 2rem; font-size: 1rem; }
    
    .lyrics { 
        white-space: pre-line; line-height: 2; font-size: 1.15rem; 
        padding: 1.5rem; border-radius: 12px; 
        background: rgba(0,0,0,0.03); 
        letter-spacing: 0.01rem; /* Better spacing for Tamil characters */
    }
    [data-theme="dark"] .lyrics { background: rgba(255,255,255,0.05); }

    /* Font size adjustments */
    .small { font-size: 1rem !important; }
    .large { font-size: 1.4rem !important; }

    @media (max-width: 600px) {
        .nav-header { flex-direction: column; gap: 1rem; align-items: flex-start; }
        .toolbar { width: 100%; justify-content: space-between; }
        .lyrics { font-size: 1.1rem; padding: 1rem; }
    }
    </style>
</head>
<body class="song-page">

<div class="container" id="song-root">
    <div class="nav-header">
        <a href="../index.html" class="home-link">← Home</a>
        <div class="toolbar">
            <div style="display:flex; gap: 0.3rem;">
                <button class="btn" id="dec">A-</button>
                <button class="btn" id="reset">A</button>
                <button class="btn" id="inc">A+</button>
            </div>
            <div style="display:flex; gap: 0.3rem;">
                <button class="btn" id="theme-toggle">Dark Mode</button>
                <button class="btn btn-copy" id="copy-btn">Copy</button>
            </div>
        </div>
    </div>

    <h1 class="title">கணநாயகனே கருணாகரனே</h1>
    <p class="artist">Artist: K.Veeramani</p>

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
    const lyrics = document.getElementById('lyrics');
    const themeBtn = document.getElementById('theme-toggle');
    const copyBtn = document.getElementById('copy-btn');

    // Theme Logic
    const savedTheme = localStorage.getItem('devotional-theme');
    if(savedTheme === 'dark') {
        root.setAttribute('data-theme', 'dark');
        themeBtn.innerText = "Light Mode";
    }

    themeBtn.addEventListener('click', () => {
        if(root.hasAttribute('data-theme')) {
            root.removeAttribute('data-theme');
            localStorage.setItem('devotional-theme', 'light');
            themeBtn.innerText = "Dark Mode";
        } else {
            root.setAttribute('data-theme', 'dark');
            localStorage.setItem('devotional-theme', 'dark');
            themeBtn.innerText = "Light Mode";
        }
    });

    // Font Size Logic
    const applySize = (size) => {
        lyrics.classList.remove('small', 'large');
        if(size === 'small') lyrics.classList.add('small');
        if(size === 'large') lyrics.classList.add('large');
        localStorage.setItem('lyrics-size', size);
    };
    
    applySize(localStorage.getItem('lyrics-size') || 'normal');

    document.getElementById('inc').addEventListener('click', () => applySize('large'));
    document.getElementById('dec').addEventListener('click', () => applySize('small'));
    document.getElementById('reset').addEventListener('click', () => applySize('normal'));

    // Copy Logic
    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(lyrics.innerText).then(() => {
            const originalText = copyBtn.innerText;
            copyBtn.innerText = "Copied! ✓";
            setTimeout(() => { copyBtn.innerText = originalText; }, 2000);
        });
    });
})();
</script>

</body>
</html>
