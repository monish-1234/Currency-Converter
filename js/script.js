var counter = 2;
var gpa;
var cgpa;
var dumb = 1;

$(document).ready(function(){

 $("#addButton").click(function () {

        if(counter>15){
                alert("Only 15 textboxes allow");
                return false;
        }

        var newTextBoxDiv = $(document.createElement('div'))
        .attr("id", 'TextBoxDiv' + counter);

        newTextBoxDiv.after().html('<br><div id="TextBoxDiv'+counter+'">'+
                                ' <div class="uk-form-controls">'+
                        '<label class="uk-form-label">Sub #'+counter+' : </label><select class="uk-select iphonebug iphonesize" required id="grade'+counter+'">'+
                        '<option value="" selected hidden disabled >Select Grade</option>'+
                        '<option value="10">O</option>'+
                        '<option value="9">A+</option>'+
                        '<option value="8">A</option>'+
                        '<option value="7">B+</option>'+
                        '<option value="6">B</option>'+
                        '<option value="5">C</option>'+
                        '<option value="4">P</option>'+                
                        '</select>'+ 
                        '&nbsp; &nbsp; &nbsp;'+
                        '<select class="uk-select iphonebug iphonesize" required id="credit'+counter+'">'+
                        '<option value="" selected hidden disabled>Select Credit</option>'+
                        '<option value="1">1</option>'+
                        '<option value="2">2</option>'+
                        '<option value="3">3</option>'+
                        '<option value="4">4</option>'+
                        '<option value="5">5</option>'+
                        '<option value="6">6</option>'+
                        '<option value="7">7</option>'+                 
                        '</select>'+ 
                '</div>'+
                '</div>');

newTextBoxDiv.appendTo("#TextBoxesGroup");


counter++;
 });

 $("#removeButton").click(function () {
if(counter==2){
        var sound=[];
        for (var a=1;a<=7;a++){
                sound[a]=new Audio("./Rick/"+a+".mp3");
        }
        sound[dumb].play();
        dumb++;
        if (dumb==7){
                dumb=1;
        }
      alert("You cannot remove all the subjects");
      return false;
   }

counter--;

    $("#TextBoxDiv" + counter).remove();

 });

});

function calculate()
 {
    var g1 = 0;
    var c1 = 0;
    var i;

    
   for (i = 1; i<counter; i++ )
   {
     g1+=parseInt(document.getElementById("grade"+i).value*document.getElementById("credit"+i).value);
     c1+=parseInt(document.getElementById("credit"+i).value);
    }
    cg=(parseFloat(document.getElementById('cgpa').value));
    gpa = (g1 / c1).toFixed(3);
   
   if (gpa=="NaN"){
        document.getElementById("output").value="Your GPA is.... ";
   }
   else{
   document.getElementById("output").value="Your GPA is "+gpa;
  
   if(cg>0){
          cgpa = ((parseFloat(gpa)+parseFloat(cg))/2).toFixed(3);
            
        document.getElementById("output").value="Your CGPA is "+cgpa;
        }
    console.log("GPA - "+gpa);
    console.log("CGPA - "+cgpa);
    return false
   }

 };
