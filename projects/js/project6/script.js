const createBtn = document.getElementById('create-btn')
const newNoteForm = document.getElementById('new-note-form')
const titleBox = document.getElementById('title-box')
const addBtn = document.getElementById('add-btn')
const noteContent = document.getElementById('note-content')
const noteTextarea = document.getElementById('note-textarea')
const notesList = document.getElementById('notes-list');



createBtn.addEventListener('click', () => {
    newNoteForm.style.display = 'flex'
    notesList.style.display = 'none'
})

addBtn.addEventListener('click',() => {

    if (addBtn.innerHTML == 'Add') {
        createBtn.style.display = 'none'
        noteContent.style.display = 'block'
        addBtn.innerHTML = 'Save'
    }else if(addBtn.innerHTML == 'Save'){
        saveNote();
    }
})



function saveNote(){
    const title = titleBox.value
    const content = noteTextarea.value

    if(title.trim() === '' || content.trim() === ''){
        alert('Both title and content are required')
        return;
    }

    const note = {
        title: title,
        content: content,
        id: new Date().getTime()
    }

    addNoteToList(note);
    resetForm();
}



function resetForm() {
    titleBox.value = ''
    noteTextarea.value = ''
    addBtn.innerHTML = 'Add'

    newNoteForm.style.display = 'none'
    noteContent.style.display = 'none'
    notesList.style.display = 'flex'
    createBtn.style.display = 'initial'
}



function addNoteToList(note) {
    
    const noteDiv = document.createElement('div');
    noteDiv.className = 'note';
    noteDiv.dataset.id = note.id;

    const noteTitle = document.createElement('h3');
    noteTitle.textContent = note.title;

    const noteContent = document.createElement('p');
    noteContent.textContent = note.content;
    noteContent.style.fontSize = '22px'

    const deleteIcon = document.createElement('span')
    deleteIcon.innerHTML = '<i class="ri-delete-bin-fill"></i>'
    deleteIcon.className ='delete-btn'

    deleteIcon.addEventListener('click', function(e){
        e.target.parentElement.parentElement.remove()
    })
    
    const innerNote = document.createElement('div')
    innerNote.className = 'inner-note'

    innerNote.appendChild(noteTitle)
    innerNote.appendChild(noteContent)
    noteDiv.appendChild(innerNote)
    noteDiv.appendChild(deleteIcon)

    notesList.appendChild(noteDiv);

    innerNote.addEventListener('click', loadNoteToUpdate)
    
}


function loadNoteToUpdate(e) {
    const noteDiv = e.target.parentElement
    const noteId = noteDiv.parentElement.dataset.id
    const title = noteDiv.querySelector('h3').innerHTML
    const content = noteDiv.querySelector('p').innerHTML

    console.log(title);
    console.log(content);

    notesList.style.display = 'none'
    createBtn.style.display = 'none'
    newNoteForm.style.display = 'flex'
    noteContent.style.display = 'block'

    addBtn.innerHTML = 'Update'

    titleBox.value = title
    noteTextarea.value = content

    // noteDiv.parentElement.remove()

    addBtn.addEventListener('click',function () {
        if(addBtn.innerHTML == 'Update'){
            updateNote(noteId);
        }
        console.log(noteId);
    })
}



function updateNote(noteId){
    const noteDiv = document.querySelector(`div[data-id="${noteId}"]`)

    console.log(noteId);
    console.log(noteDiv);

    const title = titleBox.value
    const content = noteTextarea.value

    if(title.trim() === '' || content.trim() === ''){
        alert('Both title and content are required')
        return;
    }

    noteDiv.querySelector('h3').innerHTML = `${title}` 
    noteDiv.querySelector('p').innerHTML = `${content}`

    resetForm()
}