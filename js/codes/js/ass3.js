function billingFunction(){
  var remember = document.getElementById('same');
  if(remember.checked){
    document.getElementById("billingName").value =  document.getElementById('shippingName').value;
    document.getElementById("billingZip").value =  document.getElementById('shippingZip').value;
   }
  else {
    document.getElementById("billingName").value = null;
    document.getElementById("billingZip").value =  null;
  }
}
