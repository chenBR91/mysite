var person = {
    name: {
        first: 'chen',
        last: 'brown'
    },
    greeting: 'greet'
};

var documentTitle = document.title;
var doucDir = document.dir;
var locationObj = document.location

// var creenWith;
// creenWith = window.innerWidth;
// console.log(creenWith);


// createNewTest = document.querySelector(".test");
// console.log(createNewTest);
// createNewTest.innerHTML = "new";
// createNewTest.style.backgroundColor = 'aquamarine';
// createNewTest.style.width = '300px';
// createNewTest.style.height = '300px';
// createNewTest.style.border = '5px solid red';
// createNewTest.style.borderRadius = '100%';


var ul = document.querySelector('ul');
for(var index = 0; index < 10; index++) {
    var li = document.createElement('li');
    li.className = 'item';
    li.textContent = 'list item ' + index;
    ul.appendChild(li);
}


