// composables funkcija koja dovlaci odgovarajuceg usera za single view komponentu
import userType from '@/types/typeUser'
import {ref} from 'vue';

import { db } from '@/firebase/config'
import { getDoc, doc } from "firebase/firestore"

const getUser = (id: string) => {
    const user = ref()
    const error = ref(null)

    const load = async () => {
      try {
        // const listOfUser = await fetch('http://localhost:3000/users/' + id)  // dodajemo ID kako bi znali koji nam user treba
        const listOfUser = await getDoc(doc(db, 'users', id))  // dodajemo ID kako bi znali koji nam user treba

        // if(!listOfUser.ok)  {
        //   throw Error('no user find')
        // }
        if (listOfUser.exists()) {
        // assign document fields
        // to data properties
        user.value = listOfUser.data()
        
      } else {
        console.log('Document does not exist')
      }
        // user.value = await listOfUser
      }
      catch (err: any) {
        error.value = err.message
      }
    }
    return {user, error, load}
}

export default getUser