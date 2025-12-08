document.addEventListener('DOMContentLoaded', ()=> {

let currentLang = (localStorage.getItem('lang') || 'en-US').split('-')[0];
 

const monthYearE1 = document.getElementById('monthYear');
const daysCont = document.getElementById('calendarDays');
const namesDayCont = document.getElementById('calendarDayNames');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

//arrays for monthes and days:
function getMonthNames(){
    return translations[currentLang].calendar.months; 
}
function getDayNames(){
    return translations[currentLang].calendar.days; 
}
let currentDate = new Date();

const renderdayNames = () =>{
    if(!namesDayCont) return;
    const dayNames = getDayNames();
    let outputDays;
    if(window.innerWidth > 900){
    outputDays = [...dayNames, ...dayNames];
    } else {
    outputDays = dayNames;
    }
    namesDayCont.innerHTML = outputDays.map(day => `<span>${day}</span>`).join('');
}
window.addEventListener('resize', renderdayNames);

const renderCalendar = () =>{
    if( !monthYearE1 || !daysCont) return;
    const monthNames = getMonthNames();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    monthYearE1.textContent = `${monthNames[month]} ${year}`;

    const firstDayIndex = (new Date(year, month).getDay()+ 6) % 7;
    const daysInMonth = 32 - new Date(year, month, 32).getDate();

    daysCont.innerHTML = '';

    for(let i = 0; i< firstDayIndex; i++){
       daysCont.innerHTML += `<span class= 'calendarDaysHidden'></span>`;
    }
    for(let day = 1; day<= daysInMonth; day++){
        const isToday = day === new Date().getDate() &&
                        month === new Date().getMonth() &&
                        year === new Date().getFullYear();

    const fullDate = `${year}-${(month+1).toString().padStart(2,'0')}-${day.toString().padStart(2,'0')}`;
    let classes = [];
    if(isToday && !window.selectedDate)
        classes.push('selected', 'today');
    if(window.selectedDate === fullDate)
        classes.push('selected');
    daysCont.innerHTML +=`<span data-date = "${fullDate}" class = "${classes.join(' ')}">${day}</span>`

    //  daysCont.innerHTML += `<span class = '${isToday ? 'today' : ''}'> ${day}</span>`
    }
    if(window.selectedDate){
        const el = document.querySelector(`#calendarDays span[data-date ="${window.selectedDate}"]`);
        if(el)el.classList.add('selected');
    }
};

const changeMonth = (delta) =>{
    currentDate.setMonth(currentDate.getMonth() + delta);
    renderCalendar();
};

prevBtn.addEventListener('click', ()=> changeMonth(-1));
nextBtn.addEventListener('click', ()=> changeMonth(1));

function UpdatecalendarLanguage(lang){
    currentLang = lang.split('-')[0];

renderdayNames();
renderCalendar();
}
window.UpdatecalendarLanguage = UpdatecalendarLanguage;
renderdayNames();
renderCalendar();

function highlight(dateStr){
    document.querySelectorAll('#calendarDays span')
    .forEach(s=> s.classList.remove('selected'));
    const element = document.querySelector(`#calendarDays span[data-date ="${dateStr}"]`);
    if(element) element.classList.add('selected');
}
// show notes for dates:
daysCont.addEventListener('click', function(e) {
    if(!e.target.matches('span') || e.target.classList.contains('calendarDaysHidden')) return;

    const day = e.target.textContent.trim();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const clickedDate = `${year}-${month.toString().padStart(2,'0')}-${day.padStart(2,'0')}`;
    console.log('Clicked Date:', clickedDate);
    window.selectedDate = clickedDate;
    highlight(clickedDate);
    if(window.showNotesForDate){
   window.showNotesForDate(clickedDate);
    }
})
//button show all dates:
document.getElementById('calendarShowAll').addEventListener('click', ()=> {
    window.selectedDate = null;
    highlight(null);
    showAllNotes();
})
const toggleCalendBtn = document.getElementById('toggleCalendar');
const calendarContainer = document.getElementById('calendarContainer');
calendarContainer.classList.add('hidden');
toggleCalendBtn.addEventListener('click', function(){
        const isHidden = calendarContainer.classList.toggle('hidden');
    toggleCalendBtn.classList.toggle('active', !isHidden);
})
 })
