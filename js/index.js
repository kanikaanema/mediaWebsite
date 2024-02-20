const homePage = document.querySelector(".home_page")
const aboutPage = document.querySelector(".about_page")
const coursesPage = document.querySelector(".courses_page")
const blogPage = document.querySelector(".blog_page")
const galleryPage = document.querySelector(".gallery_page")
const contactsPage = document.querySelector(".contacts_page")
const admissionli = document.querySelector(".admission")

let check = 0;
None()
document.querySelector(".admission_link").addEventListener("click",function(){
    if(check == 0){
        admissionli.style.display = "block"
        check = 1
    }else{
        admissionli.style.display = "none"
        check = 0
    }
})
function None(){
    admissionli.style.display = "none"
}





document.querySelector(".home_link").addEventListener("click", ()=>{
    homePage.scrollIntoView({behavior:"smooth"})
})

document.querySelector(".about_link").addEventListener("click", ()=>{
    aboutPage.scrollIntoView({behavior:"smooth"})
})

document.querySelector(".courses_link").addEventListener("click", ()=>{
    coursesPage.scrollIntoView({behavior:"smooth"})
})
document.querySelector(".blog_link").addEventListener("click", ()=>{
    blogPage.scrollIntoView({behavior:"smooth"})
})

document.querySelector(".gallery_link").addEventListener("click", ()=>{
    galleryPage.scrollIntoView({behavior:"smooth"})
})

document.querySelector(".contacts_link").addEventListener("click", ()=>{
    contactsPage.scrollIntoView({behavior:"smooth"})
})