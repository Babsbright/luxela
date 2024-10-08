import { AppConfig } from '../app.config';
import { initializeApp, cert, App } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { Firestore } from "firebase-admin/firestore";

class InitializeFirebase {
    private getFirestore: Firestore;
    private app: App; 
    constructor() {
        this.app = initializeApp({
            credential: cert(AppConfig.firebase.serviceaccount)
        })
        console.log('Firebase connected successfully!')
        this.getFirestore = getFirestore()
    }

    public getApp() {
        return this.app
    }
    
    public getDb(): Firestore {
        return this.getFirestore
      }
}

export const InitializeDb = new InitializeFirebase()
