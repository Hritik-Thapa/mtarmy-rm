//menu button animation

const menu_button=document.querySelector('.menu_button');
const line1=document.querySelector('.line1');
const line2=document.querySelector('.line2');
const menu_title=document.querySelectorAll('.menu_title');

let flag=1;
menu_button.addEventListener('click',()=>{
    line1.classList.toggle('rotate1');
    line2.classList.toggle('rotate2');

    menu_title.forEach(element=>{
        element.classList.toggle('menu_title-anim')
    })

    if(flag == 1){
        menu_drop();
    }
    else{
        menu_raise();
    }
})


function menu_drop(){
    flag=0;
    const drop_down=document.querySelector('.menu');
    drop_down.style.transform='translateY(100vh)'; 
}

function menu_raise(){
    flag=1;
    const drop_down=document.querySelector('.menu');
    drop_down.style.transform='translateY(-100vh)'; 
}



//youtube

const youtube=document.querySelector('.youtube');
fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=UUxWWS5IkVhVoG1IVMK3QRZA&key=AIzaSyBwtGbLHk3xIXrn48kwf9L-d_RIDMhgukU')
.then(result=>{
    return result.json();
}).then(data=>{
    data.items.forEach(current=>{

        const video_thmb=current.snippet.thumbnails.medium.url;
        const video_title=current.snippet.title;
        const video_url=`https://www.youtube.com/watch?v=${current.snippet.resourceId.videoId}`

        const thmb=document.createElement('img');
        thmb.src=video_thmb;
        thmb.alt="";
        thmb.className="video_thumbnail";

        const title=document.createElement('p');
        title.textContent=video_title;
        title.classList.add('video_title');

        const video=document.createElement('a');
        video.href=video_url;
        video.target='_blank';
        video.appendChild(title);
        video.appendChild(thmb);

        youtube.appendChild(video);

    })
})

//youtube scroll

const arrow_left=document.querySelector('.arrow.left');
const arrow_right=document.querySelector('.arrow.right');

console.log(arrow_right)
arrow_left.addEventListener('click',()=>{
    youtube.scrollLeft-=340;
})

arrow_right.addEventListener('click',()=>{
    youtube.scrollLeft+=340;
})

youtube.addEventListener('wheel',scroll=>{
    scroll.preventDefault();
    youtube.scrollLeft+=scroll.deltaY*3;
})


//merch reavel

const merch=document.querySelector('.merch');

window.addEventListener('scroll',()=>{
    const window_height=window.innerHeight;
    const merch_top=merch.getBoundingClientRect().top;
    if(window_height-150>merch_top)
    {
        console.log('lol')
        merch.classList.add('merch_reveal');
    }
})

