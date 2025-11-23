async function loadGallery(){
  const res = await fetch('/gallery.json');
  const items = await res.json();
  const container = document.getElementById('gallery');
  container.innerHTML = '';
  items.forEach(it=>{
    const a = document.createElement('a');
    a.href = it.src;
    a.className = 'item';
    a.addEventListener('click', e=>{
      e.preventDefault(); openLightbox(it);
    });
    const img = document.createElement('img');
    img.src = it.thumb || it.src;
    img.alt = it.title || '';
    const cap = document.createElement('div');
    cap.className = 'caption';
    cap.textContent = it.title || '';
    a.appendChild(img);
    if(it.title) a.appendChild(cap);
    container.appendChild(a);
  })
}

function openLightbox(item){
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  const cap = document.getElementById('lightbox-caption');
  img.src = item.src;
  img.alt = item.title || '';
  cap.textContent = item.description || item.title || '';
  lb.hidden = false;
}

function closeLightbox(){
  const lb = document.getElementById('lightbox');
  lb.hidden = true;
  document.getElementById('lightbox-img').src = '';
}

document.getElementById('close').addEventListener('click', closeLightbox);
document.addEventListener('keydown', e=>{ if(e.key==='Escape') closeLightbox() });

loadGallery().catch(err=>{
  console.error('Failed to load gallery',err);
  const container = document.getElementById('gallery');
  container.innerHTML = '<div class="loading">Failed to load gallery.json — check the file.</div>';
});
