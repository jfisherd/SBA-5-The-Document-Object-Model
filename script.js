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
    console.log('postContainer'+JSON.stringify(postContainer))
    postTitle = document.createElement("h3")
    postTitle.textContent = title.value
    console.log('postTitle'+JSON.stringify(postTitle))
    postContent = document.createElement("div")
    postContent.textContent = content.value
    console.log('postContent'+JSON.stringify(postContent))
    postDelete = document.createElement("button")
    postDelete.textContent = 'Delete'
    postContainer.append(postTitle, postContent, postDelete)
    console.log('postContainer'+JSON.stringify(postContainer))
    myPosts[myPosts.length] = postContainer
    console.log('myPosts'+JSON.stringify(myPosts))
    blogs.append(postContainer)
    console.log('blogs'+JSON.stringify(blogs))
    // title.value = ''
    // content.value = ''
    localStorage.setItem('myPosts', JSON.stringify(myPosts))
})



