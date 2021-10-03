function My()
{
    let x_min = document.getElementById("min").value;
    let x_max = document.getElementById("max").value;
    let step = document.getElementById("step").value
    
    alert("Цикл while");
    let i_one = Number(x_min);
    while(i_one<=Number(x_max))
    {
        let y = Math.exp(2*Math.pow(i_one,2)) * Math.tan(Math.abs(2*i_one)) * (-1);
        alert(y);
        i_one+=Number(step);
    }
    alert("Цикл do...while");
    let i_two = Number(x_min);
    do{
        let y = Math.exp(2*Math.pow(i_two,2)) * Math.tan(Math.abs(2*i_two)) * (-1);
        alert(y);
        i_two+=Number(step);
    }
    while(i_two<=Number(x_max))
    alert("Цикл for");
    for(let i=Number(x_min); i<=Number(x_max); i+=Number(step))
    {
       let y = Math.exp(2*Math.pow(i,2)) * Math.tan(Math.abs(2*i)) * (-1);
        alert(y);
    }
    
    
}
function Grafic()
{
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.translate(0, canvas.height);
    ctx.rotate(-Math.PI/2);
    let x_one=1.5, step_one=0.3;
    //Ось x
    ctx.moveTo(5,5);
    ctx.lineTo(190,5);
    ctx.lineTo(180,2);
    ctx.moveTo(190,5);
    ctx.lineTo(180,8);


    ctx.moveTo(175,22.5);
    ctx.lineTo(190,15);
    ctx.moveTo(175,15);
    ctx.lineTo(190,22.5);
    //Ось y
    ctx.moveTo(5,5);
    ctx.lineTo(5,490);
    ctx.lineTo(2,480);
    ctx.moveTo(5,490);
    ctx.lineTo(8,480);
    ctx.moveTo(30,475);
    ctx.lineTo(40,480);
    ctx.moveTo(30,475);
    ctx.lineTo(40,470);
    ctx.moveTo(30,475);
    ctx.lineTo(20,475);

    ctx.stroke();
    for(let i=0; i<x_one; i+=step_one)
    {
       let y = Math.exp(2*Math.pow(i,2)) * Math.tan(Math.abs(2*i)) * (-1);
    
       if(i==0){
            ctx.moveTo(i * 100 + 5,y * 100+5);
        }
        else
        {
         ctx.lineTo(i * 100 + 5, y*100+5);
    
        }
    }ctx.stroke();

}