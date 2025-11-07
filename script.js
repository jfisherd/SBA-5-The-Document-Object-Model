myPosts = [] // CAREFUL WHEN REOPENING PAGE
idCounter = 0 // CAREFUL WHEN REOPENING PAGE

title = document.getElementById("title")
titleError = document.getElementById("titleError")
content = document.getElementById("content")
contentError = document.getElementById("contentError")
submit = document.getElementById("submit")
blogs = document.getElementById("blogs")

function checkValidity() { // EDGE CASE, ONE IS LEFT BLANK THEN THE OTHER IS LEFT BLANK, BE SURE TO DELETE OLD ERROR MESSAGE
    postValid = true
    if (title.value == '') {
        titleError.textContent = 'Title cannot be blank'
        postValid = false
    }
    if (content.value == '') {
        contentError.textContent = 'Content cannot be blank'
        postValid = false
    }
    return postValid

}

submit.addEventListener('click', (event) => {
    event.preventDefault() // no warning from 'required', however page does not refresh

    if (checkValidity()) { //

        postId = idCounter++

        postTitle = document.createElement("h3")
        postTitle.textContent = title.value
        console.log('postTitle' + JSON.stringify(postTitle))

        postContent = document.createElement("div")
        postContent.textContent = content.value
        console.log('postContent' + JSON.stringify(postContent))

        postDelete = document.createElement("button")
        postDelete.textContent = 'Delete'
        postDelete.addEventListener('click', (event) => {
            event.target.closest("li").remove()
            myPosts.splice(myPosts[postId], 1) // FIX postId
        })

        postContainer = document.createElement("li")
        postContainer.append(postTitle, postContent, postDelete)
        console.log('postContainer' + JSON.stringify(postContainer))

        myPosts[myPosts.length] = postContainer
        console.log('myPosts' + JSON.stringify(myPosts))

        blogs.append(postContainer)
        console.log('blogs' + JSON.stringify(blogs))
        console.log('blogs' + typeof (JSON.stringify(blogs)))

        title.value = ''
        content.value = ''


        titleError.textContent = ''
        contentError.textContent = ''


        localStorage.setItem('myPosts', JSON.stringify(myPosts))
    }
})



