"use strict";document.addEventListener("DOMContentLoaded",function(){new Vue({el:"#app",data:{text:"Vue",list:[{id:1,name:"スライム",hp:100},{id:2,name:"ゴブリン",hp:200},{id:3,name:"ドラゴン",hp:500}]},methods:{doAdd:function(){var t=this.list.reduce(function(t,e){return t>e.id?t:e.id},0);this.list.push({id:t+1,name:this.name,hp:500})},doRemove:function(t){this.list.splice(t,1)},doAttack:function(t){this.list[t].hp-=10}}})});