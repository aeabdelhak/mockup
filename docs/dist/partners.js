const partners = [
  {
    image: "https://source.unsplash.com/300x300/?colors,avatar1",
  },
  {
    image: "https://source.unsplash.com/300x300/?colors,avatar2",
  },
  {
    image: "https://source.unsplash.com/300x300/?colors,avatar3",
  },
  {
    image: "https://source.unsplash.com/300x300/?colors,avatar4",
  },
  {
    image: "https://source.unsplash.com/300x300/?colors,avatar5",
  },
  {
    image: "https://source.unsplash.com/300x300/?colors,avatar6",
  },
  {
    image: "https://source.unsplash.com/300x300/?colors,avatar7",
  },
  {
    image: "https://source.unsplash.com/300x300/?colors,avatar8",
  },
  {
    image: "https://source.unsplash.com/300x300/?colors,avatar9",
  },
  {
    image: "https://source.unsplash.com/300x300/?colors,avatar10",
  },
  {
    image: "https://source.unsplash.com/300x300/?colors,avatar11",
  },
  {
    image: "https://source.unsplash.com/300x300/?colors,avatar12",
  },
  {
    image: "https://source.unsplash.com/300x300/?colors,avatar13",
  },
];
partners.forEach(data => {
    

$('#partners').append(`   <div>
<div class="h-44 w-44 relative ">
    <img src="${data.image}" class=" object-contain" alt="">
</div>
</div> `)
});