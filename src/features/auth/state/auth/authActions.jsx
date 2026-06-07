//ab isko hum api calls ke liye most of the time use karege 

const { createAsyncThunk } = require("@reduxjs/toolkit");
const { axiosInstance } = require("../../../../config/axiosInstance");

export let loginEmployee = createAsyncThunk(
    "auth/login",
    async (credentials, thunkApi) => {
        try {
            let res = await axiosInstance.post('/auth/login', credentials)
            console.log(res)
            return res.data
        } catch (error) {
            return thunkApi.rejectWithValue(error) //rejectWithValue thunk ka ek method hota hai jo redux ko bata deta hai ki kuch error aaya hai isko hum throw new error kar sakte the. kiya nii kyu ki agar retunr dete hai toh wo redux ke paas chala jayega and hum then ussey handle kar lenge
        }
    })