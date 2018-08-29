import mongoose from 'mongoose'

const connectionString = `mongodb://peacockapdb:${encodeURIComponent('B2FBf5jIjU0bswZeUg4MzX3CmnEScvK7rJmwRJNqw0s88lJHgyDtnEMeTO77tNHaFrmNgsOc6qA4oE4eiS2ZqA==')}@peacockapdb.documents.azure.com:10255/?ssl=true`

export const connection = () => {
    if (!mongoose.connection.readyState) {
        mongoose.connect(connectionString)
    }
    
    return mongoose.connection
}