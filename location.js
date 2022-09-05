let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    let crd = pos.coords;
    $('#lat').val(crd.latitude);
    $('#lng').val(crd.longitude);
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
navigator.geolocation.getCurrentPosition(success, error, options);
  

