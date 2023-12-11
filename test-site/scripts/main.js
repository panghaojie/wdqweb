/*
 * @Descripttion: file
 * @Author: panghaojie
 * @Email: pang_hao_jie@163.com
 * @Date: 2023-12-10 21:14:52
 * @LastEditTime: 2023-12-10 21:51:22
 */
let myHeading = document.querySelector('h1');
let myImage = document.querySelector('img');
let myButton = document.querySelector("button");

function setUserName(){
    let myName = prompt('请输入名字');
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla 酷毙了' + myName;
    }
}


myHeading.textContent = 'HELLO WORLD !'

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox.png'){
        myImage.setAttribute('src', 'images/firefox2.png')
    }else{
        myImage.setAttribute('src', 'images/firefox.png')
    }
}



myButton.onclick = function () {
    if (!localStorage.getItem("name")) {
            setUserName();
        } else {
            let storedName = localStorage.getItem("name");
            myHeading.textContent = "Mozilla 酷毙了，" + storedName;
        }
}
