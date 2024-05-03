export default function sortObject(data, key) {
    return data.sort((a, b) => compare(a, b, key));
}

function compare(a, b, key) {
    const descriptionA = a[key].toUpperCase();
    const descriptionB = b[key].toUpperCase();
  
    let comparison = 0;
    if (descriptionA > descriptionB) {
      comparison = 1;
    } else if (descriptionA < descriptionB) {
      comparison = -1;
    }
    return comparison;
}
