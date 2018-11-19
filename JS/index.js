function jobDirection(){
   document.getElementById("general-delivery-info").style.display="none";
   document.getElementById("job-direction").style.display="block";
}

function totalInfo(){
    document.getElementById("job-direction").style.display="none";
    document.getElementByClass("container").innerHTML="total-info"

}

function myMap() {
  var mapProp= {
      center:new google.maps.LatLng(51.508742,-0.120850),
      zoom:5,
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
  }
