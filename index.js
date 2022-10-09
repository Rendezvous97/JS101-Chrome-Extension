
let myLeads = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )


// Check if local storage has truthy value inside and if so add to myLeads array
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}


const tab = [
    {url: "https://www.linkedin.com/in/swagam-dasgupta-18a36a10b/"}
]

tabBtn.addEventListener("click", function(){
    console.log(tab[0].url)
})


// Render all leads as unordered list
function render(leads){
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        
        // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        // Instead of the above we will use template strings

        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
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


// Delet all—listen for double click then clear local storage, myLeads array and DOM
deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})


inputBtn.addEventListener("click", function(){
    // Push input content to myLeads array
    myLeads.push(inputEl.value)

    // Clear input field after button click
    inputEl.value = ""

    // Saving the new lead in local storage
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )

    // Call render list function
    render(myLeads)
})

