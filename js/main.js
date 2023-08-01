//The Fisrt way

// var inputId = document.getElementById("todoInput");
// var listContainer = document.getElementById("list");
// var addBtn = document.getElementById("addBtn");
// var allLists = [];
// if  (localStorage.getItem("allList") != null) {
//     allLists= JSON.parse(localStorage.getItem("allList"));
//     display()
// }

// function getElemnt() {
//     var inputValue = inputId.value;
    
//     oneList = {
//         name: inputValue
//     }

//     allLists.push(oneList)

//     localStorage.setItem("allList", JSON.stringify(allLists))


//     display()

//     clear()

    
// }

// function display() {
//     var Container = ``
//     for (var i = 0; i < allLists.length; i++){
//         Container += `
        
//         `+allLists[i].name+ `<br>`+
//         `
//         `
//     }
//     listContainer.innerHTML = Container;
// }

// function clear() {
//     inputId.value = ""
// }



// The Secound way to crate a to do list app


// addBtn.addEventListener("click", function () {
//     var parag = document.createElement('p');
//     parag.classList.add("paragraph-styling");
//     parag.innerText = inputId.value;
//     listContainer.appendChild(parag);
//     inputId.value = "";
//     parag.addEventListener("click", function () {
//         parag.style.textDecoration = "line-through";
//     })
//     parag.addEventListener("dblclick", function () {
//         listContainer.removeChild(parag);
//     })
    
// })



// The Third way


var inputBox = document.querySelector(".header input");
var addBtn = document.querySelector("#addBtn");
var todoList = document.querySelector(".todoList");
var deletAllBtn = document.querySelector("span .clear-all")

inputBox.addEventListener('keyup', function () {
    var userData = inputBox.value;
    if (userData.trim() != 0) {
        addBtn.classList.add("active")
    } else {
        addBtn.classList.remove("active")
    }
})
showData()

addBtn.addEventListener('click', function () {
    userData =  inputBox.value;
    var getLocalStorage = localStorage.getItem("new Todo")
    if (getLocalStorage == null) {
        listArr = []
    } else {
        listArr = JSON.parse(getLocalStorage)
    }

    listArr.push(userData);
 
    localStorage.setItem("new Todo", JSON.stringify(listArr));
    inputBox.value = ""
    showData()
    addBtn.classList.remove("active")
})


function showData() {
    var getLocalStorage = localStorage.getItem("new Todo")
    if (getLocalStorage == null) {
        listArr = [];
    } else {
        listArr = JSON.parse(getLocalStorage);
    }

    var pendingNum = document.querySelector(".pendingNum");
    pendingNum.textContent = listArr.length;
    if (listArr.length > 0) {
        deletAllBtn.classList.add("active")
    } else {
        deletAllBtn.classList.remove("active")
    }
    
    var newListI = ``;

    listArr.forEach((element ,index) => {
        newListI +=`<li>${element} <span onclick="deletTask(${index})"><i class="fas fa-trash"></i></span></li>
        `
    });
    todoList.innerHTML = newListI;
}

function deletTask(index) {
    var getLocalStorage = localStorage.getItem("new Todo")
    listArr = JSON.parse(getLocalStorage)
    listArr.splice(index,1)
    localStorage.setItem("new Todo", JSON.stringify(listArr));
    showData()
}

deletAllBtn.addEventListener("click", function () {
    listArr = [];

        localStorage.setItem("new Todo", JSON.stringify(listArr));
    showData()
})