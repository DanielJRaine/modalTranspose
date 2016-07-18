// Initialize the Noteflight client API.
NFClient.init(function(info) {
  alert("Noteflight API is ready, version " + info.version);
});

// var element = document.createElement("what you want to create");

// dynamically embed a score:

//event handler
function handleEditorReady(event) {
  console.log("---- event received ----")
  for (var prop in event) {
  console.log(prop + ":", event[prop]);
};

// replaces "score1" DOM element with a Noteflight embedded document

var options = {
  host: 'www.noteflight.com',
  width: 800,
  height: 400,
  viewParams: {
    scale: 1.5,
    role: 'template',
    app: 'html5'
  }
}

var scoreView = new NFClient.ScoreView('score1', 'fcfd6d0bc0770f67cdbe1b8129456521fec090a0', options);
scoreView.scoreDataLoaded();
scoreView.addEventListener('editorReady', handleEditorReady);   // wait for ready event

var score1 = new NFClient.ScoreView('score1', 'fcfd6d0bc0770f67cdbe1b8129456521fec090a0');
score1.getScore().done(function(scoreData)) {
  console.log(scoreData);
}
