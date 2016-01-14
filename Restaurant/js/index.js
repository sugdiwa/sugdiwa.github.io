/* Google Map*/
var myCenter = new google.maps.LatLng(-33.823835,151.193164);
/* Initialize Google Map*/
function initialize() {
var mapProp = {
center:myCenter,
zoom:17,
scrollwheel:true,
draggable:true,
mapTypeId:google.maps.MapTypeId.ROADMAP
};

var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker = new google.maps.Marker({
position:myCenter,
});

marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);
window.jQuery || document.write('<script src="js/vendor/jquery-1.9.1.min.js"><\/script>');
 var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
(function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
s.parentNode.insertBefore(g,s)}(document,'script'));

$(document).ready(function(){

  $('#menutype').on('change',changeMenu);

  function changeMenu(){
   
    //Get the City name value
    var menuName=$('#menutype').val();
    
    

    /* Conditions to check which city image to display depending on 
    the input text value  */
    if(menuName === 'appetizer') {
        $('#entree').hide();
        $('#rice').hide();
        $('#noodles').hide();
        $('#deserts').hide();
        $('#juices').hide();
        $('#appetizer').show();
      }
      else if(menuName === 'entree'){
        $('#appetizer').hide();
        $('#entree').show();
         $('#deserts').hide();
         $('#juices').hide();
        $('#noodles').hide();
      }
      else if(menuName === 'rice'){
        $('#appetizer').hide();
        $('#entree').hide();
        $('#deserts').hide();
        $('#noodles').hide();
        $('#juices').hide();
        $('#rice').show();
        
      }
       else if(menuName === 'noodles'){
        $('#appetizer').hide();
        $('#entree').hide();
        $('#rice').hide();
        $('#deserts').hide();
        $('#juices').hide();
        $('#noodles').show();
      }
      else if(menuName === 'deserts'){
        $('#appetizer').hide();
        $('#entree').hide();
        $('#rice').hide();
        $('#noodles').hide();
        $('#juices').hide();
        $('#deserts').show();
      }
       else if(menuName === 'juices'){
        $('#appetizer').hide();
        $('#entree').hide();
        $('#rice').hide();
        $('#noodles').hide();
        $('#deserts').hide();
        $('#juices').show();
      }
    
  }
  // Colorbox Call for gallery
  $("[rel^='lightbox']").prettyPhoto();
  // Initialize Tooltip
  $('[data-toggle="tooltip"]').tooltip(); 
  
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){
   
      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
    //for modal in catering services
    $('li img').on('click',function(){
        var src = $(this).attr('src');
        var img = '<img src="' + src + '" class="img-responsive"/>';
        $('#myModal').modal();
        $('#myModal').on('shown.bs.modal', function(){
            $('#myModal .modal-body').html(img);
        });
        $('#myModal').on('hidden.bs.modal', function(){
            $('#myModal .modal-body').html('');
        });
   });

    $('#nav-toggle').click(function(){
    $('body').toggleClass('nav-open');
  });
  });

})