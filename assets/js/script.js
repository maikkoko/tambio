$(document).ready( function() {
  console.log('It\'s Working!');

  // Header
  $('#logo').hide(0).delay(500).fadeIn(1000);
  $('#title-img').hide(0).delay(500).fadeIn(1000);
  $('#description').hide(0).delay(800).fadeIn(1200);

  // Subtitle
  $('#subtitle-img').hide(0);

  // How To
  $('#how a').click(function(e){
    e.preventDefault();

    changeHowView($(this).data('id'));
  });

  // Articles
  $('#articles a').css({
    'opacity': '0',
    'padding-top': '50px'
  });
});

$(document).scroll( function() {
  var y = $(this).scrollTop();

  console.log(y);

  // Subtitle
  if (y > 200) {
    $('#subtitle-img').fadeIn(800);
  }

  // Articles
  if (y > 1200) {
    $('#articles a').each( function (index) {
      var timeout = (index * 300) + 300;
      var anchor = $(this);

      setTimeout(function () {
        anchor.animate({
          opacity: 1,
          'padding-top': '0px'
        });
      }, timeout);
    });
  }

});


function changeHowView(id) {
  // alert(id);

  $('#how a').each( function(){
    var item = $(this);
    if (item.data('id') == id) {
      item.find('#button').addClass('active');
    } else {
      item.find('#button').removeClass('active');
    }

  });

}
