var bookmarkName = document.querySelector("#bookmarkName")
var bookmarkURL = document.querySelector("#bookmarkURL")
var submitBtn = document.querySelector("#submitBtn")
var tableContent = document.querySelector("#tableContent")
var Messages = document.querySelector("#Messages")
var closeBtn = document.getElementById("closeBtn");


var bookmarksArray =[]

if (localStorage.getItem("DataList") !=null){
  bookmarksArray = JSON.parse(localStorage.getItem("DataList"))

  display ()
}




function submit (){

if( validName() == true &&  validurl() == true){
  bookmarkObj = {
    name:bookmarkName.value,
    url:bookmarkURL.value,
  }

  bookmarksArray.push(bookmarkObj)

localStorage.setItem("DataList",JSON.stringify(bookmarksArray))

  display ()
}

}


submitBtn.addEventListener("click",submit)


function display (){


  temp = ""

for ( var i =0 ;  i < bookmarksArray.length ; i++){

  
temp +=`<tr>
<td>${i+1}</td>
<td>${bookmarksArray[i].name}</td>
<td>
<a href="${bookmarksArray[i].url}"><button class="btn btn-visit" data-index="0">
<i class="fa-solid fa-eye pe-2"></i>Visit
</button></a>

</td>
<td>
  <button onclick="deleteItem(`+i+`)" class="btn btn-delete pe-2" data-index="0">
    <i class="fa-solid fa-trash-can"></i>
    Delete
  </button>
</td>
</tr>`

document.getElementById("tableContent").innerHTML =temp
}


}


function deleteItem(index){

  bookmarksArray.splice(index,1)
  localStorage.setItem("DataList",JSON.stringify(bookmarksArray))

  display ()
}


bookmarkName.addEventListener("blur", validName)

bookmarkURL.addEventListener("blur", validurl)



function validName(){
  var regexbookmarkName = /^[A-Z][a-z]{3,10}[0-9]*$/

  if( regexbookmarkName.test(bookmarkName.value) == true){
    bookmarkName.classList.add("is-valid")
    bookmarkName.classList.remove("is-invalid")
    document.querySelector("#Messages").classList.replace("d-block","d-none")
    return true
  }else{
    bookmarkName.classList.add("is-invalid")
    bookmarkName.classList.remove("is-valid")
    document.querySelector("#Messages").classList.replace("d-none","d-block")
    return false

  }
}



function validurl(){
  var regexbookmarkURL = /^(https:\/\/)?(www\.)?[A-za-z0-9_\.]{1,}\.[a-z]{3}[/]?$/

  if( regexbookmarkURL.test(bookmarkURL.value) == true){
    bookmarkURL.classList.add("is-valid")
    bookmarkURL.classList.remove("is-invalid")
    document.querySelector("#Messages").classList.replace("d-block","d-none")
    return true
  }else{
    bookmarkURL.classList.add("is-invalid")
    bookmarkURL.classList.remove("is-valid")
    document.querySelector("#Messages").classList.replace("d-none","d-block")
    return false
  }
  

}


















function closeModal() {
  Messages.classList.add("d-none");
}


closeBtn.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key == "Escape") {
    closeModal();
  }
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("box-info")) {
    closeModal();
  }
});




