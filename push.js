var push = require('web-push');

let vapidkeys ={ 
  publicKey:'BBLobX9v6aKRyC74L2cuWsMTleB9zrfLmoXkYALZR2BS-X0D_eDUYGKC3hBw-UAfKLO5ilEu-ud7abKYZiSO-cs',
  privateKey: 'o46hURLMvHbHZcLIMM6D2LQCudvDSB0w6YrYDD_qNO4' 
}

push.setVapidDetails('mailto:fred@kibzagency.com', vapidkeys.publicKey, vapidkeys.privateKey)
let sub ={
  "endpoint":"https://fcm.googleapis.com/fcm/send/dwOqTEzeZmU:APA91bH6xOdBw_DdxfyXiAY4577wVN33xP3BWwDa4KakN_rIFOXxcb2k8Xh0XqkVlY4bNjk0bLmH4QtSq1cWXjCP-dhWQJiC0Mr_Lf-N2NJGasyEVCqIM_RplxABrKmqb_TVHBB-fvtp","expirationTime":null,"keys":{"p256dh":"BNZ7_z7TM3BI0G0bupefgjZbxpEqSDBteHHwPJGkJQssyIbBlBtjQmbk-Fb-zNpGocW-FzvrQzXh-19kAg2cI-c",
  "auth":"ltJftFkLx9-qX5dU2WK78w"}

};
push.sendNotification(sub, 'test message')



console.log(vapidkeys);