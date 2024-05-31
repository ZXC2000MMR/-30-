function filterList(){
    let item1 = document.getElementById("itemList")
    let input = document.getElementById("filterInput").value
    let items = document.querySelectorAll("#itemList li")
    items.forEach(item => {
        if(item.innerHTML.includes(input)){

        }else{
            item.style.display = 'none'
        }
        
    });

}