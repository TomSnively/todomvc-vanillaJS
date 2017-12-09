function writeStorage(data){
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("todomvc-vanillaJS", JSON.stringify(data));
    } else {
        console.log('no storage available');
    }
}


function renderToDoList() {
    let data = JSON.parse(localStorage.getItem("todomvc-vanillaJS"));

    let element = document.getElementById("todolist");
    let todoHTML = "";

    // create the header
    todoHTML += '<div id="header">';
    todoHTML += '<input type="text" id="newToDo" placeholder="Enter a task" />';
    todoHTML += '</div>';

    // create the rest of the rows
    for (let i = 0; i < data.length; i++) {
        let task = data[i].todo;
        let complete = data[i].complete;
        //console.log(task, complete);
        todoHTML += '<div class="row" ondblclick="editEntry(' + i + ')">' + task + '</div>';
    }

    element.innerHTML = todoHTML;
}

function editEntry(index){
    console.log('editEntry: index=' + index);

}

let sampleData = [];
writeStorage(sampleData);

/*
let sampleData =
    [
        {
            "todo":"task 1",
            "complete":"false"
        },
        {
            "todo":"task 2",
            "complete":"true"
        },
        {
            "todo":"task 3",
            "complete":"false"
        }
    ];
writeStorage(sampleData);
*/

//let dataRead = JSON.parse(localStorage.getItem("todomvc-vanillaJS"));
//console.log(dataRead);
//console.log(dataRead == sampleData);


renderToDoList();

document.getElementById('header').onkeypress = function(e) {
    var event = e || window.event;
    var charCode = event.which || event.keyCode;

    if ( charCode == '13' ) {
        // Enter pressed
        console.log('user pressed Enter');
        let newToDo = document.getElementById('newToDo').value;
        console.log(newToDo);
        if (newToDo != "") {
            let data = [];
            data = JSON.parse(localStorage.getItem("todomvc-vanillaJS"));
            // add new to do to the end of the list
            let newToDoObject =
                {
                    "todo": newToDo,
                    "complete":"false"
                };
            data[data.length] = newToDoObject;
            writeStorage(data);
        }

        renderToDoList();
        return false;
    }
};
