import 'dotenv/config'
// let emailCc = process.env.EMAIL_CC.split(',')
// let emailErrorCc = process.env.EMAIL_ERROR_CC.split(',')
export default {
    nodePort: process.env.NODE_PORT,
    nodeHost: process.env.NODE_HOST,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    dbNameAdmin: process.env.ADMIN_DB_NAME,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbPort: process.env.DB_PORT,
    //   emailHost: process.env.EMAIL_HOST,
    //   emailUser: process.env.EMAIL_USER,
    emailPassword: process.env.EMAIL_PASSWORD,
    emailFrom: process.env.EMAIL_FROM,
    //   emailCc: emailCc,
    //   emailTo: process.env.EMAIL_To,
    //   emailErrorCc: emailErrorCc,
    //   emailPort: process.env.EMAIL_PORT,
    //   smsSender: process.env.SMS_SENDER,
    // senderHash: process.env.SENDER_HASH,
    s3AccessId: process.env.S3_ACCESS_ID,
    s3SecretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    awsRegion: process.env.AWS_REGION,
    s3BucketName: process.env.S3_BUCKET_NAME,
    jwtSecretKey: process.env.JWT_SECRET_KEY,
    jwtExpireToken: process.env.EXPIRE_TOKEN,
    //   redisUrl: process.env.REDIS_URL,
    //   redisPort: process.env.REDIS_PORT,
    //   sendgridApiKey: process.env.SENGRID_API_KEY
}