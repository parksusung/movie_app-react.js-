import React from "react";


const foodILike = [
  {
    id:1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
  },
  {
    id:2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg"
  },
  {
    id:3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb"
  },
  {
    id:4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
  },
  {
    id:5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg"
  }
];

function Food({ name,picture }) {
  //( { something }) 인자안의 해당하는 값을 불러옴 인자로 jsx덕분 jsx=html+javascript
  //return 해서 html로 쓰여줄수있음 html문법에 js 문법썩어서 
  //ex) { 인자 } 를써서 사용해줄수 있다.
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt={name} />
    </div>
  );
}//alt={name} 해주는이유는 props 를위해서 그냥 구분시켜주는거임 확실하게 , 
//const foodILikc= [{ ? : ? , ?? : ??}  ,{} ] 배열생성
//한개한개 하기 귀찮으니까 배열생성해줘서 다뤄줄수있다. 

function App() {
  return (//배열에있는 것의 함수를 return해주는 foodILike.map(dish =>) 여기서 dish는 그냥 인자아무거나적어도댐
  //foodILike에있는 해당값을을 찾을때 dish.?? 으로 표현가능함 
  // ~~~~.map( 인자 = > ( <함수 , 인자값설정    />) )  
    <div>
      {
      foodILike.map(dish => (//foodILike라는배열에서 mapping 하겠다 (dish 라는 인자사용해서 )
        <Food key={dish.id} name={dish.name} picture={dish.image} />//food 함수로 인자인 name = {} , picture= { }로 return 해줌
        //key값을 주는이유는 요소들이 다 같게 판단하므로 똑똑하지않기떄문에 id값으로 key를 설정해줌 요소들이 다르게 겉으로 별다른 동작은 안하지만 
        //key값을 줌으로써 구분시켜줘서 에러를 없애줌 
      ))
      }
    </div>
  );
}


export default App;
