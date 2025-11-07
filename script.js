myPosts = [] 

title = document.getElementById("title")
titleError = document.getElementById("titleError")
content = document.getElementById("content")
contentError = document.getElementById("contentError")
submit = document.getElementById("submit")
blogs = document.getElementById("blogs")



submit.addEventListener('click', (event) => {
    event.preventDefault()
    newPostContainer = document.createElement("li")
    newPostTitle = document.createElement("h3")
    newPostTitle.textContent = title.value
    newPostContent = document.createElement("div")
    newPostContent.textContent = content.value
    newPostContainer.append(newPostTitle, newPostContent)
    blogs.append(newPostContainer)
    title.value = ''
    content.value = ''
    myPosts[myPosts.length] = newPostContainer
    localStorage.setItem('myPosts',JSON.stringify(myPosts))
})






