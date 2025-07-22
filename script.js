const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');
// This code controls a mobile navigation menu.
if (bar)
{
    bar.addEventListener('click',()=>
    {
        nav.classList.add('active');
    })
}

// Toggle

if (Close)
{
    close.addEventListener('click',()=>
    {
        nav.classList.remove('active');
    })
}