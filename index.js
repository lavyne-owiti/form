var doc=document.getElementsByClassName("container");
var form=document.createElement("form");
form.setAttribute("action","");
form.setAttribute("method","post");
doc.appendChild(form);


var classLabel=document.createElement('label')
classLabel.innerHTML="Class :"
form.appendChild(classLabel)

var classinput = document.createElement('input');
classinput.setAttribute("type", "text");
classinput.setAttribute("class", "aclass");
form.appendChild(classinput);

var linebreak = document.createElement('br');
form.appendChild(linebreak);

var subjectlabel=document.createElement('label')
subjectlabel.innerHTML="Subject :"
form.appendChild(subjectlabel)

var subjectinput = document.createElement('input');
subjectinput.setAttribute("type", "text");
subjectinput.setAttribute("subject", "asubject");
form.appendChild(subjectinput);

var linebreak = document.createElement('br');
form.appendChild(linebreak);

var datelabel=document.createElement('label')
datelabel.innerHTML="Date :"
form.appendChild(datelabel)

var dateinput = document.createElement('input');
dateinput.setAttribute("type", "date");
dateinput.setAttribute("value", "10/08/2022");
form.appendChild(dateinput);

var submitelement = document.createElement('input'); 
submitelement.setAttribute("type", "submit");
submitelement.setAttribute("name", "dsubmit");
submitelement.setAttribute("value", "Submit");
form.appendChild(submitelement);


var x = document.getElementsByName("form").elements.length;

var form = document.querySelector("form");
var submiting = function (mine) {
mine.preventDefault()
form.setAttribute('submitted-data', true)
console.log(form.getAttribute('submitted-data'))
handlemycalls()
}
var handlemycalls = function () {
console.log('You have submited successfully')
}
form.addEventListener('submit', handleSubmit, false)

