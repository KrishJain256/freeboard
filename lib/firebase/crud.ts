// TODO : Use a module bundler for size reduction
import { initializeApp } from "firebase/app"
import { getFirestore, getDoc, doc, addDoc, collection, updateDoc, deleteDoc } from "firebase/firestore"
import {serializeAsJSON} from "@excalidraw/excalidraw";
import {BinaryFiles} from "@excalidraw/excalidraw/types/types";

// TODO : Use environment variables. Do not add API keys to version control.
// For local development, copy paste this config from your firestore project settings.
const firebaseConfig = {
    apiKey: "AIzaSyAy3Ehft_Hyou2dSZdxOPQGTn1BAjllKcw",
    authDomain: "leetcodeboard-krishjain.firebaseapp.com",
    projectId: "leetcodeboard-krishjain",
    storageBucket: "leetcodeboard-krishjain.appspot.com",
    messagingSenderId: "671156455515",
    appId: "1:671156455515:web:a33a151e4f95c17b2dd77e",
    measurementId: "G-5R4LVBVRYP"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export async function getDocumentData(collectionName: string, documentId: string) {
    console.log("GET DATA INVOKED")
    try {
        const docRef = doc(db,collectionName,documentId);
        console.log("DOCREF",docRef)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
            console.log("SNAP EXISTS")
            // Use getDoc to fetch the document
            console.log("FETCHING")
            const data = await docSnap.data()
            console.log("DATA RECEIVED", data)
            console.log("Data Content :",)
            const json = JSON.stringify({
                "appState": data.appState,
                "elements": data.elements,
                "source": data.source,
                "type": data.type,
                "version": data.version
            })
            console.log("STRINGIFIED", json)
            return json
        }
            else {
                // Return null if document does not exist
                return null
            }
        } catch (error) {
        // Propagate error to the caller
        throw error
    }
}

export async function addDocument(collectionName : string, data: any, documentId: string) {
    try {
        // await deleteDoc(doc(db, collectionName, documentId));
        try {

            const docRef = doc(db, collectionName,documentId)
            const documentSnapshot = await getDoc(docRef)
            if (documentSnapshot.exists()) {
                const check = updateDoc(docRef, data)
                console.log("Document updated with documnet id: ",docRef.id)
            }
            else {
                const docRef = await addDoc(collection(db, collectionName), data);
                console.log("Document written with ID: ", docRef.id);
            }
            return docRef.id
        }
        catch(e) {
            const docRef = await addDoc(collection(db, collectionName), data);
            console.log("Document written with ID: ", docRef.id);
            return docRef.id
        }

    } catch (e) {
        console.error("Error adding document: ", e);
    }
}