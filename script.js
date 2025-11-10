myPosts = {} // CAREFUL WHEN REOPENING PAGE
idCounter = 0 // CAREFUL WHEN REOPENING PAGE

title = document.getElementById("title")
titleError = document.getElementById("titleError")
content = document.getElementById("content")
contentError = document.getElementById("contentError")
submit = document.getElementById("submit")
blogs = document.getElementById("blogs")

function checkValidity() {

    titleError.textContent = ''
    contentError.textContent = ''
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

// Check for validity when 
title.addEventListener('blur', () => {  
    checkValidity()
})

title.addEventListener('input', () => {
    checkValidity()
})

content.addEventListener('blur', () => {
    checkValidity()
})

content.addEventListener('input', () => {
    checkValidity()
})

submit.addEventListener('click', (event) => {
    event.preventDefault() // no warning from 'required', however page does not refresh

    if (checkValidity()) { //

        postId = idCounter++ // CAREFUL WHEN REOPENING

        postTitle = document.createElement("h3")
        postTitle.textContent = title.value

        postContent = document.createElement("div")
        postContent.textContent = content.value

        postDelete = document.createElement("button")
        postDelete.textContent = 'Delete'
        postDelete.addEventListener('click', (event) => {
            event.target.closest("li").remove()
            myPosts.splice(myPosts[postId], 1) // FIX postId, CAREFUL WHEN REOPENING
        })

        postContainer = document.createElement("li")
        postContainer.append(postTitle, postContent, postDelete)

        myPosts[myPosts.length] = postContainer

        blogs.append(postContainer)

        title.value = ''
        content.value = ''

        titleError.textContent = ''
        contentError.textContent = ''

        localStorage.setItem('myPosts', JSON.stringify(myPosts))
    }
})



