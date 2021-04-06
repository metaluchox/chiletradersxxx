import { db } from "../firebase/firebase-config";


export const loadUser = async ( request ) => {
    const user = [];
    try {
        const userSnap = await db.collection(`${request.id}/chiletraders/usuario`).get();    

        userSnap.forEach(snapDoc =>{
            if (snapDoc.exists) {

                user.push({
                    id: request.id,
                    ...snapDoc.data()
                })

            }else{
                console.log("Doc usuario no exist")
            }
               
        })
        
    } catch (error) {
        console.error(error)
    }

    return user;

}