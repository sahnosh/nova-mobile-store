import { products } from './products.js';
export function prepareOrder(body) {
 const {name,email,address,items}=body;
 if(!name?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email||'') || !address?.trim() || !Array.isArray(items) || !items.length) throw new Error('Please provide your name, valid email, delivery address, and cart items.');
 const lines=items.map(item=>{ const product=products.find(p=>p.id===item.id); if(!product || !Number.isInteger(item.quantity) || item.quantity<1 || item.quantity>10) throw new Error('Invalid product or quantity (maximum 10 per item).'); return {id:product.id,name:product.name,quantity:item.quantity,price:product.price}; });
 const subtotal=lines.reduce((s,i)=>s+i.price*i.quantity,0);
 return {id:`NOVA-${crypto.randomUUID().slice(0,8).toUpperCase()}`,name:name.trim(),email,address:address.trim(),items:lines,total:subtotal,createdAt:new Date().toISOString(),status:'demo-confirmed'};
}
