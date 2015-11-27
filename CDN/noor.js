var texts = {
ar:{
    begin:'مرحباً.',
    about:'  نور عبارة عن روبوت ويب مبرمج بال(PHP) يقوم بحل الاسئلة الموجهه إليه  باللغة الانجليزية فقط عبر خوارزمية تبحث عن الأجابات في الأنترنت , احيانا يعرض اجابات متعددة وذلك لعجزه عن تحديد إي إجابة هي الأصح , نور لا يجيد الرياضيات لذلك فهو لا يقوم بحل المسائل الرياضية البسيطة او المعقدة ',
    step1:'اطرح سؤالك',
    step2:'انتظر الاجابة',
    step3:'شاهد الاجابة',
    star:'ابدأ',
    now:'الآن',
    free:'لا يحتاج إلى تسجيل',
    msg:'اكتب سؤالك :',
    send:'ارسال',
    dir:'rtl'
 },
en:{
  begin:'Hello.',
  about:"Noor is web bot ,resolved questions that you Provide to him in English only. through algorithm ,it looking for the answers in the internet . sometimes displays multiple answer, that because it can't determine which of the answers is true. Noor not good at math , so it can't solve mathematical problems simple or complex.",
  step1:'Provide your question',
  step2:'Wait the answer',
  step3:'Show the answer',
  star:'Ask me',
  now:'Now',
  msg:'Type your question :',
  free:'No sign-up required',
  send:'Send',
  dir:'ltr'
}

  }
    function switch_lang(id){
    var lang = $("#"+id).attr("lang");
    document.cookie="lang="+lang+"; path=/";
    $("html").attr('dir',texts[lang]['dir']);
    sets_phras();
     } 
    function sets_phras() {
    var lan = getCookie('lang');
    var names = Object.getOwnPropertyNames(texts[lan]); 
    $("html").attr('dir',texts[lan]['dir']);   
    for(names in texts['ar']){phras(names);}  
     } 
    function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
      }
    return "ar";
} 
    function phras(id){
    var lan = getCookie('lang');
    var elm = $('#phras-'+id);
    var phr = elm.attr('phras');
    var set = texts[lan][phr];
    if(set){elm.text(set);}else{elm.text('undefined')}
     }
function step(no) {
var check = $("#step-"+no).attr('class');
if(check!='fa-stack-1x'){
$("#step-"+no).attr('class','fa-stack-1x');
$("#step-"+no).text(no);
}else{
$("#step-"+no).attr('class','fa fa-check fa-stack-1x');
$("#step-"+no).text('');
}

}
function send(){
  msg = btoa(encodeURIComponent($('#msg').val()));
  document.getElementById("an").innerHTML = $('#msg').val();
  document.getElementById("bot").innerHTML = 'thinking .....';
  $.get('ask/do/'+msg, function(data){
   var answer = atob(data.replay);
  document.getElementById("bot").innerHTML = decodeURIComponent(answer);
   }, 'json');
   return false;
}
function begin(){
$('#begin-screen').hide();
$('#noor-screen').fadeIn();
}
 function random(){
 var dates = new Date();
 var random = btoa(Math.random()*(dates.getSeconds())+(dates.getMinutes()));
 return random.substr(0,11);
 }
 
window.onload = function() {
sets_phras();   
 $.get('http://noor.think3r.net/get/footer/'+random(),function(data){
 $("footer").html(data);
 });
$('#noor-screen').hide();  
}
