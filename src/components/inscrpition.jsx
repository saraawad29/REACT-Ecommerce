import { useState } from 'react'
import Button from './button'
import NavBar from './navbar';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export default function Inscription() {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    //rajouter les utilisateurs dans firebase
    const register = async (email, password) => {
      try {
        const user = await createUserWithEmailAndPassword(auth, email, password);
        console.log(user);
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
      }
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(
        `Submitting Registration Form with, Email: ${email}, Password: ${password}`
      );
      // logique de validation
  
      register(email, password);
    };
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
      register('utilisateurs', {email, password})
    };
    
        

    return(
    <div>
        <NavBar/>
        <div className='flex justify-center mt-32'>

          <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="email" value={email} onChange={handleEmailChange} />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password"
          value={password} onChange={handlePasswordChange}/>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="hover:bg-slate-700 hover:scale-110 bg-black text-white font-bold text-sm cursor-pointer py-2  px-4"
              type="submit"
            >
              Submit
            </button>
          </div>

          </form>
        </div>
    </div>  
        )
}



// export default function Connexion() {
//   const [firstname, setFirstname] = useState('');
// const [lastname, setLastname] = useState('');
//   //rajouter les utilisateurs dans firebase
//   const createUtilisateus = async (collectionName, documentData)=> {
//     try {
//       const docRef = await addDoc(collection(database, collectionName), documentData );

//       console.log("Document Ref written: ", docRef);
//       console.log("Document written with ID: ", docRef.id);
//     } catch (e) {
//       console.error("Error adding document: ", e);
//     }
    
//   };
//   const handleSubmit = (e) => {
//       e.preventDefault();
//       createUtilisateus('utilisateurs', {firstname, lastname})
      
//     }
//   return(
//   <div>
//       <NavBar/>
//       <div className='flex justify-center mt-32'>

//         <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstname">
//             Firstname
//           </label>
//           <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  type="text"
//             placeholder="firstname" value={firstname} onChange={(inputElement)=>{ setFirstname(inputElement.target.value) }}/>
//         </div>

//         <div className="mb-6">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastname">
//             Lastname
//           </label>
//           <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text"
//             placeholder="lastname" value={lastname} onChange={(inputElement)=>{ setLastname(inputElement.target.value) }}/>
//         </div>
//         <div className="flex items-center justify-center">
//           <button
//             className="hover:bg-slate-700 hover:scale-110 bg-black text-white font-bold text-sm cursor-pointer py-2  px-4"
//             type="submit"
//           >
//             Connexion
//           </button>
//         </div>

//         </form>
//       </div>
//   </div>  
//       )
// }