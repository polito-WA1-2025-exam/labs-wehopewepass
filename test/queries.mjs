import {connectDB} from "../dbConfig.mjs"

const fetchAllData = async (tableName)=>{
    const db=await connectDB()
    try{
        const items = await db.all(`SELECT * FROM ${tableName}`);
        return items;
    }
    catch(err){
        console.log("Error Fetching Data::",err);
        
    }
    finally{
        await db.close()
    }
}


const bowlsGT7 = async()=>{
    const db=await connectDB()
    try{
        const items = await db.all(`SELECT * FROM availability WHERE quantity > 7;`);
        return items; 
    }
    catch(err){
        console.log("Error Fetching Data::",err);
        
    }
    finally{
        await db.close()
    }
}

const bowsWithRice = async()=>{
    const db=await connectDB()

    try{
        const items = await db.all('SELECT * FROM pokebowls WHERE base="Rice";')
        return items
    }
    catch(err){
        console.log("Error Fetching Data::",err);
        
    }
    finally{
        await db.close()
    }
}

bowsWithRice().then((data)=>{
    console.log(data);
    
})

export {bowlsGT7,fetchAllData,bowsWithRice}

