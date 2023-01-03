const search=document.querySelector('#search');

const sports=document.querySelectorAll('.sport');

search.addEventListener('keyup', function(event){
    const searching=event.target.value.toLowerCase();
    sports.forEach(item=>{
        item.querySelector('p').textContent.toLowerCase().includes(searching)||item.querySelector('h4').textContent.toLowerCase().includes(searching)?(item.style.display='block'):(item.style.display='none');
    })
    
})

const btn=document.querySelectorAll('.btn');
const items=document.querySelectorAll('span');

    btn.forEach(function (item, index) {
        item.addEventListener('click',()=>{
            items[index].style.display='block'
        })
    })
    
    btn.forEach(function (item, index) {
        item.addEventListener('dblclick',()=>{
            items[index].style.display='none'
        })
    })
    

console.log(items);