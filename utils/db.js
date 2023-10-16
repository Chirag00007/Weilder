import mongoose from "mongoose"


export const connectDB = async () => {
    try {
        const {connection} = await mongoose.connect("mongodb+srv://tarun:devgan123@nextjs.xjghayy.mongodb.net/?retryWrites=true&w=majority")
        console.log(`Server connected to ${connection.host}`)
    } catch (error) {
        console.log(`Error ${error}`)
    }
}