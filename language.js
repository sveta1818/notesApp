const languages = [
    {
    no: "16",
    name: "English",
    native: "English",
    code: "en-US",
    },{
 no: "11",
    name: "Chinese (Traditional)",
    native: "中文繁體",
    code: "zh-TW",
    },
    {
         no: "54",
    name: "Ukrainian",
    native: "Українська",
    code: "uk-UA",
    },
    {
        no: "45",
    name: "Russian",
    native: "Русский",
    code: "ru-RU",
    },
    {
    no: "42",
    name: "Polish",
    native: "Polski",
    code: "pl-PL",
  }, {
    no: "49",
    name: "Spanish",
    native: "Español",
    code: "es-ES",
  }, {
    no: "40",
    name: "Norwegian",
    native: "Norsk",
    code: "no-NO",
  },
]
const translations = {
    en: {
        subtitle: 'Little Notes, Big Thoughts',
        title:'My notes',
        formtitle: 'Title',
        formtitlePlaceholder: 'Title',
        recordBtnTitle: ' Voice input🎤',
        recordBtnTitleStop: 'Stop',
        recordingStatus: 'Recording',
        formdescription : 'Description',
        formdescriptionPlaceholder: 'Describe the note',
        recordBtnDescription: ' Voice input🎤',
        recordBtnDescriptionStop: 'Stop',
        recordingStatusDescription: 'Recording',
        formcategory: 'Category',
        categoryPersonal:'Personal',
        categoryWork: 'Work',
        categoryShopping: 'Shopping',
        categoryHealth: 'Health',
        categoryFamily: 'Family',
        categoryTasks: 'Tasks',
        categoryIdea: 'Idea',
        recordBtnCategory: ' Voice input🎤',
        recordBtnCategoryStop: 'Stop',
        recordingStatusCategory: 'Recording',
        addNoteBtn: 'Add a note',
        removeNoteBtn: 'Remove',
        editNoteBtn: 'Edit',
        allDatesBtn: 'All dates',
        categoryAllBtn: 'All categories',
        categoryPersonalBtn: "Personal",
        categoryWorkBtn: "Work",
        categoryShoppingBtn: "Shopping",
        categoryHealthBtn: "Health",
        categoryFamilyBtn: "Family",
        categoryTasksBtn: "Tasks",
        categoryIdeaBtn: "Idea",
        calendar: {
      months: ['January','February','March','April','May','June',
               'July','August','September','October','November','December'],
      days: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
   }
    },
     zh: {  
    subtitle: '小筆記，大想法',  
    title: '我的筆記',  
    formtitle: '標題',  
    formtitlePlaceholder: '輸入標題',  
    recordBtnTitle: '語音輸入🎤',  
    recordBtnTitleStop: '停止',  
    recordingStatus: '錄音中...',  
    formdescription: '描述',  
    formdescriptionPlaceholder: '描述筆記',  
    recordBtnDescription: '語音輸入🎤',  
    recordBtnDescriptionStop: '停止',  
    recordingStatusDescription: '錄音中...',  
    formcategory: '類別',  
    categoryPersonal: '個人',  
    categoryWork: '工作',  
    categoryShopping: '購物',  
    categoryHealth: '健康',  
    categoryFamily: '家庭',  
    categoryTasks: '任務',  
    categoryIdea: '想法',  
    recordBtnCategory: '語音輸入🎤',  
    recordBtnCategoryStop: '停止',  
    recordingStatusCategory: '錄音中...',  
    addNoteBtn: '新增筆記',  
    removeNoteBtn: '刪除',  
    editNoteBtn: '編輯',
    allDatesBtn: '所有日期',
    allCategoriesBtn: '所有類別',
    categoryPersonalBtn: "個人",
    categoryWorkBtn: "工作",
    categoryShoppingBtn: "購物",
    categoryHealthBtn: "健康",
    categoryFamilyBtn: "家庭",
    categoryTasksBtn: "任務",
    categoryIdeaBtn: "想法",
    calendar: {
  months: ['一月','二月','三月','四月','五月','六月',
           '七月','八月','九月','十月','十一月','十二月'],
  days: ['一','二','三','四','五','六','日']
} 
  },
  uk: {  
    subtitle: 'Маленькі нотатки — великі думки',  
    title: 'Мої нотатки',  
    formtitle: 'Заголовок',  
    formtitlePlaceholder: 'Введіть заголовок',  
    recordBtnTitle: 'Голосове введення🎤',  
    recordBtnTitleStop: 'Стоп',  
    recordingStatus: 'Йде запис...',  
    formdescription: 'Опис',  
    formdescriptionPlaceholder: 'Опишіть нотатку',  
    recordBtnDescription: 'Голосове введення🎤',  
    recordBtnDescriptionStop: 'Стоп',  
    recordingStatusDescription: 'Йде запис...',  
    formcategory: 'Категорія',  
    categoryPersonal: 'Особисте',  
    categoryWork: 'Робота',  
    categoryShopping: 'Покупки',  
    categoryHealth: 'Здоров’я',  
    categoryFamily: 'Сім’я',  
    categoryTasks: 'Завдання',  
    categoryIdea: 'Ідея',  
    recordBtnCategory: 'Голосове введення🎤',  
    recordBtnCategoryStop: 'Стоп',  
    recordingStatusCategory: 'Йде запис...',  
    addNoteBtn: 'Додати нотатку',  
    removeNoteBtn: 'Видалити',  
    editNoteBtn: 'Редагувати',
    allDatesBtn: 'Усі дати',
    allCategoriesBtn: 'Усі категорії',
    categoryPersonalBtn: "Особисте",
    categoryWorkBtn: "Робота",
    categoryShoppingBtn: "Покупки",
    categoryHealthBtn: "Здоров’я",
    categoryFamilyBtn: "Сім’я",
    categoryTasksBtn: "Завдання",
    categoryIdeaBtn: "Ідея",
     calendar: {
  months: ['Січень','Лютий','Березень','Квітень','Травень','Червень',
           'Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'],
  days: ['Пн','Вт','Ср','Чт','Пт','Сб','Нд']
}
  },
  ru: {  
    subtitle: 'Маленькие заметки — большие мысли',  
    title: 'Мои заметки',  
    formtitle: 'Заголовок',  
    formtitlePlaceholder: 'Введите заголовок',  
    recordBtnTitle: 'Голосовой ввод🎤',  
    recordBtnTitleStop: 'Стоп',  
    recordingStatus: 'Идёт запись...',  
    formdescription: 'Описание',  
    formdescriptionPlaceholder: 'Опишите заметку',  
    recordBtnDescription: 'Голосовой ввод🎤',  
    recordBtnDescriptionStop: 'Стоп',  
    recordingStatusDescription: 'Идёт запись...',  
    formcategory: 'Категория',  
    categoryPersonal: 'Личное',  
    categoryWork: 'Работа',  
    categoryShopping: 'Покупки',  
    categoryHealth: 'Здоровье',  
    categoryFamily: 'Семья',  
    categoryTasks: 'Задачи',  
    categoryIdea: 'Идея',  
    recordBtnCategory: 'Голосовой ввод🎤',  
    recordBtnCategoryStop: 'Стоп',  
    recordingStatusCategory: 'Идёт запись...',  
    addNoteBtn: 'Добавить заметку',  
    removeNoteBtn: 'Удалить',  
    editNoteBtn: 'Редактировать',
    allDatesBtn: 'Все даты',
    allCategoriesBtn: 'Все категории',
    categoryPersonalBtn: "Личное",
    categoryWorkBtn: "Работа",
    categoryShoppingBtn: "Покупки",
    categoryHealthBtn: "Здоровье",
    categoryFamilyBtn: "Семья",
    categoryTasksBtn: "Задачи",
    categoryIdeaBtn: "Идея",
       calendar: {
      months: ['Январь','Февраль','Март','Апрель','Май','Июнь',
               'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
      days: ['Пн','Вт','Ср','Чт','Пт','Сб','Вс']
   }
  },
   pl: {  
    subtitle: 'Małe notatki, wielkie myśli',  
    title: 'Moje notatki',  
    formtitle: 'Tytuł',  
    formtitlePlaceholder: 'Wpisz tytuł',  
    recordBtnTitle: 'Wprowadzanie głosowe🎤',  
    recordBtnTitleStop: 'Stop',  
    recordingStatus: 'Nagrywanie...',  
    formdescription: 'Opis',  
    formdescriptionPlaceholder: 'Opisz notatkę',  
    recordBtnDescription: 'Wprowadzanie głosowe🎤',  
    recordBtnDescriptionStop: 'Stop',  
    recordingStatusDescription: 'Nagrywanie...',  
    formcategory: 'Kategoria',  
    categoryPersonal: 'Osobiste',  
    categoryWork: 'Praca',  
    categoryShopping: 'Zakupy',  
    categoryHealth: 'Zdrowie',  
    categoryFamily: 'Rodzina',  
    categoryTasks: 'Zadania',  
    categoryIdea: 'Pomysł',  
    recordBtnCategory: 'Wprowadzanie głosowe🎤',  
    recordBtnCategoryStop: 'Stop',  
    recordingStatusCategory: 'Nagrywanie...',  
    addNoteBtn: 'Dodaj notatkę',  
    removeNoteBtn: 'Usuń',  
    editNoteBtn: 'Edytuj',
    allDatesBtn: 'Wszystkie daty',
    allCategoriesBtn: 'Wszystkie kategorie',
    categoryPersonalBtn: "Osobiste",
    categoryWorkBtn: "Praca",
    categoryShoppingBtn: "Zakupy",
    categoryHealthBtn: "Zdrowie",
    categoryFamilyBtn: "Rodzina",
    categoryTasksBtn: "Zadania",
    categoryIdeaBtn: "Pomysł",
     calendar: {
  months: ['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec',
           'Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień'],
  days: ['Pn','Wt','Śr','Cz','Pt','So','Nd']
}
  },  

  es: {  
    subtitle: 'Pequeñas notas, grandes pensamientos',  
    title: 'Mis notas',  
    formtitle: 'Título',  
    formtitlePlaceholder: 'Introduce el título',  
    recordBtnTitle: 'Entrada por voz🎤',  
    recordBtnTitleStop: 'Detener',  
    recordingStatus: 'Grabando...',  
    formdescription: 'Descripción',  
    formdescriptionPlaceholder: 'Describe la nota',  
    recordBtnDescription: 'Entrada por voz🎤',  
    recordBtnDescriptionStop: 'Detener',  
    recordingStatusDescription: 'Grabando...',  
    formcategory: 'Categoría',  
    categoryPersonal: 'Personal',  
    categoryWork: 'Trabajo',  
    categoryShopping: 'Compras',  
    categoryHealth: 'Salud',  
    categoryFamily: 'Familia',  
    categoryTasks: 'Tareas',  
    categoryIdea: 'Idea',  
    recordBtnCategory: 'Entrada por voz🎤',  
    recordBtnCategoryStop: 'Detener',  
    recordingStatusCategory: 'Grabando...',  
    addNoteBtn: 'Agregar nota',  
    removeNoteBtn: 'Eliminar',  
    editNoteBtn: 'Editar',
    allDatesBtn: 'Todas las fechas',
    allCategoriesBtn: 'Todas las categorías',
    categoryPersonalBtn: "Personal",
    categoryWorkBtn: "Trabajo",
    categoryShoppingBtn: "Compras",
    categoryHealthBtn: "Salud",
    categoryFamilyBtn: "Familia",
    categoryTasksBtn: "Tareas",
    categoryIdeaBtn: "Idea",
      calendar: {
  months: [
    'Enero','Febrero','Marzo','Abril','Mayo','Junio',
    'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'
  ],
  days: ['Lun','Mar','Mié','Jue','Vie','Sáb','Dom']
}
  },  
  no: {  
    subtitle: 'Små notater, store tanker',  
    title: 'Mine notater',  
    formtitle: 'Tittel',  
    formtitlePlaceholder: 'Skriv inn tittel',  
    recordBtnTitle: 'Taleinndata🎤',  
    recordBtnTitleStop: 'Stopp',  
    recordingStatus: 'Opptak...',  
    formdescription: 'Beskrivelse',  
    formdescriptionPlaceholder: 'Beskriv notatet',  
    recordBtnDescription: 'Taleinndata🎤',  
    recordBtnDescriptionStop: 'Stopp',  
    recordingStatusDescription: 'Opptak...',  
    formcategory: 'Kategori',  
    categoryPersonal: 'Personlig',  
    categoryWork: 'Arbeid',  
    categoryShopping: 'Shopping',  
    categoryHealth: 'Helse',  
    categoryFamily: 'Familie',  
    categoryTasks: 'Oppgaver',  
    categoryIdea: 'Idé',  
    recordBtnCategory: 'Taleinndata🎤',  
    recordBtnCategoryStop: 'Stopp',  
    recordingStatusCategory: 'Opptak...',  
    addNoteBtn: 'Legg til notat',  
    removeNoteBtn: 'Fjern',  
    editNoteBtn: 'Rediger',
    allDatesBtn: 'Alle datoer',
    allCategoriesBtn: 'Alle kategorier',
    categoryPersonalBtn: "Personlig",
    categoryWorkBtn: "Arbeid",
    categoryShoppingBtn: "Shopping",
    categoryHealthBtn: "Helse",
    categoryFamilyBtn: "Familie",
    categoryTasksBtn: "Oppgaver",
    categoryIdeaBtn: "Idé",
    calendar: {
  months: [
    'Januar','Februar','Mars','April','Mai','Juni',
    'Juli','August','September','Oktober','November','Desember'
  ],
  days: ['Man','Tir','Ons','Tor','Fre','Lør','Søn']
}  
  }  
} 
//language change for voice input:
 inputLanguage = document.querySelector("#language");
 function populateLanguages() {
  languages.forEach((lang) => {
    const option = document.createElement("option");
    option.value = lang.code;
    option.innerHTML = lang.name;
    inputLanguage.appendChild(option);
  });
}

populateLanguages();


// take it from local storage(voice input):
const savedLang = localStorage.getItem('lang') || 'en-US';
inputLanguage.value = savedLang;
inputLanguage.addEventListener('change',(e)=>{
  const selectedLang = e.target.value;
  localStorage.setItem('lang', selectedLang);
  appyTranslation(selectedLang);
UpdatecalendarLanguage(selectedLang);
})

//apply translation for the page from html:
function appyTranslation(langCode){
    const langKey = langCode.split('-')[0];
    const dict = translations[langKey];
    if(!dict)return;

    //for text p,h, buttons:
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if(dict[key])el.textContent = dict[key];
    })
    //for placeholder:
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if(dict[key])el.placeholder = dict[key];
    })

document.querySelectorAll('#category option').forEach(opt =>{
  const origValue = opt.value;
  if(!origValue) return;
  const optionKey ='category' + origValue.charAt(0).toUpperCase() + 
  origValue.slice(1).toLowerCase();
  if(dict[optionKey])
    opt.textContent = dict[optionKey];
})
document.querySelectorAll('#category option').forEach(opt => {
    const origValue = opt.value; // предполагаем, что value = 'Personal','Work' и т.д.
    if (!origValue) return;
    const optionKey = 'category' + origValue.charAt(0).toUpperCase() + origValue.slice(1).toLowerCase();
    if (dict[optionKey]) opt.textContent = dict[optionKey];
  });

  // ---- update categories that are already rendered in cards ----
  // требуется, чтобы при создании карточки ты добавлял data-category = originalValue
  document.querySelectorAll('.card .categorycard').forEach(cardCat => {
    const origCat = cardCat.getAttribute('data-category'); // 'Personal'/'Work' etc
    if (!origCat) return;
    const catKey = 'category' + origCat.charAt(0).toUpperCase() + origCat.slice(1).toLowerCase();
    if (dict[catKey]) {
      cardCat.textContent = dict[catKey];
    } else {
      // fallback: показать сохранённый ключ, если перевода нет
      cardCat.textContent = origCat;
    }
  });
  const statusEls = [recordStatus, recordStatusDiscr, recordStatusCategory];
statusEls.forEach(el => {
  if (el) el.textContent = '';
});
}

appyTranslation(savedLang);

  // create one recognition instance(voice input)

  const recognition = new SpeechRecognition();
  recognition.lang = inputLanguage.value;
  recognition.continuous = false;
  recognition.interimResults = false;

  //lisening chenge the language by user(voice input):
  inputLanguage.addEventListener('change', ()=>{
    const newLang = inputLanguage.value;
    localStorage.setItem('lang', newLang);
    recognition.lang = newLang;
    appyTranslation(newLang);
    console.log('languege switched to:', newLang);
  })
  
