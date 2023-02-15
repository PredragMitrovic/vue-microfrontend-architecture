// dovodimo sve usere, ceo JSON

import userType from '@/types/typeUser'
import { defineComponent, onMounted, ref } from 'vue';
import { db } from '@/firebase/config'
import { collection, getDocs, query, orderBy } from "firebase/firestore"

const getUsers = () => {
    const users = ref<userType[]>([])  // bitno!! type ako je array mora da bude i prazan array
    const error = ref(null)

    const load = async () => {
      try {
        // const listOfUser = await fetch('http://localhost:3000/users')  
        // if(!listOfUser.ok)  {  // ako response nije ok onda baci gresku sa nekim stringom
        //   throw Error('no data find')
        // }
        // users.value = await listOfUser.json()
        // console.log(listOfUser)

        // FIRESTORE https://www.koderhq.com/tutorial/vue/firestore-database/

        const res = await getDocs(query(collection(db, 'users'), orderBy('name')))
              // add each doc to 'countries' array
        res.forEach((doc: any) => {
          users.value.push({ ...doc.data(), id: doc.id })
          
          console.log(users.value)
        })
      }
      catch (err: any) { //parametar hvata string od greske iznad i posle moze se radi sa njim sta god
        error.value = err.message
      }
    }
    return {users, error, load}
}

export default getUsers