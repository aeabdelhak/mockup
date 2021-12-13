const testimonies = [
  {
    image: "https://source.unsplash.com/100x100/?portrait,1",
    body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, est explicabo? Excepturi, at officiis dolore dicta consectetur reprehenderit debitis? Quis harum magnam autem praesentium odit pariatur doloribus non, dolor vero!",
  },
  {
    image: "https://source.unsplash.com/100x100/?portrait,2",
    body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, est explicabo? Excepturi, at officiis dolore dicta consectetur reprehenderit debitis? Quis harum magnam autem praesentium odit pariatur doloribus non, dolor vero!",
  },
  {
    image: "https://source.unsplash.com/100x100/?portrait,3",
    body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, est explicabo? Excepturi, at officiis dolore dicta consectetur reprehenderit debitis? Quis harum magnam autem praesentium odit pariatur doloribus non, dolor vero!",
  },
  {
    image: "https://source.unsplash.com/100x100/?portrait,4",
    body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, est explicabo? Excepturi, at officiis dolore dicta consectetur reprehenderit debitis? Quis harum magnam autem praesentium odit pariatur doloribus non, dolor vero!",
  },
  {
    image: "https://source.unsplash.com/100x100/?portrait,5",
    body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, est explicabo? Excepturi, at officiis dolore dicta consectetur reprehenderit debitis? Quis harum magnam autem praesentium odit pariatur doloribus non, dolor vero!",
  },
  {
    image: "https://source.unsplash.com/100x100/?portrait,6",
    body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, est explicabo? Excepturi, at officiis dolore dicta consectetur reprehenderit debitis? Quis harum magnam autem praesentium odit pariatur doloribus non, dolor vero!",
  },
  {
    image: "https://source.unsplash.com/100x100/?portrait,7",
    body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, est explicabo? Excepturi, at officiis dolore dicta consectetur reprehenderit debitis? Quis harum magnam autem praesentium odit pariatur doloribus non, dolor vero!",
  },
  {
    image: "https://source.unsplash.com/100x100/?portrait,8",
    body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, est explicabo? Excepturi, at officiis dolore dicta consectetur reprehenderit debitis? Quis harum magnam autem praesentium odit pariatur doloribus non, dolor vero!",
  },
  {
    image: "https://source.unsplash.com/100x100/?portrait,9",
    body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, est explicabo? Excepturi, at officiis dolore dicta consectetur reprehenderit debitis? Quis harum magnam autem praesentium odit pariatur doloribus non, dolor vero!",
  },
  {
    image: "https://source.unsplash.com/100x100/?portrait,10",
    body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, est explicabo? Excepturi, at officiis dolore dicta consectetur reprehenderit debitis? Quis harum magnam autem praesentium odit pariatur doloribus non, dolor vero!",
  },
  {
    image: "https://source.unsplash.com/100x100/?portrait,11",
    body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, est explicabo? Excepturi, at officiis dolore dicta consectetur reprehenderit debitis? Quis harum magnam autem praesentium odit pariatur doloribus non, dolor vero!",
  },
  {
    image: "https://source.unsplash.com/100x100/?portrait,12",
    body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, est explicabo? Excepturi, at officiis dolore dicta consectetur reprehenderit debitis? Quis harum magnam autem praesentium odit pariatur doloribus non, dolor vero!",
  },
  {
    image: "https://source.unsplash.com/100x100/?portrait,13",
    body: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, est explicabo? Excepturi, at officiis dolore dicta consectetur reprehenderit debitis? Quis harum magnam autem praesentium odit pariatur doloribus non, dolor vero!",
  },
];
testimonies.forEach(data => {
    

$('#testimonies').append(`   <div class="p-4 items-center gap-4 rounded shadow border border-gray-100 w-80 flex ">
<div class=" w-14 h-14 min-w-[3.5rem] overflow-hidden rounded-full border-2 shadow border-gray-200">
    <img src="${data.image}" class=" object-cover" alt="">
</div>
<p class=" text-xs text-gray-500 ">
${data.body}

</p>
</div>`)
});