import Vue from 'vue'
import Vuex from 'vuex'
import { MessageBox, Toast } from 'mint-ui';
import router from '../router';
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        goodStatus: false,
        cartStatus: false,
        nowChoosedItem: null,
        cartItem: [{ "id": 1, "name": "夏威夷果", "price": 20, "img": ["/img/food1.png", "/img/food3.png", "/img/food5.png"], "explain": "夏威夷果含有丰富的钙，磷 ，铁，维生素B1、B2和人体必需的8种氨基酸。", "num": 1 }],
        paidList: [],
        totel: 0,
        isSelectAll: false,
    },
    mutations: {
        enterDetailPages(state, val) {
            state.goodStatus = !state.goodStatus;
            if (state.goodStatus == true) {
                document.querySelector('body').setAttribute('style', 'position:fixed');
            }
            state.nowChoosedItem = val;
        },
        enterCartComponent(state, val) {
            state.cartStatus = !state.cartStatus;
            state.nowChoosedItem = val;
        },
        exitDetailPages(state) {
            state.goodStatus = !state.goodStatus;
            if (!state.goodStatus) {
                document.querySelector('body').removeAttribute('style');
            }
        },
        exitCartComponent(state) {
            state.cartStatus = !state.cartStatus;
        },
        itemBuyNow(state, arr) {
            let obj = arr.obj;
            let item = arr.item;
            let index = state.cartItem.findIndex(function(obj) {
                return obj.id == item.id;
            })
            if (index != -1) {
                state.cartItem[index].num += 1;
            } else {
                state.cartItem.push(obj);
            }
        },
        calTotel(state) {
            let sum = 0;
            for (var i = 0; i < state.cartItem.length; i++) {
                if (state.cartItem[i].isChecked == true) {
                    sum += state.cartItem[i].num * state.cartItem[i].price;
                }
            }
            state.totel = sum;
            sum = 0;
        },
        addCartNum(state, index) {
            state.cartItem[index].num++;
            this.commit('calTotel');
        },
        minusCartNum(state, index) {
            if (state.cartItem[index].num > 0) {
                state.cartItem[index].num--;
            }
            this.commit('calTotel');
        },
        delCartItem(state, index) {
            state.cartItem.splice(index, 1);
            this.commit('calTotel');
        },
        changeCartChecked(state, index) {
            let flag = 0;
            state.cartItem[index].isChecked = !state.cartItem[index].isChecked;
            for (var i = 0; i < state.cartItem.length; i++) {
                if (state.cartItem[i].isChecked == false) {
                    flag = 0;
                    break;
                }
                flag = 1;
            }
            if (flag == 1) {
                state.isSelectAll = true;
            } else {
                state.isSelectAll = false;
            }
            this.commit('calTotel');
        },
        changeAllCartChecked(state) {
            state.isSelectAll = !state.isSelectAll;
            if (state.isSelectAll == true) {
                for (var i = 0; i < state.cartItem.length; i++) {
                    state.cartItem[i].isChecked = true;
                }
            } else {
                for (var j = 0; j < state.cartItem.length; j++) {
                    state.cartItem[j].isChecked = false;
                }
            }
            this.commit('calTotel');
        },
        paynow(state) {
            let tempArray = [];
            for (var i = 0; i < state.cartItem.length; i++) {
                if (state.cartItem[i].isChecked == true) {
                    tempArray.push(state.cartItem[i]);
                }
            }
            if (tempArray.length != 0) {
                MessageBox.confirm('是否提交订单？ 共' + state.totel + '元')
                    .then(() => {
                        Toast({
                            message: '提交成功！',
                            position: 'bottom',
                            duration: 3000
                        });
                        for (var i = 0; i < state.cartItem.length; i++) {
                            if (state.cartItem[i].isChecked == true) {
                                state.cartItem.splice(i, 1);
                                i--;
                            }
                        }
                        let obj = tempArray;
                        obj.totel = state.totel;
                        state.paidList.push(obj);
                        router.push('/user');

                    })
                    .catch((err) => {
                        Toast({
                            message: '您已取消提交！',
                            position: 'bottom',
                            duration: 3000
                        });
                        console.log(err);
                    });
            } else {
                Toast({
                    message: '您还未选择商品',
                    position: 'bottom',
                    duration: 3000
                });
            }
        },
        CartComponentBuyNow(state, arr) {
            let obj = arr.obj;
            let item = arr.item;
            let index = state.cartItem.findIndex(function(obj) {
                return obj.id == item.id;
            })
            if (index != -1) {
                state.cartItem[index].num += obj.num;
            } else {
                state.cartItem.push(obj);
            }
        }
    },
    actions: {},
    modules: {}
})