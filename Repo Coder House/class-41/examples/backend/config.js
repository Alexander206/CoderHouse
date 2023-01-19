export default {
  dao: {
    target: process.env.DAO_TARGET || 'mem',
    file: process.env.FILE_PATH || 'data.db',
    mongo: process.env.MONGODB_URI || 'mongodb://localhost:27017/class-40',
  }
}