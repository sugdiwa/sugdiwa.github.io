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
/*-------------------------------------------------------------------------------------------------------*/
//Array for contact page images
var arr = [];
arr[0]= new Image();
arr[0].src = "img/contactimg1.jpg";

arr[1]= new Image();
arr[1].src = "img/contactimg2.jpg";

arr[2]= new Image();
arr[2].src = "img/contactimg3.jpg";

arr[3]= new Image();
arr[3].src = "img/contactimg6.jpg";

arr[4]= new Image();
arr[4].src = "img/contactimg7.jpg";

arr[5]= new Image();
arr[5].src = "img/contactimg8.jpg";

arr[6]= new Image();
arr[6].src = "img/contactimg9.jpg";

arr[7]= new Image();
arr[7].src = "img/contactimg10.jpeg";
var i=0;
//onLoad function for slide show images
function slide(){
  document.getElementById("image1").src= arr[i].src;
  i++;
  if(i==arr.length){
      i=0;
  }
  setTimeout(function(){ slide(); },8000);
}
/*-------------------------------------------------------------------------------------------------------*/

/*------------Jquery----------------------------------------------------------------*/

$(document).ready(function(){

  $('#menutype').on('change',changeMenu);

  function changeMenu(){
   
    //Get the menu name value
    var menuName=$('#menutype').val();
    
    /* Conditions to check which menu image to display depending on 
    the drop down value  */
    if(menuName === 'appetizer') {
      $('#entree').hide();
      $('#rice').hide();
      $('#noodles').hide();
      $('#deserts').hide();
      $('#juices').hide();
      $('#appetizer').slideToggle("slow");
    }
    else if(menuName === 'entree'){
      $('#appetizer').hide();
      $('#entree').slideToggle("slow");
      $('#deserts').hide();
      $('#juices').hide();
      $('#noodles').hide();
      $('#rice').hide();
    }
    else if(menuName === 'rice'){
      $('#appetizer').hide();
      $('#entree').hide();
      $('#deserts').hide();
      $('#noodles').hide();
      $('#juices').hide();
      $('#rice').slideToggle("slow");
    }
     else if(menuName === 'noodles'){
      $('#appetizer').hide();
      $('#entree').hide();
      $('#rice').hide();
      $('#deserts').hide();
      $('#juices').hide();
      $('#noodles').slideToggle("slow");
    }
    else if(menuName === 'deserts'){
      $('#appetizer').hide();
      $('#entree').hide();
      $('#rice').hide();
      $('#noodles').hide();
      $('#juices').hide();
      $('#deserts').slideToggle("slow");
    }
    else if(menuName === 'juices'){
      $('#appetizer').hide();
      $('#entree').hide();
      $('#rice').hide();
      $('#noodles').hide();
      $('#deserts').hide();
      $('#juices').slideToggle("slow");
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
  // The optional number (900) specifies the number of milliseconds
  // it takes to scroll to the specified area
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