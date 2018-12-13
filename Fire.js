import firebase from 'firebase';
class Fire {
    constructor() {
        this.init();
        this.observeAuth();
    }

    //Authenticate current Login
    observeAuth = () =>
        firebase.auth().onAuthStateChanged(this.onAuthStateChanged)

    // Handle authentication if logged in/anonymous
    onAuthStateChanged = user => {
        if (!user) {
            try {
                firebase.auth().signInAnonymously();
            } catch ({ message }) {
                alert(message);
            }
        }
    };

    // Ref link for get (/messages)
    get ref() {
        return firebase.database().ref('messages');
    }
    // Gets the latest 20 messages and latest message
    on = callback =>
        this.ref
            .limitToLast(20)
            .on('child_added', snapshot => callback(this.parse(snapshot)));

    // Parse our message from snapshot for gifted-chat
    parse = snapshot => {
        // 1.
        const { timestamp: numberStamp, text, user } = snapshot.val();
        const { key: _id } = snapshot;
        // 2.
        const timestamp = new Date(numberStamp);
        // 3.
        const message = {
            _id,
            timestamp,
            text,
            user,
        };
        return message;
    }
    // Helper to get user-id
    get uid() {
        return (firebase.auth().currentUser || {}).uid;
    }
    // Helper to get timestamp from firebase
    get timestamp() {
        return firebase.database.ServerValue.TIMESTAMP;
    }

    // Loop through messages
    send = messages => {
        for (let i = 0; i < messages.length; i++) {
            const { text, user } = messages[i];
            // 4.
            const message = {
                text,
                user,
                timestamp: this.timestamp,
            };
            this.append(message);
        }
    };
    
    // Save message object
    append = message => this.ref.push(message);

    // Unsubscribe from database
    off() {
        this.ref.off();
    }


    // Initialize shared instance of firebase service
    init = () =>
        firebase.initializeApp({
            apiKey: "AIzaSyBx8JsQOGrET_SPnCXeE6k9rjSzXe7k2H8",
            authDomain: "pdp-chat-68d16.firebaseapp.com",
            databaseURL: "https://pdp-chat-68d16.firebaseio.com",
            projectId: "pdp-chat-68d16",
            storageBucket: "pdp-chat-68d16.appspot.com",
            messagingSenderId: "719187802940"
        });
}
Fire.shared = new Fire();
export default Fire;