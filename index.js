
let myLeads = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )


// Check if local storage has truthy value inside and if so add to myLeads array
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}


inputBtn.addEventListener("click", function(){
    // Push input content to myLeads array
    myLeads.push(inputEl.value)

    // Clear input field after button click
    inputEl.value = ""

    // Saving the new lead in local storage
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )

    // Call render list function
    renderLeads()
})


function renderLeads(){
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        
        // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        // Instead of the above we will use template strings

        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>`
    
        // Another way to add html to parent element
        //create + add text + append to parent (given below)
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li)
    }

    ulEl.innerHTML = listItems
}
