function scrollCarousel(direction) {
  const carousel = document.getElementById('carousel');
  const scrollAmount = 260; 
 
  const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
 
  if (direction === 1) {
    if (carousel.scrollLeft + scrollAmount >= maxScrollLeft) {
    
      carousel.scrollTo({
        left: 0,
        behavior: 'smooth'
      });
    } else {
      carousel.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }
 
  if (direction === -1) {
    if (carousel.scrollLeft - scrollAmount <= 0) {
     
      carousel.scrollTo({
        left: maxScrollLeft,
        behavior: 'smooth'
      });
    } else {
      carousel.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    }
  }
}