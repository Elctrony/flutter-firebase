const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();



exports.pushNotification = functions.firestore.document('Orders/{OrdersId}').onCreate(async (snapshot)=>{
    const payload ={
        notification: {
            title: 'New Order',
            body: 'You have a new Order',
        }
    }
    
    console.log('Notification has been pushed!!');
    await admin.messaging().sendToTopic('admin',payload);
    
});
