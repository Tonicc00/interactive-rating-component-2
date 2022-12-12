const buttons = document.querySelectorAll('.btn');
const submittBtn = document.querySelector('.submitt-btn');
const thankYouMessage = document.querySelector('.thank-you');
const firstPage = document.querySelector('.how-did-we-do');
const grades = document.querySelector('.grades');
const grade = document.querySelector('.your-grade');

function selectGrade(){
    submittBtn.disabled = true;
    submittBtn.addEventListener('click', () => {
        firstPage.style.display = 'none';
        thankYouMessage.style.display = 'block';
    });

    if(submittBtn.disabled = true){
        grades.addEventListener('click', (e) => {
            const isButton = e.target.nodeName === 'BUTTON';
            if(!isButton){
                return;
            }
            e.target.classList.remove('btn');
            e.target.classList.add('selected-btn');
            if(prevBtn !== null){
                prevBtn.classList.add('btn');
                prevBtn.classList.remove('selected-btn');
            }
            prevBtn = e.target;
            grade.innerHTML = `You selected ${e.target.value} out of 5!`;
            submittBtn.disabled = false;
        })
        let prevBtn = null;

    }
}
selectGrade();