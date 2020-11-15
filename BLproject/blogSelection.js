let genres =[
    "Startups",
    "Technology",
    "Economics"
]

let blogs = [
    {
        author: "Paul Graham",
        title: "Sample 1",
        genre: "Startups"
    },
    {
        author: "Paul Graham",
        title: "Sample 2",
        genre: "Startups"
    },
    {
        author: "Paul Graham",
        title: "Sample 3",
        genre: "Startups"
    },
    {
        author: "Marc Andreesan",
        title: "Sample 1",
        genre: "Technology"
    },
    {
        author: "Marc Andreesan",
        title: "Sample 2",
        genre: "Technology"
    },
    {
        author: "Marc Andreesan",
        title: "Sample 3",
        genre: "Technology"
    },
    {
        author: "Adithya",
        title: "Adithya's blog",
        genre: "Economics"
    },
    {
        author: "Isabela",
        title: "Isabela's blog",
        genre: "Economics"
    },
    {
        author: "Omer",
        title: "Omer's blog",
        genre: "Economics"
    }
]

/* Loads available blogs/genres from backend */
function loadBlogs() {
    /*load stuff*/
}

let selected = new Set();

/* Set up table of available blogs*/
function setup() {
    let selectBox = document.getElementById('select-blogs');
    for (let i = 0; i < genres.length; i++) {
        let genre = document.createElement('h2');
        genre.setAttribute('id', genres[i]);
        genre.innerText = genres[i];
        selectBox.appendChild(genre);
        for (let i = 0; i < blogs.length; i++) {
            let item = blogs[i];
            if (item.genre === genre.innerText) {
                let blog = document.createElement('button');
                blog.innerText = item.author + '\n' + item.title;
                if (selected.has(item.author + '\n' + item.title)) {
                    blog.setAttribute('class', 'blogButtonClicked');
                } else {
                    blog.setAttribute('class', 'blogButton');
                }
                blog.setAttribute('onclick', 'blogClicked(this)');
                selectBox.appendChild(blog);
            } 
        }
    }
    
}



function blogClicked(blogButton) {
    if (blogButton.className === 'blogButton') {
        selected.add(blogButton.innerText);
        blogButton.className = 'blogButtonClicked';
    } else if (blogButton.className === 'blogButtonClicked') {
        if (selected.has(blogButton.innerText)) {
            selected.delete(blogButton.innerText);
        }
        blogButton.className = 'blogButton';
    }
}

function nextHandler() {
    if (selected.size == 0) {
        alert("Please select one or more blogs!");
    } else {
        localStorage.setItem('select', JSON.stringify([...selected]));
        window.location = 'frequencySelectionPage.html';
    }
}

function onLoad() {
    loadBlogs();
    let prevSelect = localStorage.getItem('select');
    if (prevSelect != null) {
        prevSelect = new Set(JSON.parse(prevSelect));
        selected = prevSelect;
    }
}    

onLoad();
setup();

const next = document.getElementById('next');
next.addEventListener('click', nextHandler);