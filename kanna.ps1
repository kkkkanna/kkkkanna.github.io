try{
    curl https://u.warze.org/w/kanna.mp4 -OutFile %TEMP%\kanna.mp4
   }
catch{
    echo "nah"
    }
try{ 
    Start-Process -FilePath ms-photos:viewer?fileName=%TEMP%\kanna.mp4
   }  
catch{
    echo "fuck you"
    }
