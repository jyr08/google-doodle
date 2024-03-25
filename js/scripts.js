console.log('OK');


<script src="https://cdn.jsdelivr.net/npm/gsap@3.12/dist/gsap.min.js"></script>


gsap.from("#butterflies", {
    scale: 2,
    duration: 2,
    repeat: -1,
    yoyo: true,
    rotate: -45
    
  });