let themeDots = document.getElementsByClassName('theme-dot')
let style = document.getElementById('theme-style')
let theme = localStorage.getItem('theme')

if(theme == null){
    setTheme('light');
}else{
    setTheme(theme);
}

for(var i=0; i < themeDots.length ; i++ ){
    themeDots[i].addEventListener('click' , function(){
        let mode = this.dataset.mode
        console.log('option clicked' ,mode );
        setTheme(mode);
    })
}

function setTheme(mode){
    if(mode == 'light')
        style.href = '';
    else
        style.href = `${mode}.css`;
    localStorage.setItem('theme' , mode);
}