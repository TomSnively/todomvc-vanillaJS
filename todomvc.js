function renderToDoList(data) {
    let element = document.getElementById("todolist");
    let todoHTML = "";

    // create the header
    todoHTML += '<div id="header">';
    todoHTML += '<input type="text" placeholder="Enter a task" />';
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

renderToDoList(sampleData);

document.getElementById('header').onkeypress = function(e) {
    var event = e || window.event;
    var charCode = event.which || event.keyCode;

    if ( charCode == '13' ) {
        // Enter pressed
        console.log('user pressed Enter');


        renderToDoList(sampleData);
        return false;
    }
};
