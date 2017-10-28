const latestLinks = $('.latest__link');
latestLinks.each(function(){
  let $this = $(this);
  let img = $this.data("bg");
  $this.css("background-image",`url(${img})`);
});