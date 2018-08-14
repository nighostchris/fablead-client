const CommonUtils = {
  dataURLtoFile(dataurl, filename) {
    const arr = dataurl.split(',');
    const bstr = atob(arr[1]);

    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: 'image/jpg' });
  },
};

export default CommonUtils;
