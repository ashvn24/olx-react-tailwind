import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { collection, addDoc, getDocs,getDoc, doc, query, where } from "firebase/firestore"; 
import { auth, db } from "../Firebase/Config";
import { getDownloadURL,ref, uploadBytes } from "firebase/storage";
import { storage } from "../Firebase/Config";

export const firebaseContext = createContext(null);

export default function Firebase({ children }) {

  const [user, setUser] = useState('')

    useEffect(() => {
      onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
      })
    
     
    }, [])
      

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const update = (display) =>{
      return updateProfile(auth.currentUser,{
        displayName:display
      })
    }

    const login = (email,password) =>{
      return signInWithEmailAndPassword(auth,email,password)
    }

    const store = async (username,phone) =>{
      return await addDoc(collection(db,'userss'),{
        id:auth.currentUser.uid,
        username:username,
        phone:phone
      })
    }

    const sellItem =async(image,item,category,price)=>{
      const storageRef = ref(storage,`/images/${image.name}`);
      await uploadBytes(storageRef,image).then(()=>{
        getDownloadURL(storageRef).then((url)=>{
          
          addDoc(collection(db,'Product'),{
            userId:auth.currentUser.uid,
            item,
            category,
            price,
            imageUrl:url
          })
        })
      })
    }

    const [posts, setPosts] = useState([])
    const post = async()=>{
      
      return await getDocs(collection(db,'Product')).then((snapshot)=>{
        const alldata = snapshot.docs.map((prod)=>({
          ...prod.data(),
          id:prod.id
        }))
        setPosts(alldata)
      })
    }
    
    const [view, setView] = useState('')
    const [userdetails, setUserdetails] = useState('')
    const viewPost = async ()=>{
      
      try {
        // Check if view is not an empty string
        if (view) {
          const userDocRef = query(collection(db, "userss"), where("id", "==", view.userId));
          const userDocSnap = await getDocs(userDocRef);

          userDocSnap.forEach((doc) => {
          setUserdetails(doc.data())
        });

        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    const signout =()=>{
      return signOut(auth)
    }

  return (
    <firebaseContext.Provider value={{ createUser,update,user,login,store,signout,sellItem,post,posts,view,setView,viewPost,userdetails }}>
      {children}
    </firebaseContext.Provider>
  );
}
