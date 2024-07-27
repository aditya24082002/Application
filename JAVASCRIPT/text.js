var a=[10,20,30,40,50];
document.write(a);
document.write("<br>");

var a=[10,20,30,40,50];
document.write(a[3]);
document.write("<br>");

var a=[10,20,30,40,50];
var sum=0;
for(b=0;b<=4;b++){
    document.write(a[b]+"<br>");
    sum=sum+a[b];
}
document.write("total sum :" +sum);

document.write("total sum :" +sum + 1);



var a=[10,20,30,40,50];
document.write("<ul>");
for(b=0;b<=4;b++){
    document.write("<li>"+a[b]+"</li>");
}
document.write("</ul>");