import React from 'react'
import {View, Text} from 'react-native'

class Adapter {

    constructor() {
        this.dataSource = [];
    }

    addItem(item) {
        this.dataSource.push(item);
    }

    getItem(key) {
        return this.dataSource[key];
    }

    getView({item, index}) {
        let holderClass = item.getHolder();
        let holder = new holderClass();
        return holder.build(item);
    }

    getCount() {
        return this.dataSource.length;
    }

    getDataSource() {
        return this.dataSource;
    }

    remove(key) {
        for (let i = 0; i < this.dataSource.length; i++) {
            if (this.dataSource[i].key === key) {
                this.dataSource.splice(i, 1);
            }
        }
    }

    removeAll() {
        this.dataSource = [];
    }

    removeItem(item) {
        let index = this.indexOf(item);
        if (index >= 0)
            this.remove(index);
    }

    indexOf(item) {
        for (let i in this.dataSource) {
            if (item == this.dataSource[i]) {
                return i;
            } else {
                continue;
            }
        }
        return -1;
    }

    getEmptyData() {
        return (
            <View><Text>暂无数据</Text></View>
        );
    }

    getKey(item, index) {
        return item.getKey();
    }

    getSortData(key) {
        return this.dataSource.sort((a, b) => {
            return a[key] - b[key];
        })
    }
}

export default Adapter;
