
$(document).ready(function () {

const contatcs=[
    {
        url:"https://wa.me/967772980155",
        title:"Whatsapp",
        description:"للتواصل عبر الواتس اب",
        text:`<i class="fab fa-whatsapp text-green-300"></i>`,
        color:"green-300",
        bg:"bg-white"
    },

     {
        url:"tel:+967772980155",
        title:"Phone",
        description:"للتواصل المباشر",
        text:`<i class="fa fa-phone text-blue-200 hover:text-white"></i>`,
        color:"blue-200",
        bg:"bg-white"
    },

    {
        url:"https://www.instagram.com/dano.photographe/",
        title:"Instagram",
        description:"للتواصل عبر انستغرام",
        text:`<i class="fab fa-instagram text-pink-400"></i>`,
        color:"green-300",
        bg:"bg-white"
    },


     {
        url:"https://www.facebook.com/share/1Czs75FHrp/",
        title:"Facebook",
        description:"للتواصل عبر فيس بوك",
        text:`<i class="fab fa-facebook text-blue-400"></i>`
    },
]


// const contact= document.getElementById("contact");


contatcs.forEach((item=>{
    $("#contact").append(genrate_contact(item))
    // contact.appendChild(genrate_contact(item));
}))

function genrate_contact(item){

    return `<a href="${item.url}" class="glass rounded-2xl p-6 text-center smooth-transition ${item.addtionalclass} hover:${item.color} hover:scale-105 neon-glow group">
                <div class="text-4xl mb-3 group-hover:animate-bounce">${item.text}</div>
                <div class="text-white font-bold hover:${item.color}">${item.title}</div>
                <div class="text-white/70 text-sm hover:${item.color}">${item.description}</div>
            </a>
            `;

}




});
