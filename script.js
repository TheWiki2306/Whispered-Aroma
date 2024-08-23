const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})



const hiddenElement =  document.querySelectorAll('.hidden');
hiddenElement.forEach((el) => observer.observe(el));

const shownElement =  document.querySelectorAll('.hidden-2');
shownElement.forEach((el) => observer.observe(el));


function showSideBar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
}


function hideSideBar(){
    const hide = document.querySelector(".sidebar");
    hide.style.display = "none";
}