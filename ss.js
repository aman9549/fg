<script>

// document.body.style.backgroundColor = "red"
        
        function bgChange(){

            var b = document.body.style.backgroundColor;

          
            if(b == ""){
                document.body.style.backgroundColor = "red"
            }
           else  if(b == "red"){
document.body.style.backgroundColor = "black"
           }else if(b == "black"){
           document.body.style.backgroundColor = "red"
           }
        }
    </script>