// const AWS = require('aws-sdk')
// const config = require('./config.json')

// const credentials = new AWS.Credentials({
//     accessKeyId     : process.env.ACCESS_KEY_ID,
//     secretAccessKey : process.env.SECRET_ACCESS_KEY,
// })

// AWS.config.credentials = credentials

// AWS.config.update({
//     region: 'us-west-2',
// })

// const s3 = new AWS.S3({apiVersion: '2006-03-01'})

// const params = {
//     Bucket: config.s3_bucket,
// }

// var photos = []

// const s3Object = s3.listObjects(params, (err, data) => {
//     if (err) {
//         return console.log(err, err.stack)
//     }
//     photos = data.Contents
// })

// const randomPhotoInS3 = (photos) => {
//     const randomIndex = Math.floor(Math.random() * photos)
//     const randomPhoto = photos[randomIndex].Key
// }
