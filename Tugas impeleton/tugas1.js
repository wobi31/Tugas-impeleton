const cekKataPalindrom = (kata) => {
 return new Promise((resolve, reject) => {
   setTimeout(() => {
     const kataLower = kata.toLowerCase();
     const reversedKata = kataLower.split('').reverse().join('');
     if (reversedKata === kataLower) {
       resolve(`kata benar palindrom: ${kata}!`);
     } else {
       reject(new Error('kata bukan palindrom'));
     }
   }, 0);
 });
};


cekKatapalindrom('siang') //malam,kodok,katak,level,
     .then((kata) => {
       console.log(kata); // Output jika kata palin
     })
     .catch((err) => {
       console.log(err);  // Output jika kata bukan
     });

