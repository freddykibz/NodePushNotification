var push = require('web-push');

let vapidkeys ={ 
  publicKey:'BBLobX9v6aKRyC74L2cuWsMTleB9zrfLmoXkYALZR2BS-X0D_eDUYGKC3hBw-UAfKLO5ilEu-ud7abKYZiSO-cs',
  privateKey: 'o46hURLMvHbHZcLIMM6D2LQCudvDSB0w6YrYDD_qNO4' 
}

push.setVapidDetails('mailto:fred@kibzagency.com', vapidkeys.publicKey, vapidkeys.privateKey)
let sub ={};
push.sendNotification(sub, 'test message')



console.log(vapidkeys);