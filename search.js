let sugerimente=[
    'lapte',
    'pâine ',
    'pâine integrală',
    'ouă',
    'faină',
    'cereale',
    'apă carbocazoasă',
    'pastă de dinți',
    'paste',
    'mere',
    'pere',
    'banane',
    'pepene verde',
    'pepene galben',
    'roșii',
    'zahăr',
    'zahăr brun',
    'Fairy',
    'Lenor',
    'Nivea Men',
    'Nivea',
    'Dove',
    'cașcaval',
    'smântănă',
    'deodorant',
    'bere',
    'pateu de porc',
    'cartofi',
];
const sugestie = document.querySelector(".sugestie");
const caut = document.getElementById("search");

caut.onkeyup = function(){
    let s =[];
    let src = caut.value;
    if(src.length){
        s = availableKeyword.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(s);
    }
    display(s);

    if(!s.length){
        sugestie.innerHTML='';
    }
}

function display(s){
    const content =  s.map((list)=>{
        return"<li onclick=selectInput(this)>" + list + "</li>";
    });

    sugestie.innerHTML ="<ul>" + content.join('') + "</ul>";
}

function selectInput(list){
    caut.value = list.innerHTML;
    sugestie.innerHTML = '';
}
