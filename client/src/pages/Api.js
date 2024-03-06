import axios from "axios";

export const SingUpApi=async(data)=>{
    console.log("datas :....",data);
    const datas=await axios.post("http://localhost:5000/data/signup", data  )
    console.log("final.... :",datas);
    
}  

export const updateApi=async(data,id)=>{
    try {
        const updatedData=await axios.put(`http://localhost:5000/data/updateData?id=${id}`,data)
        console.log("updated :",updatedData);
    } catch (error) {
        console.log(error.message);
    }
}
export const deleteApi=async(id)=>{
    try{
        const deleteData=await axios.delete(`http://localhost:5000/data/deleteData/${id}`)
        console.log("delete ......:",deleteData);
    }catch(err){
        console.log(err.message);
    }
}
