export function stringAccounting(text: number) {
  if (text.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') === 'NaN') {
    return '';
  } else {
    return text.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
