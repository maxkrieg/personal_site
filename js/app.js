var app = {
  subheaderCarousel: function() {
    var types = [
      'Software Developer',
      'Skiier',
      'Climber',
      'Runner',
      'Biker',
      'Book worm',
      'IPA addict',
      'Coffee-holic',
      'Dog-father'
    ];
    var subheaderEl = $('.header__type');
    var currentIndex = 1;
    var endIndex = types.length - 1;
    var cycleTypes = setInterval(function() {
      subheaderEl.hide().empty().append(types[currentIndex]).fadeIn(1000)
      currentIndex += 1
      if (currentIndex >= endIndex) {
        currentIndex = 0
      };
    }, 3000);
  },
  init: function() {
    app.subheaderCarousel()
  }
};


$(document).ready(function() {
  app.init()
});
