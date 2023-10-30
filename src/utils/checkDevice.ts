const checkDevice = () =>{
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        // This is a mobile device
        console.log("This is a mobile device");
      } else {
        // This is not a mobile device (likely a laptop)
        console.log("This is not a mobile device");
      }
}

export default checkDevice