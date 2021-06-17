const AWS = require('aws-sdk')
const config = require('./config.json')

const credentials = new AWS.SharedIniFileCredentials({profile: 'gmdong'});
AWS.config.credentials = credentials

AWS.config.update({
    region: 'us-west-2',
})

const s3 = new AWS.S3({apiVersion: '2006-03-01'})

const params = {
    Bucket: config.s3_bucket,
}

const s3ObjectList = s3.listObjects(params, (err, data) => {
    if (err) {
        return console.log(err, err.stack)
    }
    const randomIndex = Math.floor(Math.random() * data.Contents.length)
    return data.Contents[randomIndex].Key
})
