// Fruit Movement



setInterval(fruitpos, 4000);
function fruitpos(){    
    const cas = Math.random();
    var val=cas*10;
    if(val>6){
        val=val-3;
    }
    const ann=Math.floor(val);
    switch(ann){
        case 0:
            const f = document.querySelector(".tg");
            const fstyles = window.getComputedStyle(f);
            const fheight = fstyles.left;
            const fvalue = fheight.slice(0,-2);
            const fadde = parseInt(fvalue);
            const fsum = fadde-150;
            const fans = fsum+"px";
            if(fadde<250 || fadde>400){
                document.querySelector(".tg").style.left="300px";
                document.querySelector(".tg").style.top="300px";

            }
            else{
            document.querySelector(".tg").style.left=fans;}
            break;
        case 1:
            const f1 = document.querySelector(".tg");
            const fstyles1 = window.getComputedStyle(f1);
            const fheight1 = fstyles1.top;
            const fvalue1 = fheight1.slice(0,-2);
            const fadde1 = parseInt(fvalue1);
            const fsum1 = fadde1-150;
            const fans1 = fsum1+"px";
            if(fadde1<250 || fadde1>350){
                document.querySelector(".tg").style.left="300px";
                document.querySelector(".tg").style.top="300px";

            }
            else{
            document.querySelector(".tg").style.top=fans1;}
            break;
        case 2:
            const f2 = document.querySelector(".tg");
            const fstyles2 = window.getComputedStyle(f2);
            const fheight2 = fstyles2.left;
            const fvalue2 = fheight2.slice(0,-2);
            const fadde2 = parseInt(fvalue2);
            const fsum2 = fadde2+150;
            const fans2 = fsum2+"px";
            if(fadde2<300 || fadde2>800){
                document.querySelector(".tg").style.left="300px";
                document.querySelector(".tg").style.top="300px";

            }
            else{
            document.querySelector(".tg").style.left=fans2;}
            break;
        case 3:
                const f3 = document.querySelector(".tg");
                const fstyles3 = window.getComputedStyle(f3);
                const fheight3 = fstyles3.left;
                const fvalue3 = fheight3.slice(0,-2);
                const fadde3 = parseInt(fvalue3);
                const fsum3 = fadde3+200;
                const fans3 = fsum3+"px";
                if(fadde3<300 || fadde3>800){
                    document.querySelector(".tg").style.left="300px";
                document.querySelector(".tg").style.top="300px";
    
                }
                else{
                document.querySelector(".tg").style.left=fans3;}
                break;
        case 4:
                    const f4 = document.querySelector(".tg");
                    const fstyles4 = window.getComputedStyle(f4);
                    const fheight4 = fstyles4.top;
                    const fvalue4 = fheight4.slice(0,-2);
                    const fadde4 = parseInt(fvalue4);
                    const fsum4 = fadde4+200;
                    const fans4 = fsum4+"px";
                    if(fadde4<250 || fadde4>350){
                        document.querySelector(".tg").style.left="300px";
                document.querySelector(".tg").style.top="300px";
                    }
                    else{
                    document.querySelector(".tg").style.top=fans4;}
                    break;
        case 5:
                        const f5 = document.querySelector(".tg");
                        const fstyles5 = window.getComputedStyle(f5);
                        const fheight5 = fstyles5.top;
                        const fvalue5 = fheight5.slice(0,-2);
                        const fadde5 = parseInt(fvalue5);
                        const fsum5 = fadde5-150;
                        const fans5 = fsum5+"px";
                        if(fadde5<250 || fadde5>350){
                            document.querySelector(".tg").style.left="300px";
                            document.querySelector(".tg").style.top="300px";
            
                        }
                        else{
                        document.querySelector(".tg").style.top=fans5;
                        document.querySelector(".tg").style.left=fans5;}
                        break;  
              
        case 6:
                        const f6 = document.querySelector(".tg");
                            const fstyles6 = window.getComputedStyle(f6);
                            const fheight6 = fstyles6.left;
                            const fvalue6 = fheight6.slice(0,-2);
                            const fadde6 = parseInt(fvalue6);
                            const fsum6 = fadde6+200;
                            const fans6 = fsum6+"px";
                            if(fadde6<300 || fadde6>800){
                                document.querySelector(".tg").style.left="300px";
                                document.querySelector(".tg").style.top="300px";
                
                            }
                            else{
                            document.querySelector(".tg").style.left=fans6;}
                            break;





    }
    document.querySelector(".tg").classList.add("food");
    document.querySelector(".tg").classList.remove("invisible");
    

}



//The Contact

function chk(){
    const h = document.querySelector(".food");
    const sty=window.getComputedStyle(h);
    const lpos = sty.left;
    const ilpos=parseInt(lpos);
    const llpos = ilpos+10;
    const llipos = ilpos-10;
    const tpos = sty.top;
    const itpos=parseInt(tpos);
    const ttpos = itpos+10;
    const ttipos = itpos-10;
    const fo = document.querySelector(".head");
    const fsty = window.getComputedStyle(fo);
    const lifpos = fsty.left;
    const lfpos = parseInt(lifpos);
    const tifpos = fsty.top;
    const tfpos = parseInt(tifpos);
    if((lfpos>=llipos&&lfpos<=llpos) && (tfpos>=ttipos&&tfpos<=ttpos)){ 
        var audio = new Audio("/success-1-6297.mp3");
        audio.play();
    var t = document.querySelector(".count").innerHTML;
    var gh = parseInt(t);
    gh=gh+1;
    gh=gh+"";
    h.classList.add("invisible");
    h.classList.remove("food");
    document.querySelector(".count").innerHTML=gh;   
    }}


//Alien Movement
document.querySelector("body").addEventListener("keypress" ,function(event){
    move(event.key);

});



function  move(key){
    switch(key){
        case "d":
            const btn = document.querySelector(".head");
            const styles = window.getComputedStyle(btn);
            const height = styles.left;
            const value = height.slice(0,-2);
            const adde = parseInt(value);
            const sum = 25+adde;
            const ans = sum+"px";
            if(adde<1360){
            document.querySelector(".head").style.left=ans;
            chk();}
            else{
                document.querySelector(".head").style.left=adde;
                chk();}
            
        break;
        case "w":
            const wbtn = document.querySelector(".head");
            const wstyles = window.getComputedStyle(wbtn);
            const wheight = wstyles.top;
            const wvalue = wheight.slice(0,-2);
            const wadde = parseInt(wvalue);
            const wsum = wadde-25;
            const wans = wsum+"px";
            if(wadde>60){
            document.querySelector(".head").style.top=wans;
            chk();}
            else{
                document.querySelector(".head").style.top=wadde;
                chk();
            }
        break;
        case "a":
            const abtn = document.querySelector(".head");
            const astyles = window.getComputedStyle(abtn);
            const aheight = astyles.left;
            const avalue = aheight.slice(0,-2);
            const aadde = parseInt(avalue);
            const asum = aadde-25;
            const aans = asum+"px";
            if(aadde>120){
            document.querySelector(".head").style.left=aans;
            chk();}
            else{
                document.querySelector(".head").style.left=aadde;
                chk();
            }
        break;
        case "s":
            const sbtn = document.querySelector(".head");
            const sstyles = window.getComputedStyle(sbtn);
            const sheight = sstyles.top;
            const svalue = sheight.slice(0,-2);
            const sadde = parseInt(svalue);
            const ssum = 25+sadde;
            const sans = ssum+"px";
            if(sadde<600){
            document.querySelector(".head").style.top=sans;
            chk();}
            else{
                document.querySelector(".head").style.top=sadde;
                chk();
            }
        break;
        

    }

}


