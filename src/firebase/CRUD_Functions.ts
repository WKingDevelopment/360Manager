import { User } from "../clientModels/User"
import { db } from "./firebase"

const getUser = async (email:string):Promise<User|undefined> => { 
    return await db.collection('users').doc(email).get().then((data) => {
        if(data.exists) {
            return data.data() as User;
        } else {
            console.log('Data doesnt exist')
            return undefined;
        }
    }).catch((error) => {
        console.log(error)
        return undefined;
    })
}

export { getUser }