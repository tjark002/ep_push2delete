var modals = require("ep_etherpad-lite/static/js/pad_modals.js").padmodals

function sendDeletionRequest(){
  var myAuthorId = pad.getUserId();
  var padId = pad.getPadId();
  // Send chat message to send to the server
  var message = {
    type : 'ep_push2delete',
    action : 'deletePad',
    padId : padId
  }
  pad.collabClient.sendMessage(message);
  modals.showModal('deleted')
}

exports.documentReady = function(hook_name, args, cb) {
  $('#deletePadButton').click(function() {
    if(confirm('Delete this pad? (There\'s no going back!)')) sendDeletionRequest()
  })
  cb()
}