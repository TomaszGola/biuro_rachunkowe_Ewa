function scrollTo() {
  $('html, body').animate({ scrollTop: $('#uslugi').offset().top }, 'slow');
  console.log('dupa');
  return false;
}