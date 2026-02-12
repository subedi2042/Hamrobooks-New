import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export async function notifyAdmin(type: 'ABANDONED_CART' | 'CHECKOUT_FAILURE', data: any) {
    try {
        await addDoc(collection(db, "admin_notifications"), {
            type,
            data,
            timestamp: serverTimestamp(),
            status: 'unread',
            message: type === 'ABANDONED_CART'
                ? `Abandoned cart detected for user/guest at ${new Date().toLocaleString()}`
                : `Checkout failure detected: ${data.error || 'Unknown error'}`
        });

        console.log(`[Admin Notification] ${type} logged to Firestore.`);

        // Note: Real email sending would typically happen via a Firebase Function 
        // watching this collection, or a direct call to an email API here.
    } catch (error) {
        console.error("Failed to notify admin:", error);
    }
}
