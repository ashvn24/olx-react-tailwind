import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { collection, addDoc, getDocs, doc, query, where, deleteDoc } from "firebase/firestore"; 
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

    const store = async (username,phone,email) =>{
      return await addDoc(collection(db,'userss'),{
        id:auth.currentUser.uid,
        username:username,
        phone:phone,
        email:email,
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

    const [userProfile, setUserProfile] = useState('')
    const [userProfiledata, setUserProfiledata] = useState([])
    const profile = () => {
      return getDocs(query(collection(db, 'userss'), where('id', '==', auth.currentUser.uid)))
        .then((snap) => {
          snap.forEach((doc) => {
            console.log(doc.data());
            setUserProfile(doc.data());
          });
        })
        .then(async () => {
          // Use await here to wait for the promise to resolve
          const snapshot = await getDocs(query(collection(db, 'Product'), where('userId', '==', auth.currentUser.uid)));
          
          const data = snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id
          }));
    
          setUserProfiledata(data);
          console.log(userProfiledata);
        })
        .catch((error) => {
          console.error('Error in profile function:', error);
        });
    };
    
    const Delete =(id)=>{
      
       deleteDoc(doc(db, "Product", id));      
    }

  return (
    <firebaseContext.Provider value={{ createUser,update,user,login,store,signout,sellItem,post,posts,view,setView,viewPost,userdetails,userProfile,userProfiledata,profile,Delete }}>
      {children}
    </firebaseContext.Provider>
  );
}
