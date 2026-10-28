import {test} from 'node:test';
import assert from 'node:assert/strict';
import {translate,formatNumber,formatMoney,normalizeSearch} from './i18n.js';
import {products} from '../server/products.js';

test('every product has Dari names, colors, descriptions and brand translations',()=>{
 for(const p of products)for(const field of ['name','brand','color','description',...(p.badge?['badge']:[])]){
  assert.notEqual(translate('fa-AF',p[field]),p[field],`${p.id}: ${field}`);
  assert.equal(translate('en',p[field]),p[field]);
 }
});
test('formats Dari digits and retains USD currency without changing the amount',()=>{
 assert.equal(formatNumber('fa-AF',2026),'۲۰۲۶');
 assert.equal(formatNumber('en',2026),'2026');
 assert.match(formatMoney('fa-AF',999),/۹۹۹/);
 assert.equal(formatMoney('en',999),'$999');
});
test('search matches Dari and Arabic letter and digit variants',()=>{
 assert.equal(normalizeSearch('آیفون ۱۵'),normalizeSearch('آيفون ١٥'));
 assert.equal(normalizeSearch('پیکسل ۸'),normalizeSearch('پيكسل 8'));
 assert.equal(normalizeSearch('iPhone 15'),normalizeSearch('IPHONE 15'));
});
