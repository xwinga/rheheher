https://teachablemachine.withgoogle.com/models/pY2qfZwzW/
Webcam.set({
width:350,
height:300,
image_format : 'png',
png_quality:90
});

camera = document.getElementById("camera")
Webcam.attach( '#camera' )

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/pY2qfZwzW/model.json', modelLoaded)
function speak()
{
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is "+ p1;
    speak_data_2 = "and the second prediction is "+p2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}

function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}
function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("result_name").innerHTML = results[0].label;
        document.getElementById("result_name2").innerHTML = results[1].label;
        p1 = results[0].label;
        p2 = results[1].label;
        speak();
        if(p1 == "thumbs up")
        {
            document.getElementById("update_emoji").innerHTML= "&#128077;";
        }
        if(p1 == "thumbs down")
        {
            document.getElementById("update_emoji").innerHTML= "&#128078;";
        }
        if(p1 == "palm")
        {
            document.getElementById("update_emoji").innerHTML= "&#128400;";
        }
        if(p2 == "thumbs up")
        {
            document.getElementById("update_emoji").innerHTML= "&#128077;";
        }
        if(p2 == "thumbs down")
        {
            document.getElementById("update_emoji").innerHTML= "&#128078;";
        }
        if(p2 == "palm")
        {
            document.getElementById("update_emoji").innerHTML= "&#128400;";
        }
        
    }
}
function modelLoaded() {
    console.log("model is loaded");
}