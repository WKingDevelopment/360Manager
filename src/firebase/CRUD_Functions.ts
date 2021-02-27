import { Configuration } from "../clientModels/Configuration";
import { User } from "../clientModels/User"
import { Fields } from "../data classes/Fields";
import { Phases } from "../data classes/Phases";
import { db } from "./firebase"

const getUser = async (email: string): Promise<User | undefined> => {
    return await db.collection('users').doc(email).get().then((data) => {
        if (data.exists) {
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

const getTeamConfig = async (teamId: string): Promise<Configuration | undefined> => {
    let phases:Phases|undefined = undefined;
    let fields:Fields|undefined = undefined;
    console.log('aaaaaaaaaa',teamId)
    await db.collection('teams').doc(teamId).collection('configuration').get().then((data) => {

    })
    await db.collection('teams').doc(teamId).collection('configuration').doc('phases').get().then((data) => {
        console.log(data.data())
        phases = data.data() as Phases 
    })
    console.log(phases)
    if (phases) {
        console.log(phases)
        return new Configuration(phases)
    }
    return undefined
}

export { getUser, getTeamConfig }