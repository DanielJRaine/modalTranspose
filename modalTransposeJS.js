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
// Create an event handler that selects the first two measures of a score


var options = {
  protocol: 'http',
  host: 'www.noteflight.com',
  width: 800,
  height: 400,
  viewParams: {
    scale: 1.5,
    role: 'template',
    app: 'html5'
  }
};

var score1 = new NFClient.ScoreView(document.querySelector("#score1"), '0afa81734dcfcf992d7e3dad085a187e93c5ae88');
// var scoreView = new NFClient.ScoreView(score1, '0afa81734dcfcf992d7e3dad085a187e93c5ae88', options);

function selectOnLoad(evt) {
  score1.selectMeasures(0, 2);
};

//scoreView.addEventListener('editorReady', handleEditorReady);   // wait for ready event
//scoreView.transpose({semitones: 5}); // transpose up two semitones
// After the score loads up, select its first two measures.
score1.addEventListener('scoreDataLoaded', selectOnLoad);
