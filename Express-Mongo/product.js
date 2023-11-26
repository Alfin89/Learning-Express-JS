const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/product').then(() => {
  console.log("Connected to Mongodb");
}).catch((err) => {
  console.log(err);
});

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Tidak boleh kosong atau nilai mines'],
    },
    color: {
        type: String,
        required: true,
    },
    size: [{
        type: String,
        required: true,
    }],
    description: {
        type: String,
        required: true,
        maxLength: 255,
    },
    condition: {
        type: String,
        enum: ['baru', 'bekas'],
        default: 'baru'
    },
    stock: {
        type: Number,
        required: true,
        min: 0
    },
    availability: {
        online: {
            type: Boolean,
            required: true,
        },
        offline: {
            type: Boolean,
            required: true,
        },
    }
})

// Method Schema
// productSchema.methods.outStock = function() {
//     this.stock = 10
//     this.availability.online = true
//     this.availability.offline = true
//     return this.save()
// }

// Method Static
productSchema.statics.closeStore = function() {
    return this.updateMany({}, {
        stock: 0,
        "availability.online": false,
        "availability.offline": false,
    })
}



const Product = mongoose.model('Product', productSchema)

// const product = new Product({
//     "name": "Sepatu Sport",
//     "brand": "Nike",
//     "price": 1500000,
//     "color": "Merah",
//     "size": ["42","40"],
//     "description": "Sepatu olahraga nyaman untuk aktivitas sehari-hari",
//     "condition": "baru",
//     "stock": 50,
//     "availability": {
//         online: true,
//         offline: false,
//     }
// })

// product.save().then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });

// update 
// Product.findOneAndUpdate({name: "Sepatu Futsal"}, {
//     "name": "Kemeja Keren",
//     "brand": "Loba",
//     "price": 5000000,
//     "color": "merah",
//     "size": ["42","40"],
//     "description": "baju keren merek loba",
//     "condition": "baru",
//     "stock": 100,
//     "availability": {
//         online: true,
//         offline: true,
//     }
// }, { new: true, runValidators: true}).then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });

// Method Schema
// const changeStock = async (id) => {
//     const foundProduct = await Product.findById(id)
//     await foundProduct.outStock();
//     console.log('Berhasil diubah');
// }

// changeStock('655f778a513e507c19c259c8')

// Method Statics
Product.closeStore().then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});