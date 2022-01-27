


async function page1(r1,r2,r3,r4,r5){
    let res=await fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json")
    let result=await res.json();
    console.log(result[0].id);

    //creating id column
    document.getElementById('row1').innerHTML=result[r1].id;
    document.getElementById('row2').innerHTML=result[r2].id;
    document.getElementById('row3').innerHTML=result[r3].id;
    document.getElementById('row4').innerHTML=result[r4].id;
    document.getElementById('row5').innerHTML=result[r5].id;

    //creating name column
    document.getElementById('r1-d1').innerHTML=result[r1].name;
    document.getElementById('r2-d1').innerHTML=result[r2].name;
    document.getElementById('r3-d1').innerHTML=result[r3].name;
    document.getElementById('r4-d1').innerHTML=result[r4].name;
    document.getElementById('r5-d1').innerHTML=result[r5].name;

    //creating email column
    document.getElementById('r1-d2').innerHTML=result[r1].email;
    document.getElementById('r2-d2').innerHTML=result[r2].email;
    document.getElementById('r3-d2').innerHTML=result[r3].email;
    document.getElementById('r4-d2').innerHTML=result[r4].email;
    document.getElementById('r5-d2').innerHTML=result[r5].email;
} 
page1(0,1,2,3,4);
