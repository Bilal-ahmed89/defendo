import mongoose from "mongoose";

export const connectDB = async () => {
        
        try {
            await mongoose.connect('mongodb+srv://ba1770490:UAjBc4PIE1FG62oh@cluster0.fppddhi.mongodb.net/defendo');
            console.log('DB Connection Successful!');
          } catch (error) {
            console.error('Error connecting to database:', error);
          }

}