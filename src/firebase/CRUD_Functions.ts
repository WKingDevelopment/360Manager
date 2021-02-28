import { User } from "../clientModels/User"
import { Phases } from "../data classes/Phases";
import { db } from "./firebase"

const getUser = async (email: string): Promise<User | undefined> => {
    return await db.collection('users').doc(email).get().then((data) => {
        if (data.exists) {
            return data.data() as User;
        } else {
            return undefined;
        }
    }).catch((error) => {
        console.log(error)
        return undefined;
    })
}

const getPhasesConfig = async (teamId: string|undefined): Promise<Phases | undefined> => {
    if (teamId) {
        return await db.collection('teams').doc(teamId).collection('configuration').doc('phases').get().then((data) => {
            if (data.exists) {
                return data.data() as Phases;
            }
        }) 
    }
    return undefined
}

export { getUser, getPhasesConfig }