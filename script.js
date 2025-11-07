myPosts = []

title = document.getElementById("title")
titleError = document.getElementById("titleError")
content = document.getElementById("content")
contentError = document.getElementById("contentError")
submit = document.getElementById("submit")
blogs = document.getElementById("blogs")


submit.addEventListener('click', (event) => {
    event.preventDefault()
    postContainer = document.createElement("li")
    postTitle = document.createElement("h3")
    postTitle.textContent = title.value
    postContent = document.createElement("div")
    postContent.textContent = content.value
    postContainer.append(postTitle, postContent)
    myPosts[myPosts.length] = postContainer
    blogs.append(postContainer)
    title.value = ''
    content.value = ''

    localStorage.setItem('myPosts', JSON.stringify(myPosts))
})



