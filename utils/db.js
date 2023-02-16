const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/rizkon', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});




// // Menambah 1 data
// const contact1 = new Contact({
//     nama: 'Noviana',
//     nohp: '082324617678',
//     email: 'noviana86system@gmail.com',
// });

// // Simpen ke Collection
// contact1.save().then((contact) => console.log(contact));