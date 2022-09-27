class Stack {
    stk = [];     
    push(num) {
        this.stk.push(num);
    }
    pop() {
        this.stk.pop();
    }
    isEmpty() {
        if (this.stk.length == 0)
            return "Stack Empty";
        else
            return "Not Empty";
    }
    size() {
        return this.stk.length;
    }
    top() {
        return this.stk.length - 1;
    }
}


let st = new Stack();
let oddArr = [];
let evenArr = [];
st.push(2);
st.push(1);
st.push(7);
st.push(4);
st.push(3);

                                          //2,1,7,4,3 //2,4
function oddCheck() {
    for (i = 0; i < st.stk.length; i++) {
        if ((st.stk[i]) % 2 == 0)
            evenArr.push(st.stk[i]);
        else
            oddArr.push(st.stk[i]);

    }

    let len = st.stk.length;
    for (i = 0; i < len; i++)
        st.pop();

    for (i = 0; i < evenArr.length; i++) {
        st.stk.unshift(evenArr[i]);
    }

    for (let item of st.stk)
        console.log(item);
}

// oddCheck();

// let copyArr = [];
// function duplicate() {
//     for (i = 0; i < st.stk.length; i++) {
//         copyArr.push(st.stk[i]);
//     }
//     console.log(copyArr);
// }
// duplicate();

