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

const setPhasesConfig = async (teamId: string, phases:Phases): Promise<boolean> => {
    if (teamId && phases) {
        await db.collection('teams').doc(teamId).collection('configuration').doc('phases').set({phaseList:phases.phaseList}).then((mes) => {
            return true;
        }).catch((err) => {
            return false;
        })
        return true;
    }
    return false;
}

export { getUser, getPhasesConfig, setPhasesConfig }