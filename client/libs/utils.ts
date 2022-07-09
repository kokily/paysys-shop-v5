export function stringAccounting(text: number) {
  if (text.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') === 'NaN') {
    return '';
  } else {
    return text.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}

export function dataURItoBlob(uri: string) {
  // Base64 Decode
  const blob = window.atob(uri.split(',')[1]);
  let array: number[] = [];

  for (let i = 0; i < blob.length; i++) {
    array.push(blob.charCodeAt(i));
  }

  const file = new Blob([new Uint8Array(array)], {
    type: 'image/png',
  });

  return file;
}
