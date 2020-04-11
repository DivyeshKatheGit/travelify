window.addEventListener('load',()=>
{
    //burger

        const burger = document.querySelector('.burger');
        const nav_list  =document.querySelector('.nav-list');
        const cross = document.querySelector('.cross');

        burger.addEventListener('click',()=>
        {
            console.log("burger clicked",nav_list);
            nav_list.classList.add('nav-active');
            burger.style.display = "none";
        })

        cross.addEventListener('click',()=>
        {
            nav_list.classList.remove('nav-active');
            burger.style.display = "block";
        })


    //burger end
    //navlinks animation

        const navLinks = document.querySelectorAll('.nav-items li');

        for(let i=0;i<navLinks.length;i++)
        {
            navLinks[i].style.animation = "navlinkfade 3s ease forwards";
        }
        
    //navlink animation
    //corousel
    let indx=0;
    const slides = document.querySelectorAll('.slide');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    var swapInterval = setInterval(() => {
        slides[indx].style.display = "none";
        if(indx==slides.length-1)
        {
            indx=0;
        }
        else
        {
            indx++;
        }
        slides[indx].style.display = "block";
    }, 3000);
    prev.addEventListener('click',()=>
    {
        slides[indx].style.display = "none";
        if(indx==0)
        {
            indx=slides.length-1;
        }
        else
        {
            indx--;
        }
        slides[indx].style.display = "block";
    })
    next.addEventListener('click',()=>
    {
        slides[indx].style.display = "none";
        if(indx==slides.length-1)
        {
            indx=0;
        }
        else
        {
            indx++;
        }
        slides[indx].style.display = "block";
    })


    //corousel end
    console.log(slides,prev,next);


    //testimonials

        let tindx=0;
        const testimonials = document.querySelectorAll('.Testi-card');
        var testiInterval = setInterval(() => {
            testimonials[tindx].style.display = "none";
            if(tindx==testimonials.length-1)
            {
                tindx=0;
            }
            else
            {
                tindx++;
            }
            testimonials[tindx].style.display = "block";
        }, 3000);

        const nextTesti = document.querySelector('.nextTesti');
        const prevTesti = document.querySelector('.prevTesti');

        nextTesti.addEventListener('click',()=>
        {
            testimonials[tindx].style.animation = '';
            testimonials[tindx].style.display = "none";
            if(tindx==testimonials.length-1)
            {
                tindx=0;
            }
            else
            {
                tindx++;
            }
            testimonials[tindx].style.display = "block";
            testimonials[tindx].style.animation = 'testi .5s forward';

        })
        prevTesti.addEventListener('click',()=>
        {
            testimonials[tindx].style.display = "none";
            if(tindx==0)
            {
                tindx=testimonials.length-1;
            }
            else
            {
                tindx--;
            }
            testimonials[tindx].style.display = "block";
        })


    //testimonials end
});