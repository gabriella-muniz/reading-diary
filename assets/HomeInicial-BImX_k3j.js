import{_ as m,o as s,c as a,a as e,F as p,f,t as l,n as x,b as h,g as u,h as v,v as k,r as g}from"./index-BTRiwrRl.js";import{B as w}from"./BookModal-RPC6GfXP.js";const y={data(){return{phrases:['Veja detalhes no seu menu "Meus Livros".',"Adicione novos livros e acompanhe sua leitura.","Descubra novas histórias inspiradoras!","Registre suas leituras e defina metas para 2024."],currentIndex:0,interval:null}},computed:{wrapperStyle(){return{transform:`translateX(-${this.currentIndex*100}%)`}}},mounted(){this.startRotation()},beforeUnmount(){this.interval&&clearInterval(this.interval)},methods:{startRotation(){this.interval=setInterval(()=>{this.currentIndex=(this.currentIndex+1)%this.phrases.length},5e3)}}},S={class:"relative overflow-hidden w-full"};function B(n,i,_,b,t,r){return s(),a("div",S,[e("div",{class:"flex whitespace-nowrap transition-transform duration-1000",style:x(r.wrapperStyle)},[(s(!0),a(p,null,f(t.phrases,(d,c)=>(s(),a("p",{key:c,class:"flex-shrink-0 min-w-full text-lg font-light text-center px-4 sm:px-6 md:px-8 lg:px-12"},l(d),1))),128))],4)])}const R=m(y,[["render",B]]),G={components:{RotatingText:R,BookModal:w},data(){return{recentBooks:[],booksRead:0,progress:0,isModalOpen:!1,showSuccessMessage:!1,readingGoal:null,newReadingGoal:null}},computed:{recentBooksToShow(){return this.recentBooks.slice(-3).reverse()}},created(){this.loadBooksFromLocalStorage(),this.loadReadingGoalFromLocalStorage()},methods:{openModal(){this.isModalOpen=!0},closeModal(){this.isModalOpen=!1},addBook(n){this.recentBooks.push(n),this.booksRead=this.recentBooks.length,this.updateProgress(),this.saveBooksToLocalStorage(),this.closeModal(),this.showSuccess()},showSuccess(){this.showSuccessMessage=!0,setTimeout(()=>{this.showSuccessMessage=!1},3e3)},loadBooksFromLocalStorage(){const n=localStorage.getItem("books");n&&(this.recentBooks=JSON.parse(n),this.booksRead=this.recentBooks.length,this.updateProgress())},saveBooksToLocalStorage(){localStorage.setItem("books",JSON.stringify(this.recentBooks))},updateProgress(){this.readingGoal&&(this.progress=this.booksRead/this.readingGoal*100)},setReadingGoal(){this.newReadingGoal>0&&(this.readingGoal=this.newReadingGoal,this.saveReadingGoalToLocalStorage(),this.updateProgress())},loadReadingGoalFromLocalStorage(){const n=localStorage.getItem("readingGoal");n&&(this.readingGoal=JSON.parse(n),this.updateProgress())},saveReadingGoalToLocalStorage(){localStorage.setItem("readingGoal",JSON.stringify(this.readingGoal))}}},M={class:"bg-gray-100 min-h-screen text-black py-12 relative"},L={class:"bg-[#8DD9BF] text-black py-24 px-12 text-center shadow-lg"},F=e("h1",{class:"text-6xl font-extrabold mb-8 font-font"},"Bem-vindo ao Seu Diário de Leituras",-1),I={key:0,class:"fixed top-4 left-1/2 transform -translate-x-1/2 p-6 bg-green-600 text-white rounded-md shadow-lg z-50"},T={class:"py-5 px-5"},D=e("h2",{class:"text-4xl font-bold mb-10 text-center font-font"},"Livros Recentemente Lidos",-1),O={key:0,class:"text-center text-gray-600 mb-5"},N=e("p",{class:"font-font2"},"Você ainda não adicionou nenhum livro.",-1),C=[N],V={key:1,class:"grid grid-cols-1 md:grid-cols-3 gap-12"},P=["src"],J={class:"text-3xl font-semibold mb-3 text-black"},j={class:"text-gray-500"},U={class:"py-20 px-12 bg-[#8DD9BF] shadow-lg"},q=e("h2",{class:"text-4xl font-bold mb-12 text-center text-black font-font"},"Minha Meta de Leitura",-1),z={class:"text-center"},A={class:"mb-6"},E={key:0,class:"text-2xl mt-6 mb-6 text-black font-font2"},H={class:"w-full max-w-md mx-auto bg-gray-700 rounded-full h-12 relative"},X={class:"absolute inset-0 flex items-center justify-center text-sm font-semibold text-gray-100"},K={class:"mt-4 text-black font-font2"},Q=e("section",{class:"py-20 px-12"},[e("blockquote",{class:"text-center italic text-2xl text-black"},' "Um livro é um sonho que você segura em suas mãos." - Neil Gaiman ')],-1);function W(n,i,_,b,t,r){const d=g("RotatingText"),c=g("BookModal");return s(),a("div",M,[e("section",L,[F,h(d),e("button",{onClick:i[0]||(i[0]=(...o)=>r.openModal&&r.openModal(...o)),class:"bg-black text-[#F4F6F9] py-[1rem] sm:py-[1.2rem] px-[2.5rem] sm:px-[3.5rem] text-[0.9rem] sm:text-[1rem] uppercase tracking-wider font-bold rounded-lg shadow-md transition-transform transform hover:translate-y-[-5px] font-font mt-8"}," Adicionar Livro ")]),h(c,{isOpen:t.isModalOpen,onClose:r.closeModal,onSubmit:r.addBook},null,8,["isOpen","onClose","onSubmit"]),t.showSuccessMessage?(s(),a("div",I," Livro adicionado com sucesso! ")):u("",!0),e("section",T,[D,t.recentBooks.length===0?(s(),a("div",O,C)):(s(),a("div",V,[(s(!0),a(p,null,f(r.recentBooksToShow,o=>(s(),a("div",{key:o.id,class:"bg-gray-200 p-8 rounded-xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 ease-in-out"},[e("img",{src:o.image,alt:"Capa do Livro",class:"w-full h-72 object-cover mb-6 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105"},null,8,P),e("h3",J,l(o.name),1),e("p",j,"Nota: "+l(o.rating)+"/5",1)]))),128))]))]),e("section",U,[q,e("div",z,[e("div",A,[v(e("input",{"onUpdate:modelValue":i[1]||(i[1]=o=>t.newReadingGoal=o),type:"number",placeholder:"Defina sua meta em 2024 ",class:"py-3 px-4 text-lg rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"},null,512),[[k,t.newReadingGoal]])]),e("button",{onClick:i[2]||(i[2]=(...o)=>r.setReadingGoal&&r.setReadingGoal(...o)),class:"bg-black text-[#F4F6F9] py-3 px-6 text-lg uppercase tracking-wider font-bold rounded-lg shadow-md font-font mb-4"}," Definir Meta "),t.readingGoal?(s(),a("p",E,"Meta de leitura de 2024: "+l(t.readingGoal)+" livros",1)):u("",!0),e("div",H,[e("div",{class:"bg-blue-500 h-full rounded-full font-font2",style:x({width:t.progress+"%"})},null,4),e("span",X,l(t.booksRead)+" livros lidos",1)]),e("p",K,l(t.booksRead)+" livros lidos até agora!",1)])]),Q])}const $=m(G,[["render",W]]);export{$ as default};
