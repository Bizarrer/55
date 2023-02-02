function splitArr(data) {
    let list1 = [];
    let list2 = [];
    for (let i = 0; i < 10; i++) {
        let random = Math.floor(Math.random() * (10 - i));
        if (list1.length < 5) {
            list1.push(data[random]);
            data.splice(random, 1);
        } else {
            list2.push(data[random]);
            data.splice(random, 1);
        }

    }
    return [list1, list2];
}

function choose_name() {
    var obj = document.querySelectorAll('.test'); //选择所有name="'test'"的对象，返回数组 
    //取到对象数组后，我们来循环检测它是不是被选中 
    var s = '';
    var name = [];
    for (var i = 0; i < obj.length; i++) {
        if (obj[i].checked) {
            s += obj[i].value + ' '
            name.push(obj[i].value);
        }; //如果选中，将value添加到变量s中 
    }
    if (name.length < 10) {
        alert('你还没有选择足够的参赛选手！你的选择是：\n' + s);
    } else if (name.length > 10) {
        alert('你选择过多的参赛选手！你的选择是：\n' + s);
    } else {
        alert('选择成功，开始随机匹配！你的选择是：\n' + s);
    }
    var list1, list2 = splitArr(name);
    console.log(list1);
    console.log(list2);
    var list_blue = list2[0]
    var list_red = list2[1]
    var top1 = document.querySelector('.top1')
    var jungle1 = document.querySelector('.jungle1')
    var middle1 = document.querySelector('.middle1')
    var bottom1 = document.querySelector('.bottom1')
    var support1 = document.querySelector('.support1')
    top1.innerHTML = list_blue[0]
    jungle1.innerHTML = list_blue[1]
    middle1.innerHTML = list_blue[2]
    bottom1.innerHTML = list_blue[3]
    support1.innerHTML = list_blue[4]

    var top2 = document.querySelector('.top2')
    var jungle2 = document.querySelector('.jungle2')
    var middle2 = document.querySelector('.middle2')
    var bottom2 = document.querySelector('.bottom2')
    var support2 = document.querySelector('.support2')
    top2.innerHTML = list_red[0]
    jungle2.innerHTML = list_red[1]
    middle2.innerHTML = list_red[2]
    bottom2.innerHTML = list_red[3]
    support2.innerHTML = list_red[4]

}