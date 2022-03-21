// var a =11
// var b =0
//if(a%b==0)console.log("so chan")
//else console.log("so le")
//while(a<100){
   // console.log(a) ;
   // a++;}
// for(var i=1;i<a;i++){
    //console.log(i);
//}
// ham tinh gia tien

// var soluong=100
// var dongia=10
// function giatien(dongia,soluong){
// console.log("Giatien="+(soluong*dongia));
// }
// giatien(dongia,soluong)
//goi tung phan tu co trong bien
// var blues=['ao','giay','dep','sex toy'];
// for(var bien of blues)
// console.log(bien)
const clothes=['ao','giay','quan','dep']
for (const clothe of clothes) {
    console.log(clothe);
}
const test=clothes.map(clothe=>{
    if(clothe==="giay" || clothe==="dep")
    return`doi ${clothe}`;  
    return `cai ${clothe}`;
    
})
    console.log(test);


// for (const clothe of test) {
//     console.log(test);
// }