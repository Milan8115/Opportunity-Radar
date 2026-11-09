import test from 'node:test';
import assert from 'node:assert/strict';
import worker from '../worker/index.js';
test('anonymous users cannot mutate records',async()=>{
 for(const method of ['PUT','DELETE']){
  const r=await worker.fetch(new Request('https://test.local/api/items',{method,headers:{Origin:'https://test.local'}}),{});
  assert.equal(r.status,403);
 }
});
test('editing access requires the owner identity',async()=>{
 for(const [email,expected] of [['visitor@example.com',false],['milanchanda80@gmail.com',true]]){
  const r=await worker.fetch(new Request('https://test.local/api/session',{headers:{'oai-authenticated-user-id':'test','oai-authenticated-user-email':email}}),{});
  assert.equal((await r.json()).canEdit,expected);
 }
});
test('public homepage renders',async()=>{
 const r=await worker.fetch(new Request('https://test.local/'),{});
 assert.equal(r.status,200);assert.match(await r.text(),/Opportunity Radar/);
});
