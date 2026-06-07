import axios from 'axios'

export let axiosInstance = axios.create({
    baseURL: "https://api.team-sync.space/api",
    withCredentials: true //kyuki humne integration me padha tha ki jab cookies transfer hoti hai matlab jab authentiaction me token generate hota hai wether it is the singleton token or the double token toh usko access karne ke liye frontend me hume ise ek credentials true dena padta hai matlab ki aap humari cookies ko access kar lo
})