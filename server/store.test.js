import {test} from 'node:test';
import assert from 'node:assert/strict';
import {prepareOrder} from './store.js';
const customer={name:'Test Customer',email:'test@example.com',address:'123 Main Street'};
test('order prices are computed on server, ignoring submitted prices',()=>{const order=prepareOrder({...customer,items:[{id:'iphone-15-pro',quantity:2,price:1}]});assert.equal(order.total,1998);});
test('rejects invalid quantities and unknown products',()=>{for(const item of [{id:'iphone-15',quantity:-1},{id:'iphone-15',quantity:1.5},{id:'unknown',quantity:1}])assert.throws(()=>prepareOrder({...customer,items:[item]}));});
test('rejects empty cart and invalid customer details',()=>{assert.throws(()=>prepareOrder({...customer,items:[]}));assert.throws(()=>prepareOrder({...customer,email:'bad',items:[{id:'iphone-15',quantity:1}]}));});
