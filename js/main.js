function calc()
{
    var gpa=document.getElementById("GPA").value;
    if(gpa>3.7){
        document.getElementById("status").innerText="A";
    }
    else if(gpa==3.7){
        document.getElementById("status").innerText="A-";
    }
    else if(gpa>=3.3&&gpa<3.7){
        document.getElementById("status").innerText="B+";
    }
    else if(gpa>=3&&gpa<3.3){
        document.getElementById("status").innerText="B";
    }
    else if(gpa>=2.7&&gpa<3){
        document.getElementById("status").innerText="B-";
    }
    else if(gpa>=2.3&&gpa<2.7){
        document.getElementById("status").innerText="C+";
    }
    else if(gpa>=2&&gpa<2.3){
        document.getElementById("status").innerText="C";
    }
    else if(gpa>=1.7&&gpa<2){
        document.getElementById("status").innerText="C-";
    }
    else if(gpa>=1.3&&gpa<1.7){
        document.getElementById("status").innerText="D+";
    }
    else if(gpa>=1&&gpa<1.3){
        document.getElementById("status").innerText="D";
    }
    else{
        document.getElementById("status").innerText="F";
    }
    var gpa=document.getElementById("GPA").value=null;

}