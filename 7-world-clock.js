
function wc(){
    var d = new Date();
    var ind=d.toLocaleString('en-US',{timeZone:'Asia/Kolkata',});
    // alert(ind);
    var chi=d.toLocaleString('en-US',{timeZone:'Asia/Shanghai',});
    // alert(chi);
    var ame=d.toLocaleString('en-US',{timeZone:'America/Los_Angeles',});
   //  alert(chi); 
     document.getElementById('india').innerHTML = ind.split(', ')[1];
     document.getElementById('china').innerHTML = chi.split(', ')[1];
     document.getElementById('america').innerHTML = ame.split(', ')[1];
}
wc();
    setInterval(()=>{
   wc()},1000);



