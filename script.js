$(document).ready(function(){
  
$(' :checkbox').change(function() {
    // this will contain a reference to the checkbox   
    if (this.checked) {
        $('#1').html('١');
        $('#2').html('٢');
        $('#3').html('٣');
        $('#4').html('٤');
        $('#5').html('٥');
        $('#6').html('٦');
        $('#7').html('٧');
        $('#8').html('٨');
        $('#9').html('٩');
        $('#0').html('٠');
        $('#q').html('ض');
        $('#w').html('ص');
        $('#e').html('ث');
        $('#r').html('ق');
        $('#t').html('ف');
        $('#y').html('غ');
        $('#u').html('ع');
        $('#i').html('ه');
        $('#o').html('خ');
        $('#p').html('ح');
        $('#a').html('ش');
        $('#s').html('س');
        $('#d').html('ي');
        $('#f').html('ب');
        $('#g').html('ل');
        $('#h').html('ا');
        $('#j').html('ت');
        $('#k').html('ن');
        $('#l').html('م');
        $('#semicolon').html('ك');
        $('#z').html('ظ');
        $('#x').html('ط');
        $('#c').html('ذ');
        $('#v').html('د');
        $('#b').html('ز');
        $('#n').html('ر');
        $('#m').html('و');
        $('#jj').html('ج');
        $('#tt').html('ة');
        $('#dele').html('حذف');
        
    } else {
        // the checkbox is now no longer checked
        $('#1').html('1');
        $('#2').html('2');
        $('#3').html('3');
        $('#4').html('4');
        $('#5').html('5');
        $('#6').html('6');
        $('#7').html('7');
        $('#8').html('8');
        $('#9').html('9');
        $('#0').html('0');
        $('#q').html('q');
        $('#w').html('w');
        $('#e').html('e');
        $('#r').html('r');
        $('#t').html('t');
        $('#y').html('y');
        $('#u').html('u');
        $('#i').html('i');
        $('#o').html('o');
        $('#p').html('p');
        $('#a').html('a');
        $('#s').html('s');
        $('#d').html('d');
        $('#f').html('f');
        $('#g').html('g');
        $('#h').html('h');
        $('#j').html('j');
        $('#k').html('k');
        $('#l').html('l');
        $('#semicolon').html(';');
        $('#z').html('z');
        $('#x').html('x');
        $('#c').html('c');
        $('#v').html('v');
        $('#b').html('b');
        $('#n').html('n');
        $('#m').html('m');
        $('#jj').html('[');
        $('#tt').html(']');
        $('#dele').html('delete');

    }
});


}); 
