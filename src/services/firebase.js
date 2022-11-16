import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs, getDoc, query, where, addDoc, writeBatch } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBVWnkA1KfuKJBd3R2BaLF-JcFwZ6Yr0YQ",
    authDomain: "reactjsmalzone34765.firebaseapp.com",
    projectId: "reactjsmalzone34765",
    storageBucket: "reactjsmalzone34765.appspot.com",
    messagingSenderId: "994930900339",
    appId: "1:994930900339:web:1c77ec51c8f59c03a15906",
    measurementId: "G-650M2GWNZ3"
};

const FirebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(FirebaseApp);

export async function getProductos() {
    const collectionRef = collection(db, "productos");
    let resultados = await getDocs(collectionRef);

    let dataProductos = resultados.docs.map((doc) => {
        return {
            id: doc.id,
            ...doc.data(),
        };
    });

    return dataProductos;
}

export async function getProductosDetail(idParams) {
    const docRef = doc(db, "productos", idParams);
    const docResult = await getDoc(docRef);
    if (docResult.exists()) {
        return { id: docResult.id, ...docResult.data() };
    }
}

export async function getProductosCategoriaId(paramsCategoriaId) {
    const collectionRef = collection(db, "productos");
    const queryCategoria = query(
        collectionRef,
        where("categoria", "==", paramsCategoriaId)
    );
    let resultados = await getDocs(queryCategoria);
    let dataProductos = resultados.docs.map((doc) => {
        return {
            id: doc.id,
            ...doc.data(),
        };
    });

    return dataProductos;
}

export async function createBuyOrder(orderData) {
    const collectionRef = collection(db, "orders");
    let respuesta = await addDoc(collectionRef, orderData)
    return respuesta.id;
}