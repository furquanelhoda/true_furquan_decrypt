// function countWords() {

// let text = document.getElementById("text").value;
// let wordsCounts = text.split(" ").length;


// document.getElementById("best4").innerHTML=wordsCounts;

// }

// // const words = text => {

// return text.split('/\S+/').length ;

// };




// //best code lettre
// let textWithoutSpace = text.replace(/\s/g, '');
// let arrayOfLetters = textWithoutSpace.split("");


// function countWord() {
// let counts = {};
// let text = document.getElementById("text").value;
// let wordsCount = text.split(" ").length;

// let textWithoutSpace = text.replace(/\s/g, '');
//  let arrayOfLetters = textWithoutSpace.split("");


// document.getElementById("best3").innerHTML=wordsCount;

// }








function countWord() {

    let text = document.getElementById("text").value;
     text =text.trim();
    
    
      
       
    
      
    
      
    
    let Counter1 = 0 ;
    let Counter2 = 0 ;
    let Counter3 = 0 ;
    let Counter4 = 0 ;
    
     let Counter5 = 0 ;
     let Counter6 = 0 ;
    let Counter7 = 0 ;
    let Counter8 = 0 ;
    let Counter9 = 0 ;
    let Counter10 = 0 ;
    
    let Counter11 = 0 ;
    let Counter12 = 0 ;
    let Counter13 = 0 ;
    let Counter14 = 0 ;
    let Counter15 = 0 ;
    let Counter16 = 0 ;
    let Counter17 = 0 ;
    let Counter18 = 0 ;
    let Counter19 = 0 ;
    let Counter20 = 0 ;
    let Counter21 = 0 ;
    let Counter22 = 0 ;
    let Counter23 = 0 ;
    let Counter24 = 0 ;
    let Counter25 = 0 ;
    let Counter26 = 0 ;
    let Counter27 = 0 ;
    let Counter28 = 0 ;
    let Counter29 = 0 ;
    
    
    
    
    
    
    
    
    
    
    
    let alif = ['ا','أ','إ','آ'];
    
    let laa = ['ل'];
    let haa = ['ح'];
    let mim = ['م'];
    let dal = ['د'];
    let haae = ['ه' ,'ة'];
    let raa = ['ر'];
    let baa = ['ب'];
    let ine = ['ع'];
    let yaa = ['ي','ى','ئ'];
     let noon = ['ن'];
    let kaf = ['ك'];
    let ouaou = ['و','ؤ'];
    let sin = ['س'];
    let taa = ['ت'];
    let saad = ['ص'];
    let ttae = ['ط'];
    let ppaf = ['ق'];
    let ddal = ['ذ'];
    let gaa = ['غ'];
    let daa = ['ض'];
    let faa = ['ف'];
    let zay = ['ز'];
    let kha = ['خ'];
    let chine = ['ش'];
    let ddda = ['ظ'];
    let jim = ['ج'];
    let ttta = ['ث'];
    
    
    
    for(ch of text) {
    
        let words = text.split(" ").length ;
    
    
       
    document.getElementById("best4").innerHTML=words;
    
     if (alif.includes(ch)){
        Counter1++
     }
     if (laa.includes(ch)){
        Counter2++
     }
    
     if (haa.includes(ch)){
       Counter3++
    }
    
    if (mim.includes(ch)){
       Counter4++
       
    }
    
    if (dal.includes(ch)){
       Counter5++
    }
    
    if (haae.includes(ch)){
       Counter6++
    }
    
    
    if (raa.includes(ch)){
       Counter7++
    }
    if (baa.includes(ch)){
       Counter8++
    }
    if (ine.includes(ch)){
       Counter9++
    }
    if (yaa.includes(ch)){
       Counter10++
    }
    
    if (noon.includes(ch)){
       Counter11++
    }
    
    
    if (kaf.includes(ch)){
       Counter12++
    }
    
    
    if (ouaou.includes(ch)){
       Counter13++
    }
    
    
    
    if (sin.includes(ch)){
       Counter14++
    }
    
    
    if (taa.includes(ch)){
       Counter15++
    }
    
    
    if (saad.includes(ch)){
       Counter16++
    }
    
    
    if (ttae.includes(ch)){
       Counter17++
    }
    
    
    if (ppaf.includes(ch)){
       Counter18++
    }
    
    
    if (ddal.includes(ch)){
       Counter19++
    }
    
    
    if (gaa.includes(ch)){
       Counter20++
    }
    
    
    if (daa.includes(ch)){
       Counter21++
    }
    
    
    if (faa.includes(ch)){
       Counter22++
    }
    
    
    if (zay.includes(ch)){
       Counter23++
    }
    
    
    if (kha.includes(ch)){
       Counter24++
    }
    
    
    if (chine.includes(ch)){
       Counter25++
    }
    
    
    if (ddda.includes(ch)){
       Counter26++
    }
    
    
    if (jim.includes(ch)){
       Counter27++
    }
    
    
    if (ttta.includes(ch)){
       Counter28++
    }
    
    
    
    }
    
    
    
    document.getElementById("alif").innerHTML=Counter1;
    document.getElementById("alif1").innerHTML=Counter1 * 13;
    
    document.getElementById("laa").innerHTML=Counter2;
    document.getElementById("laa2").innerHTML=Counter2*13;
    
    document.getElementById("haa").innerHTML=Counter3;
    document.getElementById("haa3").innerHTML=Counter3*7;
    
    document.getElementById("mim").innerHTML=Counter4;
    document.getElementById("mim4").innerHTML=Counter4*17;
    
    document.getElementById("dal").innerHTML=Counter5;
    document.getElementById("dal5").innerHTML=Counter5*5;
    
    document.getElementById("haae").innerHTML=Counter6;
    document.getElementById("haae6").innerHTML=Counter6*2;
    
    document.getElementById("raa").innerHTML=Counter7;
    document.getElementById("raa7").innerHTML=Counter7*2;
    
    document.getElementById("baa").innerHTML=Counter8;
    document.getElementById("baa8").innerHTML=Counter8*0;
    
    document.getElementById("ine").innerHTML=Counter9;
    document.getElementById("ine9").innerHTML=Counter9*2;
    
    document.getElementById("yaa").innerHTML=Counter10;
    document.getElementById("yaa10").innerHTML=Counter10*2;
    
    document.getElementById("noon").innerHTML=Counter11;
    document.getElementById("noon11").innerHTML=Counter11*1;
    
    document.getElementById("kaf").innerHTML=Counter12;
    document.getElementById("kaf12").innerHTML=Counter12*1;
    
    
    document.getElementById("ouaou").innerHTML=Counter13;
    document.getElementById("ouaou13").innerHTML=Counter13*6;
    
    
    document.getElementById("sin").innerHTML=Counter14;
    document.getElementById("sin14").innerHTML=Counter14*5;
    
    document.getElementById("taa").innerHTML=Counter15;
    document.getElementById("taa15").innerHTML=Counter15*8;
    
    document.getElementById("saad").innerHTML=Counter16;
    document.getElementById("saad16").innerHTML=Counter16*3;
    
    document.getElementById("ttae").innerHTML=Counter17;
    document.getElementById("ttae17").innerHTML=Counter17*4;
    
    document.getElementById("ppaf").innerHTML=Counter18;
    document.getElementById("ppaf18").innerHTML=Counter18*2;
    
    
    document.getElementById("ddal").innerHTML=Counter19;
    document.getElementById("ddal19").innerHTML=Counter19*3;
    
    document.getElementById("gaa").innerHTML=Counter20;
    document.getElementById("gaa20").innerHTML=Counter20*4;
    
    document.getElementById("daa").innerHTML=Counter21;
    document.getElementById("daa21").innerHTML=Counter21*2;
    
    document.getElementById("faa").innerHTML=Counter22;
    document.getElementById("faa22").innerHTML=Counter22*7;
    
    document.getElementById("zay").innerHTML=Counter23;
    document.getElementById("zay23").innerHTML=Counter23*2;
    
    document.getElementById("kha").innerHTML=Counter24;
    document.getElementById("kha24").innerHTML=Counter24*6;
    
    document.getElementById("chine").innerHTML=Counter25;
    document.getElementById("chine25").innerHTML=Counter25*5;
    
    document.getElementById("ddda").innerHTML=Counter26;
    document.getElementById("ddda26").innerHTML=Counter26*3;
    
    document.getElementById("jim").innerHTML=Counter27;
    document.getElementById("jim27").innerHTML=Counter27*9;
    
    document.getElementById("ttta").innerHTML=Counter28;
    document.getElementById("ttta28").innerHTML=Counter28*4;
    
  
    
    document.getElementById("text").addEventListener("keyup",countWord);
    
    document.getElementById("best14").innerHTML= Counter1*13 + Counter2*13 + Counter3*7 + Counter4*17  + Counter6*2 + Counter7*2  + Counter9*2 + Counter10*2 + Counter11*1 + Counter12*1  + Counter14*5 + Counter16*3 + Counter17*4 + Counter18*2  ;

    document.getElementById("best15").innerHTML=  Counter5*5 + Counter8*0 + Counter13*6 + Counter15*8  + Counter19*3 + Counter20*4 + Counter21*2 + Counter22*7 + Counter23*2 + Counter24*6 + Counter25*5 + Counter26*3 + Counter27*9 + Counter28*4 ;
    
    document.getElementById("best3").innerHTML= Counter1*13 + Counter2*13 + Counter3*7 + Counter4*17 + Counter5*5 + Counter6*2 + Counter7*2 + Counter8*0 + Counter9*2 + Counter10*2 + Counter11*1 + Counter12*1 + Counter13*6 + Counter14*5 + Counter15*8 + Counter16*3 + Counter17*4 + Counter18*2 + Counter19*3 + Counter20*4 + Counter21*2 + Counter22*7 + Counter23*2 + Counter24*6 + Counter25*5 + Counter26*3 + Counter27*9 + Counter28*4  ;
    
    document.getElementById("best6").innerHTML= Counter1 + Counter2 + Counter3 + Counter4 + Counter5 + Counter6 + Counter7 + Counter8 + Counter9 + Counter10 + Counter11 + Counter12 + Counter13 + Counter14 + Counter15 + Counter16 + Counter17 + Counter18 + Counter19 + Counter20 + Counter21 + Counter22 + Counter23 + Counter24 + Counter25 + Counter26 + Counter27 + Counter28 ;
    
    document.getElementById("best16").innerHTML= Counter1 + Counter2 + Counter3 + Counter4 + Counter6 + Counter7 +  Counter9 + Counter10 + Counter11 + Counter12 + Counter14 +  Counter16 + Counter17 + Counter18  ;
    document.getElementById("best17").innerHTML= Counter5 + Counter8 + Counter13 +Counter15 + Counter19 + Counter20 + Counter21 + Counter22 + Counter23 + Counter24 + Counter25 + Counter26 + Counter27 + Counter28;
    }
    
    