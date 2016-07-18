// Initialize the Noteflight client API.
NFClient.init(function(info) {
  alert("Noteflight API is ready, version " + info.version);
});

// dynamically embed a score:
//event handler
function handleEditorReady(event) {
  console.log("---- event received ----")
  for (var prop in event) {
    console.log(prop + ":", event[prop]);
  }
};

// replaces "score1" DOM element with a Noteflight embedded document
function selectFirstTwo(event) {
  scoreView.selectMeasures(0,2);
};

var options = {
  width: 800,
  height: 400,
  viewParams: {
    scale: 1.5,
    role: 'template',
    app: 'html5'
  }
};

var scoreView = new NFClient.ScoreView(score1, '0afa81734dcfcf992d7e3dad085a187e93c5ae88', options);
scoreView.addEventListener('editorReady', handleEditorReady);   // wait for ready event

scoreView.addEventListener('scoreDataLoaded', selectFirstTwo);
//scoreView.transpose({semitones: 5}); // transpose up two semitones
