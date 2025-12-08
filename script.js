
const notesForm = document.getElementById('note-form');
notesForm.addEventListener('submit', handleFormSubmit);
let notes = JSON.parse(localStorage.getItem('notes')) || [];
 const photoURL = ['images/photo 1.jpg', 'images/photo2.jpg', 'images/photo3.jpg', 'images/3.jpg'];
 let currIndex = 0;

 // pic for card, function createPic()
//checking WEB SPEACH APi:

// === SpeechRecognition setup ===
document.addEventListener('DOMContentLoaded', () => {
  // === safety: check SpeechRecognition availability ===
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    console.warn('SpeechRecognition API not available in this browser.');
    return;
  }
//   //language change:
//  inputLanguage = document.querySelector("#language");
//  function populateLanguages() {
//   languages.forEach((lang) => {
//     const option = document.createElement("option");
//     option.value = lang.code;
//     option.innerHTML = lang.name;
//     inputLanguage.appendChild(option);
//   });
// }

// populateLanguages();
// // take it from local storage:
// const savedLang = localStorage.getItem('lang') || 'en-US';
// inputLanguage.value = savedLang;

//   // create one recognition instance
//   const recognition = new SpeechRecognition();
//   recognition.lang = inputLanguage.value;
//   recognition.continuous = false;
//   recognition.interimResults = false;

//   //lisening chenge the language by user:
//   inputLanguage.addEventListener('change', ()=>{
//     recognition.lang = inputLanguage.value;
//     localStorage.setItem('lang', inputLanguage.value);
//     console.log('languege switched to:', recognition.lang);
//   })

  // === grab elements by IDs exactly as in your HTML ===
  const titleInput = document.getElementById('title');
  const descriptionInput = document.getElementById('description');
  const categorySelect = document.getElementById('category');

  const micTitle = document.getElementById('micTitle');
  const micDescription = document.getElementById('micDiscription');
  const micCategory = document.getElementById('micCategory');

  const recordStatus = document.getElementById('recordStatus');
  const recordStatusDiscr = document.getElementById('recordStatusDiscr');
  const recordStatusCategory = document.getElementById('recordStatusCategory');

  // If any element missing, log and stop attaching listeners for that element
  if (!micTitle && !micDescription && !micCategory) {
    console.error('No microphone buttons found (micTitle / micDiscription / micCategory).');
    return;
  }

  // === state flags ===
  let isRecording = false;   // means user pressed a mic button to start recording
  let isRecognizing = false; // means recognition is currently active
  let activeField = null;    // DOM element (input/textarea/select) that receives result

  window.addEventListener('load', ()=>{
    let isRecording = false;  
  let isRecognizing = false; 
  let activeField = null;   
  const statusE1s = [recordStatus, recordStatusDiscr, recordStatusCategory];
  statusE1s.forEach(el => {
    if(el)el.textContent = '';
  })
  })

  // helper to set UI when start/stop
  function setButtonState(button, statusEl, started) {
    if (!button) return;
    const lang = (localStorage.getItem('lang')?.split('-')[0]) || 'en';
    const i18n = translations[lang];
    let startKey, stopKey, statusKey;
    switch(button.id){
      case 'micTitle':
        startKey = 'recordBtnTitle';
        stopKey = 'recordBtnTitleStop';
        statusKey = 'recordingStatus';
        break;
      case 'micDiscription':
         startKey = 'recordBtnDescription';
         stopKey = 'recordBtnDescriptionStop';
         statusKey = 'recordingStatusDescription'
        break;
      case 'micCategory':
        startKey = 'recordBtnCategory';
        stopKey = 'recordBtnCategoryStop';
        statusKey = 'recordingStatusCategory'
        break;
    }
    button.textContent = started ? i18n[stopKey] : i18n[startKey];
    if (statusEl){

    statusEl.textContent = started ? i18n[statusKey]: '';
    }
  }

  // toggle recording for a field
  function toggleRecording(button, statusEl, field, opts = {}) {
    if (!recognition) return;

    // start only if not already running
    if (!isRecording && !isRecognizing) {
      activeField = field;
      recognition.continuous = !!opts.continuous;
      recognition.interimResults = !!opts.interimResults;

      try {
        recognition.start();
        isRecording = true;
        isRecognizing = true;
        setButtonState(button, statusEl, true);
        console.log('Recognition started for', field && field.id);
      } catch (err) {
        console.warn('recognition.start error:', err);
      }
    } else if (isRecording) {
      // stop if currently recording
      try {
        recognition.stop();
      } catch (err) {
        console.warn('recognition.stop error:', err);
      }
      isRecording = false;
      setButtonState(button, statusEl, false)
      // UI will be reset in onend
    }
  }

  // attach button handlers (only if element exists)
  if (micTitle) {
    micTitle.addEventListener('click', () => toggleRecording(micTitle, recordStatus, titleInput, { continuous: true }));
  }
  if (micDescription) {
    micDescription.addEventListener('click', () => toggleRecording(micDescription, recordStatusDiscr, descriptionInput, { continuous: true }));
  }
  if (micCategory) {
    micCategory.addEventListener('click', () => toggleRecording(micCategory, recordStatusCategory, categorySelect, { continuous: false }));
  }

  // === recognition handlers (single shared set) ===
  recognition.onresult = (event) => {
    // build full transcript (safer than only first chunk)
    const transcriptRaw = Array.from(event.results).map(r => r[0].transcript).join(' ');
    const transcript = String(transcriptRaw || '').trim();
    console.log('Speech recognized:', transcript);

    if (!activeField) {
      console.warn('No activeField set to receive transcript');
      return;
    }
    // If it's a select (category) - try to match option value or text
    if (activeField.tagName === 'SELECT') {
      const low = transcript.toLowerCase();
      let matched = null;
      for (const opt of Array.from(activeField.options)) {
        const v = String(opt.value || '').toLowerCase();
        const t = String(opt.text || '').toLowerCase();
        if ((v && low.includes(v)) || (t && low.includes(t))) {
          matched = opt;
          break;
        }
      }
      if (matched) {
        activeField.value = matched.value;
        activeField.dispatchEvent(new Event('change', { bubbles: true }));
        console.log('Category matched ->', matched.value);
      } else {
        console.warn('No matching category for:', transcript);
        // don't block UX with alert; uncomment if you want:
        // alert(No matching category for: "${transcript}");
      }
      return;
    }

    // Otherwise put text into input/textarea
    if (activeField.tagName === 'INPUT' || activeField.tagName === 'TEXTAREA') {
      // append transcriptRaw (preserve original casing)
      activeField.value = (activeField.value ? activeField.value + ' ' : '') + transcriptRaw;
      activeField.dispatchEvent(new Event('input', { bubbles: true }));
    }
  };

  recognition.onend = () => {
    console.log('Recognition ended');
    isRecognizing = false;

    // reset UI only if we had started recording
    if (isRecording) {
      isRecording = false;
      setButtonState(micTitle, recordStatus, false);
      setButtonState(micDescription, recordStatusDiscr, false);
      setButtonState(micCategory, recordStatusCategory, false);
      activeField = null;
    }
  };

  recognition.onerror = (e) => {
    console.error('Speech recognition error:', e && e.error);
    isRecognizing = false;
    isRecording = false;
    setButtonState(micTitle, recordStatus, false);
    setButtonState(micDescription, recordStatusDiscr, false);
    setButtonState(micCategory, recordStatusCategory, false);
    activeField = null;
  };
});
// creating a card:
function handleFormSubmit(event){
    event.preventDefault();
    const noteTitle = event.target.elements['title'].value;
    const descriptionTitle = event.target.elements['description'].value;
    const categoryTitle = event.target.elements['category'].value;
    const existingDate = event.target.elements['noteDate']?.value;
    const noteDate = (existingDate && existingDate.trim() !=='')?
    existingDate: new
    Date().toISOString().split('T')[0];
 
    //for local storage(create and add):
    const newNote = {
        title:noteTitle,
        description:descriptionTitle,
        category:categoryTitle,
        date: noteDate
       
    };
    notes.push(newNote);
    localStorage.setItem('notes', JSON.stringify(notes));
   
    const noteCard = createNoteCard(noteTitle, descriptionTitle, categoryTitle, noteDate);
    //этф функция будет ниже
     for(let i = 0; i< notesForm.length; i++){
        notesForm.elements[i].value = '';
     }
    
     document.getElementById('addedNotConteiner').appendChild(noteCard);
    }
function createNoteCard(noteTitle, descriptionTitle, categoryTitle, noteDate){
    const card = document.createElement('div');
    card.className = 'card';
   
    const cardTitile = document.createElement('h3');
    cardTitile.innerHTML = noteTitle;
    card.appendChild(cardTitile);
  
    if(descriptionTitle.length !==0){
        const cardDescription = document.createElement('p');
    cardDescription.className = 'cardText';
    cardDescription.innerHTML = descriptionTitle;
    card.appendChild(cardDescription);
    }
    const metaRow = document.createElement('div');
    metaRow.className = 'dateMetaRow';

    const cardCategory = document.createElement('span');
    cardCategory.className = 'categorycard';
    cardCategory.setAttribute('data-category', categoryTitle.toLowerCase());
    const langKey = (localStorage.getItem('lang') || 'en-US').split('-')[0];
    const categoryKey = 'category' + categoryTitle.charAt(0).toUpperCase() +
    categoryTitle.slice(1).toLowerCase();
    cardCategory.textContent = translations[langKey]?.[categoryKey] || categoryTitle;
    
    
//===================================
    const dateSpan = document.createElement('span');
    dateSpan.className = 'noteDate';
    dateSpan.textContent = noteDate || '';
    card.setAttribute('data-date', noteDate || '');
   
//=============================
metaRow.appendChild(cardCategory);
metaRow.appendChild(dateSpan);
card.appendChild(metaRow);
    
const conteinerForBtn = document.createElement('div');
conteinerForBtn.className = 'contBtn';

const cardDeleteBtn = document.createElement('button');
cardDeleteBtn.className = 'removeCard';
cardDeleteBtn.innerHTML = 'Remove';
cardDeleteBtn.setAttribute('data-i18n', 'removeNoteBtn');
 cardDeleteBtn.textContent = translations[savedLang.split('-')[0]]?.removeNoteBtn || 'Delete';
    //savedLang.split('-')[0] makes en-US to en
cardDeleteBtn.addEventListener('click', removeCard);
conteinerForBtn.appendChild(cardDeleteBtn);
card.appendChild(conteinerForBtn);
    
    

    const cardEditButton = document.createElement('button');
    cardEditButton.className = 'editCard';
    cardEditButton.innerHTML = 'Edit';
    cardEditButton.setAttribute('data-i18n', 'editNoteBtn');
    cardEditButton.textContent = translations[savedLang.split('-')[0]]?.editNoteBtn || 'Edit';
    //savedLang.split('-')[0] makes en-US to en
    cardEditButton.addEventListener('click', editCard);
    conteinerForBtn.appendChild(cardEditButton)
    card.appendChild(conteinerForBtn);
    

const contForPic = document.createElement('div');
contForPic.className = 'conteinerCardPicture';
  function createPic(){
    const picture = document.createElement('img');
    picture.className ="cardPicture";
  picture.setAttribute('src', photoURL[currIndex]);
  picture.setAttribute('alt', 'Note Picture');
  currIndex = (currIndex + 1) % photoURL.length;
  return picture;
  }
  contForPic.appendChild(createPic());
  card.appendChild(contForPic);
  return card;

}
 function removeCard(event){
     const card = event.target.closest('.card');
     card.remove();  
     const title = card.querySelector('h3').innerText;
     notes = notes.filter(note => note.title !== title);
     localStorage.setItem('notes',JSON.stringify(notes));
    }
 function editCard(event){
    const card = event.target.closest('.card');

    const title = card.querySelector('h3').innerText;
    const description1 = card.querySelector('p');
    const description = description1 ? description1.innerText:'';
    //if 'p' is empty
    const category = card.querySelector('span').getAttribute('data-category');


    document.getElementById('title').value =title;
    document.getElementById('description').value = description;
    document.getElementById('category').value = category;
    card.remove();
   const titleToDelete = card.querySelector('h3').innerText;
     notes = notes.filter(note => note.title !== titleToDelete);
     localStorage.setItem('notes',JSON.stringify(notes));
 
 }
  
 // open the note with click:
 document.addEventListener('click', function(event){
const card = event.target.closest('.card');
if(!card)return;
card.classList.toggle('open');
 })
 // open input form:
 const toggleFormBtn = document.getElementById('toggleAddNote');
 const form = document.getElementById('note-form');
 form.classList.add('closed');
 toggleFormBtn.classList.add('closed');
 toggleFormBtn.addEventListener('click', () =>{
  const isClosed = form.classList.contains('closed');
  if(isClosed){
    form.classList.remove('closed');
    form.classList.add('open');
    toggleFormBtn.classList.add('active');
     toggleFormBtn.classList.remove('closed');
  } else{
    form.classList.remove('open');
    form.classList.add('closed');
    toggleFormBtn.classList.remove('active');
    toggleFormBtn.classList.add('closed');
  }
 })
 // function to show all notes for selected date:
function showNotesForDate(dateString){
  const allNotes = JSON.parse(localStorage.getItem('notes') || '[]');
    const filtered = allNotes.filter(n => n.date.startsWith(dateString));
    console.log('Notes for:', dateString, filtered);
    const container = document.getElementById('addedNotConteiner');
    container.innerHTML = '';
    filtered.forEach(note => {
      const card = createNoteCard(
        note.title,
        note.description,
        note.category,
        note.date
      );
      container.appendChild(card);
    })
}
window.showNotesForDate = showNotesForDate;

//button Show all dates function:
function showAllNotes(){
  const container = document.getElementById('addedNotConteiner');
  container.innerHTML ='';
  notes.forEach(note => {
    const noteCard = createNoteCard(
      note.title,
      note.description,
      note.category, 
      note.date
    );
    container.appendChild(noteCard);
  });
}

//show all notes for selected category:
function filterByCategory(category){
const cards = document.querySelectorAll('.card');
  if(category === 'all'){
    cards.forEach(card =>
    card.style.display = ''); return;
  }
  cards. forEach(card=> {
    const cardCateg = card.querySelector('.categorycard')?.dataset.category;
if (cardCateg === category){
  card.style.display = ''
} else {
  card.style.display = 'none'
}

})
}
// to change background img:
const buttons = document.querySelectorAll('.categoryBtn');
    let body = document.body;
    buttons.forEach(button => {
      button.addEventListener('click', function(){
        const dataCategory = button.dataset.category;
        body.setAttribute('data-bg', dataCategory);
        console.log()
    })
  })

// add .active class for category:
 const catButtonActive = document.querySelectorAll('.categoryBtn');
 catButtonActive.forEach(btn =>{
  btn.addEventListener('click', function(){
    catButtonActive.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
 });
window.filterByCategory = filterByCategory;

document.querySelectorAll('.categoryBtn').forEach(btn =>{
  btn.addEventListener('click',() =>{
    const cat = btn.dataset.category;
    filterByCategory(cat);
  })
})

// show card on the page from local storage:
window.addEventListener('DOMContentLoaded', () => {
    const saveNotes = JSON.parse (localStorage.getItem('notes')) || [];
    saveNotes.forEach(note => {
        const noteCard = createNoteCard(note.title, note.description, note.category, note.date);
        document.getElementById('addedNotConteiner').appendChild(noteCard);
    })
    notes = saveNotes;
})