function seleksiNilai (nilaiAwal, nilaiAkhir, dataArray) {
    if ( nilaiAwal > nilaiAkhir ) {
      return "Nilai akhir harus lebih besar dari nilai awal";
    } else if ( dataArray.length < 5 ) {
      return "Jumlah angka dalam DataArray harus lebih dari 5";
    } 
    let arr = [];
    for ( let i = 0; i < dataArray.length; i++) {
      if ( dataArray[i] > nilaiAwal && dataArray[i] < nilaiAkhir) {
        arr.push(dataArray[i]);
      }
      // built-in function
    } return arr.sort(function(nilaiAwal, nilaiAkhir) {return nilaiAwal - nilaiAkhir;})
  }



console.log(seleksiNilai(8, 30, [2, 17, 30, 8, 300, 70, 18, 12, 27]))