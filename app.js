function scrollAppear(){
    let introText = document.querySelector('.intro-text');
    let introPosition = introText.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    

    if(introPosition < screenPosition){
        introText.classList.add('intro-appear');
    }
}

window.addEventListener('scroll', scrollAppear)

//IT WAS SUPPOSED TO WORK AT THIS POINT BUT FOR SOME REASON IT ISN'T
