$(document).ready(function(){
  $('html').filedrop({
    fallback_id: 'mdfile',
    url: '/',
    paramname: 'mdfile',
    uploadFinished:function(i,file,response){
      if (response.error){
        alert("ERROR: " + response.error);
      }
      else {
        $('body').empty();
        $('body').html(response);
      }
    }
  });
});

