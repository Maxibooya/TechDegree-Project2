/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// global variables

const studentItems = document.querySelectorAll('.student-item');
const pageDiv = document.querySelector(".page");
let selectedPage = 1;




// only show 10 studentItems at a time

function showPage (array, page) {
  for (let i = 0; i < array.length; i+=1) {
    // only show studentItems, that fall in the selected page range
        if ( i < page * 10 && i >= (page - 1) * 10) {
          array[i].style.display = "block";
    } else {
      array[i].style.display = "none";
    }
  }
}
showPage( studentItems, selectedPage );


// create the buttons to change pages

function appendPageLinks (itemList) {
  const requiredPages = Math.ceil(itemList.length / 10);
  const linkDiv = document.createElement("div");
    linkDiv.classList.add("pagination");
    pageDiv.appendChild(linkDiv);
    const ul = document.createElement("ul");
    linkDiv.appendChild(ul);
    for ( let i = 0; i < requiredPages; i+=1) {
        ul.innerHTML += `
          <li>
            <a class="page-links" href="#">${i+1}</a>
          </li>`;
      }
      const links = document.querySelectorAll(".page-links");
        links[0].className += " active";
        // add event listeners + remove class
        for ( let i = 0; i < links.length; i+=1 ) {
          links[i].addEventListener("click", function() {
            for ( let i = 0; i < links.length; i+=1) {
              links[i].classList.remove("active");
            }
            // re-add active class to clicked link
            this.className += " active";

      selectedPage = parseInt(this.textContent);
      showPage( itemList, selectedPage );
    })
  }

}
appendPageLinks(studentItems);
