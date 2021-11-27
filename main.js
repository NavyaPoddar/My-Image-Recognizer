Webcam.set({
    width : 350,
    height : 290,
    image_format : "png",
    png_quality : 100
});

cameradiv = document.getElementById("camera");

Webcam.attach("#camera");

function clickimage(){
    Webcam.snap(function(imageuri){
        document.getElementById("clicked_image").innerHTML = '<img id="selfie" src = "' + imageuri +'">';
    });
}

console.log(ml5.version);

myimagemodel = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/dgvQAgGUs/model.json" , modelloaded);

function modelloaded(){
    console.log("My image model has loaded !")
}


function identifyimage(){

    img = document.getElementById("selfie");
    myimagemodel.classify(img , getresults )
};

function getresults(error , results){

    if(error){
        console.error(error)
        }

        else {
            console.log(results);
            document.getElementById("object_name").innerHTML = results[0].label;
            document.getElementById("object_accuracy").innerHTML = results[0].confidence * 100 + "%";
        }
}
