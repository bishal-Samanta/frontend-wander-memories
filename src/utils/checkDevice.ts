const isBrowsedFromMobile = () =>{
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        // This is a mobile device
        return true;
      } else {
        // This is not a mobile device (likely a laptop)
        return false;
      }
}

export default isBrowsedFromMobile