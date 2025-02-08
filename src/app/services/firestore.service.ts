import { Injectable } from '@angular/core';

// using firestore, you only import the functions that are needed
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  Firestore,
  getDocFromServer,
  setDoc,
  updateDoc
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private firestore: Firestore
  ) {}

  // requests to single documents

  private async createDocument(docPath: string, data: any): Promise<void> {
    const docRef = doc(this.firestore, docPath);
    await setDoc(docRef, data);
  }

  private async addDocument(collectionPath: string, data: any) {
    const collectionRef = collection(this.firestore, collectionPath);
    const doc = await addDoc(collectionRef, data);
    return doc.id;
  }

  private async getDocument<T>(docPath: string): Promise<T | null> {
    const docRef = doc(this.firestore, docPath);
    const docSnap = await getDocFromServer(docRef);
    if (docSnap.exists()) {
      return docSnap.data() as T;
    }
    return null;
  }

  private async updateDocument(collectionPath: string, data: any): Promise<void> {
    const docRef = doc(this.firestore, collectionPath);
    await updateDoc(docRef, data);
    // update Doc throws error if doc not found, below statement will create a new doc if doc not found
    // await setDoc(docRef, data, { merge: true });
  }

  private async deleteDocument(docPath: string): Promise<void> {
    const docRef = doc(this.firestore, docPath);
    await deleteDoc(docRef);
  }

  // requests to collections

  // requests to Collections Groups
}
