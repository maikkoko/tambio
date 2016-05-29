$(document).ready( function() {
  // Header
  $('#logo').hide(0).delay(500).fadeIn(1000);
  $('#title-img').hide(0).delay(500).fadeIn(1000);
  $('#description').hide(0).delay(800).fadeIn(1200);

  // Subtitle
  $('#subtitle-img').hide(0);

  // How To
  $('.data').hide();
  changeHowView($('.data:first').data('id'));

  $('#how a').click(function(e){
    e.preventDefault();

    changeHowView($(this).data('id'));
  });

  var intervalId;
  var slidetime = 8000;

  intervalID = setInterval(cycleHow, slidetime);

  // Articles
  $('#articles a').css({
    'opacity': '0',
    'padding-top': '50px'
  });
});

var showHow = true;

$(document).scroll( function() {
  var y = $(this).scrollTop();

  // console.log(y);

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

  var datadiv = '.data[data-id=' + id + ']';

  $('#how-details').animate({ opacity: 0 }, 500, function(){
    $('#how-details').html('');
    $('#how-details').html($(datadiv).html());
    $('#how-details').animate({ opacity: 1 }, 1000);
  });

}

function cycleHow() {
  var on_last = $("#how a:last").find('#button').hasClass("active");

  if (on_last){
    var next_div = $("#how a:first").data('id');
  } else {
    var next_div = $("#how a #button.active").parent().next().data('id');
  }

  changeHowView(next_div);
}
