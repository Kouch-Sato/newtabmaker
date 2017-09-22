(function() {
    var  nameForm = document.getElementById('name');
    var  btn = document.getElementById('btn');
    var  result = document.getElementById('result');

    btn.addEventListener('click', function(){
        var name = nameForm.value;
        localStorage['name'] = name;
        result.innerHTML = "Your name is " + name;    
    })

    var name = localStorage['name'];
    document.getElementById('question').innerHTML = "Do you want to change your name, " + name + "?";

})();

